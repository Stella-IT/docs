import { existsSync } from "node:fs";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const contentRoot = path.join(projectRoot, "content", "ko");
const publicRoot = path.join(projectRoot, "public");

const walk = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(entryPath) : [entryPath];
    }),
  );

  return files.flat().filter((file) => file.endsWith(".md"));
};

const toRoute = (file) => {
  const relative = path
    .relative(contentRoot, file)
    .split(path.sep)
    .join("/")
    .replace(/\.md$/, "")
    .replace(/(^|\/)index$/, "");
  return `/${relative}`.replace(/\/$/, "") || "/";
};

const yamlValue = (frontmatter, key) => {
  const value = frontmatter.match(
    new RegExp(`^${key}:[ \\t]*(.*?)[ \\t]*$`, "m"),
  );
  if (!value) return null;
  return value[1].replace(/^(['"])(.*)\1$/, "$2").trim();
};

const linkTargets = (content) => [
  ...[...content.matchAll(/\[[^\]]*\]\(([^)\s]+)(?:\s+[^)]*)?\)/g)].map(
    (match) => match[1],
  ),
  ...[...content.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/gi)].map(
    (match) => match[1],
  ),
];

const files = await walk(contentRoot);
const routes = new Set(files.map(toRoute));
const documents = await Promise.all(
  files.map(async (file) => {
    const content = await readFile(file, "utf8");
    const frontmatter = content.match(
      /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/,
    )?.[1];
    return { file, content, frontmatter };
  }),
);
const categories = new Set(
  documents
    .map(({ frontmatter }) => frontmatter && yamlValue(frontmatter, "category"))
    .filter(Boolean),
);
const errors = [];

for (const { file, content, frontmatter } of documents) {
  const relativeFile = path.relative(projectRoot, file);

  if (!frontmatter) {
    errors.push(`${relativeFile}: frontmatter가 없습니다.`);
    continue;
  }

  const route = toRoute(file);
  const title = yamlValue(frontmatter, "title");
  const description = yamlValue(frontmatter, "description");
  const category = yamlValue(frontmatter, "category");

  if (!title) errors.push(`${relativeFile}: title이 비어 있습니다.`);
  if (!description)
    errors.push(`${relativeFile}: description이 비어 있습니다.`);
  if (category === null || (!category && route !== "/")) {
    errors.push(`${relativeFile}: category가 비어 있습니다.`);
  }
  for (const rawTarget of linkTargets(content)) {
    const target = rawTarget.replace(/^<|>$/g, "");
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(target)) continue;

    const cleanTarget = target.split(/[?#]/)[0];
    if (!cleanTarget) continue;

    let decodedTarget;
    try {
      decodedTarget = decodeURIComponent(cleanTarget);
    } catch {
      errors.push(`${relativeFile}: URL 인코딩이 잘못되었습니다: ${target}`);
      continue;
    }

    if (decodedTarget === "/ko" || decodedTarget.startsWith("/ko/")) {
      errors.push(`${relativeFile}: /ko 접두사를 제거하세요: ${target}`);
      continue;
    }

    if (decodedTarget.startsWith("/category/")) {
      const categoryName = decodedTarget.slice("/category/".length);
      if (!categories.has(categoryName)) {
        errors.push(`${relativeFile}: 존재하지 않는 카테고리 링크: ${target}`);
      }
      continue;
    }

    if (decodedTarget.startsWith("/")) {
      if (
        !routes.has(decodedTarget.replace(/\/$/, "") || "/") &&
        !existsSync(path.join(publicRoot, decodedTarget))
      ) {
        errors.push(`${relativeFile}: 존재하지 않는 내부 링크: ${target}`);
      }
      continue;
    }

    const relativePath = path.resolve(path.dirname(file), decodedTarget);
    const relativeRoute = path.posix.normalize(
      path.posix.join(path.posix.dirname(route), decodedTarget),
    );
    if (
      !existsSync(relativePath) &&
      !existsSync(`${relativePath}.md`) &&
      !routes.has(relativeRoute.replace(/\.md$/, "").replace(/\/$/, ""))
    ) {
      errors.push(`${relativeFile}: 존재하지 않는 상대 링크: ${target}`);
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`콘텐츠 ${files.length}개와 내부 링크를 확인했습니다.`);
}

const isPlainObject = (value) =>
  value !== null && typeof value === "object" && !Array.isArray(value);

const isMinimarkNode = (node) =>
  Array.isArray(node) && typeof node[0] === "string";

const getMinimarkChildrenOffset = (node) => (isPlainObject(node[1]) ? 2 : 1);

const getNodeTag = (node) => {
  if (isMinimarkNode(node)) return node[0];
  return node?.tag || node?.tagName;
};

const getNodeProps = (node) => {
  if (isMinimarkNode(node)) {
    return isPlainObject(node[1]) ? node[1] : {};
  }

  return node?.props || {};
};

const getChildren = (node) => {
  if (!node) return [];
  if (Array.isArray(node)) {
    return isMinimarkNode(node)
      ? node.slice(getMinimarkChildrenOffset(node))
      : node;
  }
  if (Array.isArray(node.children)) return node.children;
  if (node.type === "minimark" && Array.isArray(node.value)) return node.value;

  return [];
};

const isHiddenTag = (tag) => ["script", "style"].includes(tag);

const getNodeText = (node) => {
  if (!node) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (node.type === "text") return node.value || "";

  const tag = getNodeTag(node);
  if (isHiddenTag(tag)) return "";

  return getChildren(node).map(getNodeText).join("");
};

const normalizeInlineMarkdown = (value) =>
  value
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();

const wrapInlineCode = (value) => {
  const text = value || "";
  const longestRun =
    text.match(/`+/g)?.reduce((max, run) => Math.max(max, run.length), 0) || 0;
  const fence = "`".repeat(longestRun + 1);
  const padding = text.startsWith(" ") || text.endsWith(" ") ? " " : "";
  return `${fence}${padding}${text}${padding}${fence}`;
};

const renderInlineChildren = (children) =>
  normalizeInlineMarkdown(children.map(renderInlineNode).join(""));

const renderInlineNode = (node) => {
  if (!node) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (node.type === "text") return node.value || "";

  const tag = getNodeTag(node);
  if (!tag) return getNodeText(node);
  if (isHiddenTag(tag)) return "";

  const props = getNodeProps(node);
  const content = renderInlineChildren(getChildren(node));

  if (tag === "br") return "\n";
  if (tag === "code") return wrapInlineCode(getNodeText(node));
  if (tag === "strong" || tag === "b") return content ? `**${content}**` : "";
  if (tag === "em" || tag === "i") return content ? `*${content}*` : "";
  if (tag === "a")
    return props.href && content ? `[${content}](${props.href})` : content;
  if (tag === "img")
    return props.src ? `![${props.alt || "image"}](${props.src})` : "";

  return content;
};

const renderBlockChildren = (children) =>
  children
    .map(renderBlockNode)
    .map((value) => value.trim())
    .filter(Boolean)
    .join("\n\n");

const blockTags = [
  "alert",
  "blockquote",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "ol",
  "p",
  "pre",
  "table",
  "ul",
];

const hasBlockChildren = (children) =>
  children.some((child) => blockTags.includes(getNodeTag(child)));

const renderFlowChildren = (children) =>
  hasBlockChildren(children)
    ? renderBlockChildren(children)
    : renderInlineChildren(children);

const renderBlockNode = (node) => {
  if (!node) return "";
  if (typeof node === "string" || typeof node === "number")
    return String(node).trim();
  if (node.type === "text") return (node.value || "").trim();

  const tag = getNodeTag(node);
  if (!tag) return getNodeText(node).trim();
  if (isHiddenTag(tag)) return "";

  const props = getNodeProps(node);
  const children = getChildren(node);

  if (/^h[1-6]$/.test(tag)) {
    const depth = Number(tag.slice(1));
    return `${"#".repeat(depth)} ${renderInlineChildren(children)}`;
  }

  if (tag === "p") return renderInlineChildren(children);
  if (tag === "pre") return renderCodeBlock(node);
  if (tag === "ul") return renderList(node, false);
  if (tag === "ol") return renderList(node, true);
  if (tag === "blockquote") return quoteMarkdown(renderFlowChildren(children));
  if (tag === "alert") return renderAlert(node);
  if (tag === "img")
    return props.src ? `![${props.alt || "image"}](${props.src})` : "";
  if (tag === "table") return renderTable(node);
  if (tag === "hr") return "---";
  if (tag === "br") return "";

  return renderBlockChildren(children) || renderInlineChildren(children);
};

const getClassNames = (value) => {
  if (!value) return [];
  if (typeof value === "string") return value.split(/\s+/).filter(Boolean);
  if (Array.isArray(value)) return value.flatMap(getClassNames);
  if (isPlainObject(value)) {
    return Object.entries(value)
      .filter(([, enabled]) => enabled)
      .map(([name]) => name);
  }

  return [];
};

const getLanguage = (props) =>
  props.language ||
  getClassNames(props.className || props.class)
    .find((className) => className.startsWith("language-"))
    ?.replace(/^language-/, "") ||
  "";

const createCodeFence = (code) => {
  const longestRun =
    code.match(/`{3,}/g)?.reduce((max, run) => Math.max(max, run.length), 2) ||
    2;
  return "`".repeat(longestRun + 1);
};

const renderCodeBlock = (node) => {
  const props = getNodeProps(node);
  const language = getLanguage(props);
  const code = typeof props.code === "string" ? props.code : getNodeText(node);
  const fence = createCodeFence(code);
  return `${fence}${language}\n${code.replace(/\n$/, "")}\n${fence}`;
};

const renderList = (node, ordered) => {
  let index = Number(getNodeProps(node).start || 1);
  return getChildren(node)
    .filter((child) => getNodeTag(child) === "li")
    .map((child) => {
      const marker = ordered ? `${index++}. ` : "- ";
      const item = renderListItem(child);
      return `${marker}${indentMultiline(item, marker.length)}`;
    })
    .join("\n");
};

const renderListItem = (node) => {
  const parts = [];
  let inlineNodes = [];

  const flushInlineNodes = () => {
    const inline = renderInlineChildren(inlineNodes);
    if (inline) parts.push(inline);
    inlineNodes = [];
  };

  getChildren(node).forEach((child) => {
    const tag = getNodeTag(child);
    const isBlock = blockTags.includes(tag);

    if (isBlock) {
      flushInlineNodes();
      const block = renderBlockNode(child);
      if (block) parts.push(block);
    } else {
      inlineNodes.push(child);
    }
  });

  flushInlineNodes();
  return parts.join("\n\n");
};

const indentMultiline = (value, size) => {
  const padding = " ".repeat(size);
  return value.replace(/\n/g, `\n${padding}`).trimEnd();
};

const quoteMarkdown = (value) =>
  value
    .split("\n")
    .map((line) => (line ? `> ${line}` : ">"))
    .join("\n");

const renderAlert = (node) => {
  const type = (getNodeProps(node).type || "info").toUpperCase();
  const content = renderFlowChildren(getChildren(node));
  return quoteMarkdown(`[!${type}]\n${content}`);
};

const collectRows = (node) => {
  if (!node) return [];
  const tag = getNodeTag(node);
  if (tag === "tr") return [node];
  return getChildren(node).flatMap(collectRows);
};

const renderTable = (node) => {
  const rows = collectRows(node)
    .map((row) =>
      getChildren(row)
        .filter((cell) => ["td", "th"].includes(getNodeTag(cell)))
        .map((cell) =>
          renderInlineChildren(getChildren(cell))
            .replace(/\|/g, "\\|")
            .replace(/\s*\n\s*/g, " "),
        ),
    )
    .filter((row) => row.length > 0);

  if (!rows.length) return "";

  const header = rows[0];
  const separator = header.map(() => "---");
  const body = rows.slice(1);
  return [header, separator, ...body]
    .map((row) => `| ${row.join(" | ")} |`)
    .join("\n");
};

export const buildLlmContent = (page) => {
  const pagePath = page?.path?.replace(/^\/ko/, "") || "";
  const sourceUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}`
      : pagePath;
  const bodyChildren = getChildren(page?.body);
  const contentChildren =
    bodyChildren[0] &&
    getNodeTag(bodyChildren[0]) === "h1" &&
    getNodeText(bodyChildren[0]).trim() === page?.title?.trim()
      ? bodyChildren.slice(1)
      : bodyChildren;

  return [
    `# ${page?.title || "Untitled"}`,
    page?.description ? `Description: ${page.description}` : "",
    sourceUrl ? `Source: ${sourceUrl}` : "",
    "",
    renderBlockChildren(contentChildren),
  ]
    .filter((line, index) => index === 3 || line)
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .concat("\n");
};

export const writeTextToClipboard = async (value) => {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return;
    } catch (_) {
      // Fall back to execCommand for non-secure contexts or denied permissions.
    }
  }

  if (typeof document === "undefined") {
    throw new Error("Clipboard is unavailable outside the browser");
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(textarea);

  if (!copied) throw new Error("Clipboard copy failed");
};

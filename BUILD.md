# Build Guide
This build direction is for creating reproducible build of **AppieDocs**.  

## Setup

Install dependencies:

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

## Static Build

This will create the `dist/` directory for publishing to static hosting:

```bash
pnpm build
```

`pnpm build:static` and `pnpm generate` run the same static build.

To preview the generated static app locally:

```bash
pnpm preview
```

Stop the preview server after checking the build.

## Server Build

Use this only when deploying the Nuxt server output instead of static hosting:

```bash
pnpm build:server
pnpm start
```

This creates and runs `.output/server/index.mjs`.

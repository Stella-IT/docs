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

## Static Generation

This will create the `dist/` directory for publishing to static hosting:

```bash
pnpm generate
```

To preview the static generated app, run `pnpm start`

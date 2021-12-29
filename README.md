# monorepo-skeleton

Experimenting a monorepo structure utilizes [yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/). The monorepo should support:
- propriatary private application development 
- public library continuous development which can be depended by the private applications 
- shared configs across all packages & apps 
- only one instance of dev dependencies installed
- all dependencies are deduped when possible- [handled by yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/#toc-how-to-use-it)

### Structure

```
- apps
  - demo-app (private, depends on wyx-utils)
- packages
  - wyx-utils (public, gitignored)
  - configs (tsconfig, eslint etc)
- packages.json (linter ,shared dependencies)
```

## Setup

- Clone [wyx-utils](https://github.com/yxwww/wyx-utils) into `./packages`
- `yarn install` on root

## TODOs:
- [ ] ensure application builds and deploys. Possibly just send straight to nextjs
  - [ ] experimenting `turborepo`

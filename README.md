# zhi-env

a cross-platform env config lib

![version](https://img.shields.io/github/release/terwer/zhi-env.svg?style=flat-square)
![license](https://img.shields.io/badge/license-MIT-blue.svg?style=popout-square)

## Usage

For `vite`

```ts
import Env from "zhi-env"

const env = new Env(import.meta.env)
const val = env.getEnv("some-key")
console.log("val=>", val)
```

For `Nuxt` framework

```ts
import Env from "zhi-env"

const nuxtEnv = useRuntimeConfig()
const env = new Env(nuxtEnv)

const val = env.getEnv("some-key")
console.log("val=>", val)
```

## Deps

```
## Congregations! zhi-env need no deps, it is just pure js code 🎉
```

## Useful scripts

### Build

```bash
pnpm ci
```

### Publish to npm

```bash
pnpm package
```

### Docs

```bash
pnpm vitepress:dev
```

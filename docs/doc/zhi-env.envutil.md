<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [zhi-env](./zhi-env.md) &gt; [EnvUtil](./zhi-env.envutil.md)

## EnvUtil class

环境变量工具类

**Signature:**

```typescript
declare class EnvUtil
```

## Properties

| Property                                    | Modifiers           | Type    | Description        |
| ------------------------------------------- | ------------------- | ------- | ------------------ |
| [isDev](./zhi-env.envutil.isdev.md)         | <code>static</code> | boolean | 是否是调试阶段     |
| [isNodeDev](./zhi-env.envutil.isnodedev.md) | <code>static</code> | boolean | 是否是开发阶段调试 |

## Methods

| Method                                                                     | Modifiers           | Description                                            |
| -------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------ |
| [getBooleanEnv(key)](./zhi-env.envutil.getbooleanenv.md)                   | <code>static</code> | 获取 Boolean 类型的环境变量，key 不存在返回 false      |
| [getEnv(key)](./zhi-env.envutil.getenv.md)                                 | <code>static</code> | 获取环境变量，key 不存在返回 undefined                 |
| [getEnvOrDefault(key, defaultValue)](./zhi-env.envutil.getenvordefault.md) | <code>static</code> | 获取环境变量，如果未定义或者为空值，用指定的默认值代替 |
| [getStringEnv(key)](./zhi-env.envutil.getstringenv.md)                     | <code>static</code> | 获取 String 类型的环境变量，key 不存在直接返回空值     |
import { describe, expect, it } from "vitest"
import EnvUtil from "../src"
import EnvConstants from "../src/EnvConstants"

describe("test index", () => {
  const NOT_EXIST_KEY = "NOT_EXIST_KEY"

  it("test getEnv undefined", function () {
    const env = EnvUtil.getEnv(NOT_EXIST_KEY)
    console.log("env=>", env)
    expect(env).toBeUndefined()
  })

  it("test getEnv ok", function () {
    const env = EnvUtil.getEnv(EnvConstants.VITE_DEBUG_MODE_KEY)
    console.log("env=>", env)
    // expect(env).toBeTruthy()
  })

  it("test getStringEnv", function () {
    const env = EnvUtil.getStringEnv(EnvConstants.VITE_DEBUG_MODE_KEY)
    console.log("env=>", env)
    expect(env).toBeTypeOf("string")
  })

  it("test getBooleanEnv", function () {
    const env = EnvUtil.getBooleanEnv(EnvConstants.VITE_DEBUG_MODE_KEY)
    console.log("env=>", env)
    expect(env).toBeTypeOf("boolean")
  })

  it("test getEnvOrDefault", function () {
    const env = EnvUtil.getEnvOrDefault(NOT_EXIST_KEY, "hello")
    console.log("env=>", env)
    expect(env).toBeTypeOf("string")
  })
})

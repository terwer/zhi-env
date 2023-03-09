import { describe, expect, it } from "vitest"
import Env from "../src"
import EnvConstants from "../src/EnvConstants"

describe("test index", () => {
  const NOT_EXIST_KEY = "NOT_EXIST_KEY"

  const env = new Env(import.meta.env)

  it("test getEnv undefined", function () {
    const val = env.getEnv(NOT_EXIST_KEY)
    console.log("env=>", val)
    expect(val).toBeUndefined()
  })

  it("test getEnv ok", function () {
    const val = env.getEnv(EnvConstants.VITE_DEBUG_MODE_KEY)
    console.log("env=>", val)
    // expect(val).toBeTruthy()
  })

  it("test getStringEnv", function () {
    const val = env.getStringEnv(EnvConstants.VITE_DEBUG_MODE_KEY)
    console.log("env=>", val)
    expect(val).toBeTypeOf("string")
  })

  it("test getBooleanEnv", function () {
    const val = env.getBooleanEnv(EnvConstants.VITE_DEBUG_MODE_KEY)
    console.log("env=>", val)
    expect(val).toBeTypeOf("boolean")
  })

  it("test getEnvOrDefault", function () {
    const val = env.getEnvOrDefault(NOT_EXIST_KEY, "hello")
    console.log("env=>", val)
    expect(val).toBeTypeOf("string")
  })
})

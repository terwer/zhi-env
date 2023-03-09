/**
 * @packageDocumentation
 * 环境变量工具类，用于跨平台处理环境变量的通用工具类
 */

import EnvConstants from "./EnvConstants"

/**
 * 环境变量工具类
 *
 * @public
 * @author terwer
 * @since 0.0.1
 */
class EnvUtil {
  private readonly envMeta

  /**
   * 是否是开发阶段调试
   */
  public isNodeDev() {
    return this.getEnv(EnvConstants.NODE_ENV_KEY) === "development"
  }

  /**
   * 是否是调试阶段
   */
  public isDev() {
    return (
      this.isNodeDev() || this.getBooleanEnv(EnvConstants.VITE_DEBUG_MODE_KEY)
    )
  }

  /**
   * 环境初始化
   *
   * @param envMeta 需要传入 import.meta.env
   */
  constructor(envMeta: any) {
    this.envMeta = envMeta
  }

  /**
   * 获取环境变量，key不存在返回undefined
   * @param key - key
   */
  public getEnv(key: string): string | undefined {
    let env
    try {
      if (this.envMeta[key]) {
        env = this.envMeta[key]
      }
    } catch (e: any) {
      console.error(e)
    }

    return env
  }

  /**
   * 获取String类型的环境变量，key不存在直接返回空值
   * @param key - key
   */
  public getStringEnv(key: string): string {
    return this.getEnv(key) ?? ""
  }

  /**
   * 获取Boolean类型的环境变量，key不存在返回false
   * @param key - key
   */
  public getBooleanEnv(key: string): boolean {
    let env = false
    if (this.getEnv(key)) {
      env = this.getStringEnv(key).toLowerCase() === "true"
    }
    return env
  }

  /**
   * 获取环境变量，如果未定义或者为空值，用指定的默认值代替
   *
   * @param key - key
   * @param defaultValue - 默认值
   * @since 0.1.0
   * @author terwer
   */
  public getEnvOrDefault(key: string, defaultValue: string) {
    const value = this.getStringEnv(key)
    if (value.trim().length == 0) {
      return defaultValue
    }
    return value
  }
}

export default EnvUtil
export { EnvConstants }

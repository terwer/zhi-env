/**
 * 环境变量工具类
 *
 * @author terwer
 * @since 0.0.1
 */
class EnvUtil {
  // 是否是开发阶段调试
  public static isNodeDev = process.env.NODE_ENV === "development"
  /**
   * 是否是调试阶段
   */
  public static isDev =
    EnvUtil.isNodeDev || EnvUtil.getBooleanEnv("VITE_DEBUG_MODE")

  /**
   * 获取环境变量
   * @param key key
   */
  public static getEnv(key: string): string | undefined {
    let env
    try {
      if (import.meta.env[key]) {
        env = import.meta.env[key]
      }
    } catch (e: any) {
      console.error(e)
    }

    return env
  }

  /**
   * 获取String类型的环境变量
   * @param key
   */
  public static getStringEnv(key: string): string {
    return EnvUtil.getEnv(key) ?? ""
  }

  /**
   * 获取Boolean类型的环境变量
   * @param key
   */
  public static getBooleanEnv(key: string): boolean {
    let env = false
    if (EnvUtil.getEnv(key)) {
      env = EnvUtil.getStringEnv(key).toLowerCase() === "true"
    }
    return env
  }

  /**
   * 获取环境变量，如果未定义或者为空值，用指定的默认值代替
   *
   * @param key key
   * @param defaultValue 默认值
   * @since 0.1.0
   * @author terwer
   */
  public static getEnvOrDefault(key: string, defaultValue: string) {
    const value = EnvUtil.getStringEnv(key)
    if (value.trim().length == 0) {
      return defaultValue
    }
    return value
  }
}

export default EnvUtil

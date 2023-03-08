<a name="EnvUtil"></a>

## EnvUtil
<p>环境变量工具类</p>

**Kind**: global class  
**Since**: 0.0.1  
**Author**: terwer  

* [EnvUtil](#EnvUtil)
    * [`.getEnv(key)`](#EnvUtil.getEnv)
    * [`.getStringEnv(key)`](#EnvUtil.getStringEnv)
    * [`.getBooleanEnv(key)`](#EnvUtil.getBooleanEnv)
    * [`.getEnvOrDefault(key, defaultValue)`](#EnvUtil.getEnvOrDefault)

<a name="EnvUtil.getEnv"></a>

### `EnvUtil.getEnv(key)`
<p>获取环境变量</p>

**Kind**: static method of [<code>EnvUtil</code>](#EnvUtil)  

| Param | Description |
| --- | --- |
| key | <p>key</p> |

<a name="EnvUtil.getStringEnv"></a>

### `EnvUtil.getStringEnv(key)`
<p>获取String类型的环境变量</p>

**Kind**: static method of [<code>EnvUtil</code>](#EnvUtil)  

| Param |
| --- |
| key | 

<a name="EnvUtil.getBooleanEnv"></a>

### `EnvUtil.getBooleanEnv(key)`
<p>获取Boolean类型的环境变量</p>

**Kind**: static method of [<code>EnvUtil</code>](#EnvUtil)  

| Param |
| --- |
| key | 

<a name="EnvUtil.getEnvOrDefault"></a>

### `EnvUtil.getEnvOrDefault(key, defaultValue)`
<p>获取环境变量，如果未定义或者为空值，用指定的默认值代替</p>

**Kind**: static method of [<code>EnvUtil</code>](#EnvUtil)  
**Since**: 0.1.0  
**Author**: terwer  

| Param | Description |
| --- | --- |
| key | <p>key</p> |
| defaultValue | <p>默认值</p> |


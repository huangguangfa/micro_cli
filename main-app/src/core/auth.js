
/**
 * @name 导入qiankun注册微应用方法
 */
import qianKunStart from "./app-register"
/**
 * @name 导入无需服务端获取的微应用
 */
import noAuthApps from "./app-config"


/**
* @name 验证用户身份并注册微应用
*/
const microAppStart = () => {
/**
* @name 默认加载未登录时无需服务端获取的微应用
*/
  qianKunStart(noAuthApps)
}

export default microAppStart;
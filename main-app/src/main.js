/**
 * @name 统一注册外部插件、样式、服务等
 */
import './core/install'


/**
 * @name 微前端基座主应用vue实例化
 * @description 2.0版本正常实例化vue
 */
import { vueRender } from './core/render'
vueRender()


/**
 * @name 启动微应用
 */
import microAppStart from './core/auth'
microAppStart()

import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start, initGlobalState } from "qiankun";
import store from "../store";

/**
 * @name 导入想传递给子应用的方法，其他类型的数据皆可按此方式传递
 * @description emit主要为提供子应用调用主应用方法的途径
 */
import emits from "../utils/emit";
/**
 * @name 导入qiankun应用间通信机制appStore
 */
import appStore from '../utils/app-store';
/**
 * @name 导入全局常量给子应用
 */
import GLOBAL from '../global';
/**
 * @name 声明子应用挂载dom，如果不需要做keep-alive，则只需要一个dom即可
 */
const appContainer = "#subapp-viewport";

/**
 * @name 声明要传递给子应用的信息
 * @param data 主应要传递给子应用的数据类信息
 * @param emits 主应要传递给子应用的方法类信息
 * @param GLOBAL 主应要传递给子应用的全局常量
 * @param utils 主应要传递给子应用的工具类信息（只是一种方案 暂时不用）
 * @param components 主应要传递给子应用的组件类信息（只是一种方案 暂时不用）
 */
let props = {
    data:store.getters,
    emits,
    GLOBAL
}

/**
 * @name 启用qiankun微前端应用
 * @param {Array} list 应用注册表信息
 */
const qianKunStart = ( list ) => {
    /**
     * @name 处理子应用注册表数据
     */
    let apps = []; // 子应用数组盒子
    let defaultApp = null; // 默认注册应用路由前缀
    let isDev = process.env.NODE_ENV === 'development'; // 根据开发环境|线上环境加载不同entry
    //配置参考文档https://qiankun.umijs.org/zh/api#registermicroappsapps-lifecycles
    list.forEach(i => { 
        apps.push({
            name: i.module, //微应用的名称
            entry: isDev ? i.devEntry : i.depEntry, //微应用的 entry 地址
            container: appContainer, //微应用的容器节点的选择器或者 Element 实例
            activeRule: i.routerBase, //微应用的激活规则路径 /login/xxx /sys/xxx
            props: { ...props, routes: i.data, routerBase: i.routerBase } //子应用初次挂载传入给子应用的数据
        })
        //初始化第一个加载的应用
        if (i.defaultRegister) defaultApp = i.routerBase;
    });

    /**
     * @name 注册子应用
     * @param {Array} list subApps
     */
    
    registerMicroApps(
        apps,
        {
            beforeLoad: [
                app => {
                    console.log('[主应用生命周期] before load %c%s', 'color: green;', app.name);
                },
            ],
            beforeMount: [
                app => {
                    console.log('[主应用生命周期] before mount %c%s', 'color: green;', app.name);
                },
            ],
            afterUnmount: [
                app => {
                    console.log('[主应用生命周期] after unmount %c%s', 'color: green;', app.name);
                },
            ]
        },
    )

    /**
     * @name 设置默认进入的子应用
     * @param {String} 需要进入的子应用路由前缀
     */
    defaultApp = store.getters.loginStatus && defaultApp  || '/login'
    setDefaultMountApp( defaultApp );
    /**
     * @name 启动微前端
     */
    start();
    /**
     * @name 微前端启动进入第一个子应用后回调函数
     */
    runAfterFirstMounted(() => { console.log( defaultApp +'--->子应用开启成功' ) });

    /**
     * @name 启动qiankun应用间通信机制
     */
    appStore( initGlobalState );
}

export default qianKunStart;

import Vue from "vue"
import router from '../router'
import store from '../store'
import App from '../App.vue'

/**
 * @description 实例化vue，并提供子应用
 * @param {Object} param0 
 * @description {String} appContent 子应用内容
 * @description {Boolean} loading 是否显示加载动画（需手动实现loading效果）
 * @param {Boolean} notCompatible true则不兼容qiankun1.0
 */
export function vueRender({ appContent, loading }, notCompatible) {
    console.log('appContent',appContent)
    console.log('loading',loading)
    Vue.config.productionTip = false
    if (notCompatible) {
        new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount("#mainApplication");
        return;
    }
}


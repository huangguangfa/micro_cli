import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import persistedState from "vuex-persistedstate"
Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})
export default new Vuex.Store({
    modules,
    getters,
    //持久化
    plugins: [persistedState()]
})

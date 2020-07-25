export default {
    namespaced: true,
    state: {
        //菜单列表
        systemMenuList:[],
        currentSystem:'sys001',
    },
    mutations: {
        SET_SYSTEMMENULIST_VALUE(state, data) {
            state.systemMenuList = data;
        },
        SET_CURRENTSYSTEM_VALUE(state,data){
            state.currentSystem = data
        },
    },
}
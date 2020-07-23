export default {
    namespaced: true,
    state: {
        userInfo: {
            name:'测试人张三',
        },
        loginStatus:false,
    },
    mutations: {
        SET_USERINFO_VALUE(state, data) {
            state.userInfo = data;
        },
        SET_LOGIN_VALUE(state, data){
            state.loginStatus = data;
        }
    },
  }
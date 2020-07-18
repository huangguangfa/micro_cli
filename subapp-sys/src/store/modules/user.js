export default {
    namespaced: true,
    state: {
        userInfo: {},
    },
    mutations: {
        setUserInfo(state, data) {
            state.userInfo = data;
        }
    },
  }
export default {
    namespaced: true,
    state: {
        userInfo: {
            name:'测试人张三',
            meunList:[
                {
                    name:'人员录入',
                    url:'/addUser'
                }
            ]
        },
    },
    mutations: {
        SET_USERINFO_VALUE(state, data) {
            state.userInfo = data;
        }
    },
  }
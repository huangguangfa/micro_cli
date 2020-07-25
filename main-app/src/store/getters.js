const getters = {
  userInfo: state => state.user.userInfo,
  loginStatus:state => state.user.loginStatus,
  currentSystem:state => state.system.currentSystem,
  systemMenuList:state => state.system.systemMenuList,
  sysTemData:state => state.system.sysTemData
}

export default getters
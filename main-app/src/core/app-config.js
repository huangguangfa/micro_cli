/**
 * @author guangfa
 * @time 2020.07.16
 * @name 无需服务端获取的微应用
 */

const noAuthApps = [
  {
    module: "subapp-sys",
    defaultRegister: true, //默认注册
    devEntry: "http://localhost:6002",
    depEntry: "http://106.54.70.48:6002",
    routerBase: "/sys",
    data: []
  },
  {
    module: "subapp-login",
    defaultRegister: false,
    devEntry: "http://localhost:6003",
    depEntry: "http://106.54.70.48:6003",
    routerBase: "/login",
    data: []
  },
  {
    module: "subapp-car",
    defaultRegister: false,
    devEntry: "http://localhost:6004",
    depEntry: "http://106.54.70.48:6004",
    routerBase: "/car",
    data: []
  },
]

export default noAuthApps;
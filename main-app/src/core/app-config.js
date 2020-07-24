/**
 * @author guangfa
 * @time 2020.07.16
 * @name 无需服务端获取的微应用
 */

const noAuthApps = [
  {
    module: "subapp-sys",
    defaultRegister: true,
    devEntry: "http://localhost:6002/",
    depEntry: "http://www.subapp-att.com.cn",
    routerBase: "/sys",
    data: [
      {
        id: "1",
        title: "人员录入",
        icon: "el-icon-monitor",
        children: [
          {
            id: "1-1",
            title: "home",
            url: "/login"
          }
        ]
      }
    ]
  },
  {
    module: "subapp-login",
    defaultRegister: false,
    devEntry: "http://localhost:6003/",
    depEntry: "http://www.subapp-login.com",
    routerBase: "/login",
    data: []
  },
  {
    module: "subapp-car",
    defaultRegister: false,
    devEntry: "http://localhost:6004/",
    depEntry: "http://www.subapp-car.com",
    routerBase: "/car",
    data: []
  },
]

export default noAuthApps;
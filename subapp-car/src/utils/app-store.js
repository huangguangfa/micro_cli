
/**
 * @author guangfa
 * @time 2020.07.25
 * @name 
 */

/**
* @name 声明一个常量准备将props内的部分内容储存起来
*/
const STORE = {};

/**
 * @name 启动qiankun应用间通信机制
 * @param {Object} props 官方通信函数
 * @description 注意：主应用是从qiankun中导出的initGlobalState方法
 * @description 注意：子应用是附加在props上的onGlobalStateChange, setGlobalState方法（只用主应用注册了通信才会有）
 */
  const appStore = props => {
  /**
   * @name 监听应用间通信，并存入store
   */
    if(props.onGlobalStateChange){
        props.onGlobalStateChange( (value,prev) =>{
            console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev)
        },true)
    }


  /**
   * @name 将你需要的数据存起来，供下面setState方法使用
   */
    if(props.setGlobalState){
        STORE.setGlobalState = props.setGlobalState
    }
    STORE.name = props.name;
};

/**
// * @name 全局setState方法，修改的内容将通知所有微应用
// * @param {Object} data 按照你设定的内容格式数据
// */
const setState = ( data ) => {
    if ( !Object.prototype.toString.call( data ) === '[object Object]' ) {
        throw Error('data必须是对象格式');
    }
    STORE.setGlobalState &&  STORE.setGlobalState({
        ignore: STORE.name,
        ...data
    })
}

export {
    setState
}
export default appStore;


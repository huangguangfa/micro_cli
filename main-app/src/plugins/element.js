import { Button, Menu, Submenu,Input, MenuItem, MenuItemGroup, Scrollbar, Loading, Message, MessageBox } from "element-ui";

/**
 * 确认框，默认确定取消按钮，警告状态
 * @param {*} message 提示语
 * @param {*} title 标题
 * @param {*} options 配置
 */
export function wlConfirm(message, title = "提示", options = {}) {
  let _options = {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    ...options
  }
  return MessageBox.confirm(message, title, _options)
}

export default {
  components: [
    Button, Menu, Submenu, MenuItem, MenuItemGroup, Scrollbar,Input
  ],
  serve: [Loading],
  methods: [ wlConfirm]
}


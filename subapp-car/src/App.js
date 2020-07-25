/**
 * @author guangfa
 * @time 2020.07.25
 * @name 
 */

import appStore from "./utils/app-store";
export const dva = {
	config: {
		onError(err) {
			err.preventDefault();
			console.error(err.message);
		}
	}
};

export const qiankun = {
	// 应用加载之前
	async bootstrap(props) {
		// console.log('car bootstrap', props);
	},
	// 应用 render 之前触发
	async mount(props) {
		// console.log('appStore',appStore)
		appStore(props)
		// console.log('car mount', props);
	},
	// 应用卸载之后触发
	async unmount(props) {
		// console.log('car unmount', props);
	}
};

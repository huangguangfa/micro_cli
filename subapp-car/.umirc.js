
export default {
	treeShaking: true,
	routes: [
		{
			path: '/',
			component: '../layouts/index',
			routes: [
				{ path: '/list', component: '../pages/carList/index' },
				{ path: '/type', component: '../pages/carType/index' }
			]
		}
	],
	// base: '', //部署时非根目录需要配置路径前缀
	runtimePublicPath: false,
	publicPath: 'http://106.54.70.48:6004/',
	outputPath: 'car',
	mountElementId: 'car',
	plugins: [
		[
			'umi-plugin-react',
			{
				antd: true,
				dva: true,
				dynamicImport: { webpackChunkName: true },
				title: '车辆管理',
				dll: false,
				locale: {
					enable: true,
					default: 'en-US'
				},
				routes: {
					exclude: [/models\//, /services\//, /model\.(t|j)sx?$/, /service\.(t|j)sx?$/, /components\//]
				}
			}
		],
		['@umijs/plugin-qiankun/slave', {}]
	]
};

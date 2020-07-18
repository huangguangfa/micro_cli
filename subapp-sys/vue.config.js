const path = require('path');
const { name,port } = require('./package');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
    publicPath: `//localhost:${port}`,
    outputDir: 'sys',
    assetsDir: 'static',
    filenameHashing: true, 
    devServer: {
        // host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        port,
        overlay: {
            warnings: false,
            errors: true,
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        // historyApiFallback:true,

    },
    
    // 自定义webpack配置
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
        output: {
            // 把子应用打包成 umd 库格式
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`,
        },
    },
};



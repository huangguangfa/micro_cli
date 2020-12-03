const { port } = require("./package");
module.exports = {
    publicPath: '/',
    outputDir: 'main-app',
    assetsDir: 'static', 
    devServer: {
        // host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        // historyApiFallback: true,
        port,
        proxy:{
            '/blogs':{
                target:'http://192.168.1.101:3078',
                changeOrigin:true,
                pathRewrite:{},
                //解决微前端环境下、子应用接口会被代理到主应用上、proxy的接口匹配如果和路由前缀一样、刷新将路由代理为接口导致404页面
                bypass:function( req ){
                    if(req.headers.accept.indexOf('html') !== -1){
                        return '/index.html'
                    }
                }
            }
        },
        overlay: {
            warnings: false,    
            errors: true
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    }
};




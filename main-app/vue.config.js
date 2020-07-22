const { port } = require("./package");
module.exports = {
    // publicPath: './',
    outputDir: 'main-app',
    assetsDir: 'static', 
    devServer: {
        // host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        // historyApiFallback: true,
        port,
        overlay: {
            warnings: false,
            errors: true
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    }
};




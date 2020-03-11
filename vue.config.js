// 基础模块依赖
const path = require('path')



// 变量常量函数定义
const   IS_PROD = process.env.NODE_ENV === 'production';
const   absolutely = (dir) => {
    return path.join(__dirname, '.', dir);
}
const   addStyleResource = function(rule){
    rule
        .use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                // less全局变量
                path.resolve(__dirname, 'src/assets/css/variables.less'),
            ]
        })
}



// 业务脚本开始
module.exports = {
    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true)
        // 关闭体积显示
        config.performance                  
            .hints('warning')
            .maxAssetSize(30000000)
            .maxEntrypointSize(50000000)
            .assetFilter(function (assetFilename) {
                return assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
            })
        // 自定义目录别名
        config.resolve.alias
            .set('@', absolutely('src'))
        
        // less相关插件，添加全局变量文件
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    },
    // 开发环境时候的代理配置
    devServer: {
        disableHostCheck: true,
        hotOnly: true,
        open: true,
        // host: 'localhost',
        port: 8181,
        https: false,
        // 配置跨域
        // proxy: {
        //     '/api': {
        //         // 是否支持webSocket
        //         ws: true,
        //         // 代理目标地址
        //         target: 'http://106.52.206.103:20020',
        //         // 跨域许可
        //         changOrigin: true,
        //         // 重写路径
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // }
    },
    // 禁用生产环境下的map包 | default => true
    productionSourceMap: false,
    // 配置webpack的配置
    configureWebpack: config => {
        // 需要添加插件的数组
        const plugins = [];
        // 生产环境配置

        
        // 添加配置
        config.plugins = config.plugins.concat( plugins )
        // 一些包直接在总模板那里引用CDN加速，不再单独打包到生产
        config.externals = {
            'vue': 'Vue'
        }
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {},
                javascriptEnabled: true
            }
        }
    }
}

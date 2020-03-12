const plugins = [];
if(process.env.NODE_ENV === 'production'){
    // 正式构建时移除 console.log
    plugins.push(
        [
            "transform-remove-console",
            {
                exclude: ['warn', 'error']
            }
        ]
    );
}

// 导出设置
module.exports = {
    plugins,
    presets: [["@vue/app", {"useBuiltIns": "entry"}]],
}

const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        proxy('/api1',{ // 遇见api1 前缀的请求，就会触发代理配置
            target:'http://localhost:5000', // 请求转发给谁
            changeOrigin:true, // 控制服务器收到的请求头中的Host 的值
            pathRewrite:{'^/api1':''} // 将 /api1 变成空字符串
        }),
    )
}
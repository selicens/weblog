module.exports = {
    devServer:{
        proxy:{
            "/api":{
                target:"http://localhost:3000/users",
                ws: true, //代理的WebSockets
                changeOrigin: true, //需要虚拟主机站点
                pathRewrite: {
                    "^/api": ""
                }

            }
        }
    }
}


const {createProxyMiddleware} = require("http-proxy-middleware");

module.export = function(app){
    app.use(
        // /로 요청을 보내면 백엔드로 요청이 감
        '/api',
        createProxyMiddleware({
            target: "http://localhost:8080",
            changeOrigin: true,
        })
    )
}
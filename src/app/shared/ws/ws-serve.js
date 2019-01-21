"use strict";
/**
 * Created by Administrator on 2018/12/20 0020.
 */
// import * as express from 'express';
exports.__esModule = true;
// 引入服务
var ws_1 = require("ws");
// const app = express();
var wsServe = /** @class */ (function () {
    function wsServe(
    // public id:number,
    // public title:string,
    // public price:number,
    // public rating:number,
    // public desc:string
    ) {
    }
    return wsServe;
}());
exports.wsServe = wsServe;
// const products:Product[] = [
//     new Product(1,"商品1",1.99,1.5,"这是商品1"),
//     new Product(2,"商品2",2.99,2.5,"这是商品2"),
//     new Product(3,"商品3",3.99,3.5,"这是商品3"),
//     new Product(4,"商品4",4.99,4.5,"这是商品4"),
//     new Product(5,"商品5",5.99,4.5,"这是商品5")
// ];
// app.get('/',(req, res) => {
//     res.send("hello express");
// });
// app.get('/api/product',(req,res) => {
//     res.json(products);
// });
// app.get('/api/product/:id',(req,res) => {
//     res.json(
//         products.find((product) => product.id == req.params.id)
//     );
// });
// const serve = app.listen(8000,"localhost",() => {
//     console.log("服务器已启动，地址为http://localhose:8000");
// });
// // 新建一个webscoket服务
// const wsServer = new Server({port:8085});
// wsServer.on("connection",websocket => {
//     websocket.send("这个消息是服务器主动推送的");
// });
// 新建一个服务
var wsServer = new ws_1.Server({ port: 8085 });
wsServer.on("connection", function (websocket) {
    // setInterval(()=>{
    //     // 判断客户端是连接上的状态
    //     if(wsServer.clients) {
    //         wsServer.clients.forEach(client => {
    //             client.send("这是定时推送");
    //         })
    //     }
    // },2000);
    websocket.send("这个消息是服务器主动推送的");
    websocket.on("message", function (message) {
        console.log("message" + message);
    });
});

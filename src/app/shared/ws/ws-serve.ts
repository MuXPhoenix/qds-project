/**
 * Created by Administrator on 2018/12/20 0020.
 */

// 引入服务
import {Server} from 'ws';

export class wsServe {
    constructor(
    ){}
}
// 新建一个服务
const wsServer = new Server({port:8085});
wsServer.on("connection",websocket => {

    // setInterval(()=>{
    //     // 判断客户端是连接上的状态
    //     if(wsServer.clients) {
    //         wsServer.clients.forEach(client => {
    //             client.send("这是定时推送");
    //         })
    //     }
    // },2000);
    websocket.send("这个消息是服务器主动推送的");
    websocket.on("message",message => {
        console.log("message"+message);
    });
});




import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class wsClientService {
    // 客户端的服务
    // ws:WebSocket;
    ws_array:any=[];
    constructor() {
    }

    // 定义返回一个流，这个流包含了服务器返回的消息
    creatObservableSocket(url:string) :Observable<any> {
        let ws:WebSocket;
        ws = new WebSocket(url);//连接服务器
        ws.onopen=function () {
            console.log('客户端打开了！');
        };
        let obs = new Observable(
            observer => {
                // 发送下一个元素
                ws.onmessage = (event) => observer.next(event.data);
                // 抛出异常
                ws.onerror = (event) => observer.error(event);
                // 流结束
                ws.onclose = (event) => observer.complete();
            }
        );
        this.ws_array[''+url] = ws;
        return obs;

    }
    closeWs(url){
        this.ws_array[''+url].close();
    }

    // 向服务器发送一个消息
    sendMess(message:string,url) {
        this.ws_array[''+url].send(message);
        //添加状态判断，当为OPEN时，发送消息
        // if (this.ws.readyState===1) {
        //     this.ws.send(JSON.stringify(message));
        // }else if(this.ws.readyState == 0){
        //     console.log('正在连接...!'+this.ws.readyState);
        // }else if(this.ws.readyState == 3){
        //     console.log('连接已关闭');
        // }
        // //添加事件监听
        // let that = this;
        // that.ws.addEventListener('open', function () {
        //     that.ws.send(message);
        // });
    }

}
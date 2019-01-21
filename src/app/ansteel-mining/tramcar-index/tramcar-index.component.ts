import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../core/global.service";
import {Router} from "@angular/router";
import {CookieStoreService} from "../../shared/cookies/cookie-store.service";
import {wsClientService} from "../../shared/ws/ws-client";

@Component({
  selector: 'app-tramcar-index',
  templateUrl: './tramcar-index.component.html'
})
export class TramcarIndexComponent implements OnInit {

  xy_details: boolean = false;  //单击展开，再次单击隐藏
  // mt_assets_type = 516;
  mining_list : any = [];
  mining_task_list : any = [];
  mining_log_list : any = [];
  mining_waring_list : any = [];
  prev : boolean = false;
  next : boolean = false;
  //用作全选和反选
  selects : Array<any> = [];
  check : boolean = false;
  page : any;

  tc001:string = '';
  tc002:any = '';
  tc00201:string = '';//max
  tc00203:string = '';//min
  tc003:string = '';
  tc004:string = '';
  tc00401:string = '';//max
  tc005:string = '';
  tc00501:string = '';//max

  tc006:string = '';
  tc007:string = '';
  tc008:string = '';
  tc009:string = '';
  tc010:string = '';
  tc01001:string = '';//max
  tc011:string = '';
  tc01101:string = '';//max
  tc01103:string = '';//min
  tc012:string = '';
  tc01201:string = '';//max
  tc01203:string = '';//min
  tc013:string = '';
  tc014:string = '';
  tc01401:string = '';//max
  tc015:string = '';
  tc016:string = '';
  tc017:string = '';
  tc018:string = '';

  rollback_url : string = '/ansteel-mining/tramcar-index';
  ws_url : string = "ws://192.168.31.151:8085";
  ws_mqtt : string = "ws://192.168.31.151:8884";

  constructor(
      private router : Router,
      private globalService:GlobalService,
      private cookieStore:CookieStoreService,
      private wsService:wsClientService,
  ) {
  }

  ngOnInit() {
    this.getMiningTaskList('1');
    this.getMqttData();
    // 订阅服务器发来消息产生的流
    this.wsService.creatObservableSocket(this.ws_url)
        .subscribe(data => {
          console.log('client_ws:----'+data);
          if(data == 'success' || data == 'mt_status2' || data == 'cancel'){
            setTimeout(()=>{
              this.getMiningTaskList("1");
            },2000);
          }
        },
        err => console.log('err:--'+err),
        () => console.log("流已经结束")
      )
    }


    getMqttData(){
      // 订阅服务器发来消息产生的流
      this.wsService.creatObservableSocket(this.ws_mqtt)
          .subscribe(datas => {
            console.log('client_ws:----'+datas.toString());
            let data = JSON.parse(datas);
            if(data){
              // console.log('nodeid:----'+nodeid[1]);
              this.setValue(data);
            }
          },
          err => console.log('err:--'+err),
          () => console.log("流已经结束")
        )
    }

    setValue(data){
      let msg = '';
      let nodeid = data['nodeId'];//((data['nodeId']).split(';'))[1].split('=');
      if(nodeid == 'tramcar_index'){
        this.tc001 = data['value'];
      }else if(nodeid == 'tc001'){
        console.log('value:----'+data['value']);
        let value = data['value'];
        if((value.length) > 2){
          this.tc001 = 'x:'+(value[0]).toFixed(2)+' y:'+(value[1]).toFixed(2)+' z:'+(value[2]).toFixed(2);
        }else{
          this.tc001 =value;
        }
      }else if(nodeid == 'tc002'){
        // this.tc002=-this.tc002;
        this.tc002 = (-parseInt(data['value']));
        if(this.tc002 > this.tc00203){
          console.log("发动机冷却液温度过高");
          console.log(this.tc002 , this.tc00203,this.tc018);
          msg = '发动机冷却液温度过高。';//8
          this.addNoticeLog(this.tc018,msg,8,data['value']);
        }else if(this.tc002 < this.tc00201){
          console.log("发动机冷却液温度过低");
          console.log(this.tc002 , this.tc00201,this.tc018);
          msg = '发动机冷却液温度过低。';//7
          this.addNoticeLog(this.tc018,msg,7,data['value']);
        }
      }else if(nodeid == 'tc00201'){
        this.tc00201 = data['value'];
      }else if(nodeid == 'tc00203'){
        this.tc00203 = data['value'];
      }else if(nodeid == 'tc003'){
        this.tc003 = data['value'];
      }else if(nodeid == 'tc004'){
        this.tc004 = data['value'];
        if(this.tc004 > this.tc00401){
          console.log("空气流量计(MAF)过高");
          console.log(this.tc004 , this.tc00401);
          msg = '空气流量计(MAF)过高。';
          this.addNoticeLog(this.tc018,msg,10,this.tc004);
        }
      }else if(nodeid == 'tc00401'){
        this.tc00401 = data['value'];
      }else if(nodeid == 'tc005'){
        this.tc005 = data['value'];
        if(this.tc005 > this.tc00501){
          console.log("冷却液温度传感器(CTS／ECT)过高");
          console.log(this.tc005 , this.tc00501);
          msg = '冷却液温度传感器(CTS／ECT)过高。';
          this.addNoticeLog(this.tc018,msg,11,this.tc005);
        }
      }else if(nodeid == 'tc00501'){
        this.tc00501 = data['value'];
      }else if(nodeid == 'tc006'){
        this.tc006 = data['value'];
      }else if(nodeid == 'tc007'){
        this.tc007 = data['value'];
      }else if(nodeid == 'tc008'){
        this.tc008 = data['value'];
      }else if(nodeid == 'tc009'){
        this.tc009 = data['value'];
      }else if(nodeid == 'tc010'){
        this.tc010 = data['value'];
        if(this.tc010 > this.tc01001){
          console.log("发动机转速过高");
          console.log(this.tc010 , this.tc01001);
          msg = '发动机转速过高。';
          this.addNoticeLog(this.tc018,msg,16,this.tc010);
        }
      }else if(nodeid == 'tc01001'){
        this.tc01001 = data['value'];
      }else if(nodeid == 'tc011'){
        this.tc011 = data['value'];
        if(this.tc011 > this.tc01101){
          console.log("点火角平均值过高");
          console.log(this.tc011 , this.tc01101,this.tc018);
          msg = '点火角平均值过高。';
          this.addNoticeLog(this.tc018,msg,12,data['value']);
        }else if(this.tc011 < this.tc01103){
          console.log("点火角平均值过低");
          console.log(this.tc011 , this.tc01103,this.tc018);
          msg = '点火角平均值过低。';
          this.addNoticeLog(this.tc018,msg,13,data['value']);
        }
      }else if(nodeid == 'tc01101'){
        this.tc01101 = data['value'];
      }else if(nodeid == 'tc01103'){
        this.tc01103 = data['value'];
      }else if(nodeid == 'tc012'){
        this.tc012 = data['value'];
        if(this.tc012 > this.tc01201){
          console.log("电瓶电压过高");
          console.log(this.tc012 , this.tc01201,this.tc018);
          msg = '电瓶电压过高。';
          this.addNoticeLog(this.tc018,msg,14,data['value']);
        }else if(this.tc012 < this.tc01203){
          console.log("电瓶电压过低");
          console.log(this.tc012 , this.tc01203,this.tc018);
          msg = '电瓶电压过低。';
          this.addNoticeLog(this.tc018,msg,15,data['value']);
        }
      }else if(nodeid == 'tc01201'){
        this.tc01201 = data['value'];
      }else if(nodeid == 'tc01203'){
        this.tc01203 = data['value'];
      }else if(nodeid == 'tc013'){
        this.tc013 = data['value'];
      }else if(nodeid == 'tc014'){
        this.tc014 = data['value'];
        if(this.tc014 > this.tc01401){
          console.log("车速过快");
          console.log(this.tc014 , this.tc01401);
          msg = '车速过快。';
          this.addNoticeLog(this.tc018,msg,17,this.tc014);
        }
      }else if(nodeid == 'tc01401'){
        this.tc01401 = data['value'];
      }else if(nodeid == 'tc015'){
        this.tc015 = data['value'];
      }else if(nodeid == 'tc016'){
        this.tc016 = data['value'];
      }else if(nodeid == 'tc017'){
        this.tc017 = data['value'];
      }else if(nodeid == 'tc018'){
        this.tc018 = data['value'];
      }
    }


  ngOnDestroy(){
    this.wsService.closeWs(this.ws_url);
    this.wsService.closeWs(this.ws_mqtt);
  }

  /**
   * 获取最新任务列表
   */
  getMiningTaskList(number:string) {
    let url = 'getMiningTaskList?mt_assets_type='+this.globalService.mt_assets_type+'&page='+number+'&sid='+this.cookieStore.getCookie('sid');
    this.globalService.httpRequest('get',url)
        .subscribe((data)=>{
      console.log(data);
          this.mining_list = data;
          this.mining_task_list = data['result']['miningTaskList'];
          this.mining_waring_list = data['result']['miningWaringList'];
          this.mining_log_list = data['result']['miningLogList'];

          if(this.mining_list['status'] == 202){
            this.cookieStore.removeAll(this.rollback_url);
            this.router.navigate(['/auth/login']);
          }
          if (this.mining_list) {
            if (this.mining_task_list['current_page'] == this.mining_task_list['last_page']) {
              this.next = true;
            } else {
              this.next = false;
            }
            if (this.mining_task_list['current_page'] == 1) {
              this.prev = true;
            } else {
              this.prev = false;
            }
            this.selects = [];
            for (let entry of this.mining_task_list['data']) {
              this.selects[entry['c_id']] = false;
            }
            this.check = false;
          }
        });
  }


  /**
   * 页码分页
   * @param page
   */
  pagination(page : any) {
    this.page = page;
    this.getMiningTaskList(this.page);
  }


  /**
   * 更新警报日志
   */
  addNoticeLog(ml_object_id,msg,ml_classify,value) {
    if(ml_object_id != 0) {
      this.globalService.httpRequest('post', 'addMiningLog', {
        'ml_object_id': ml_object_id,
        'ml_title': msg,
        'ml_classify': ml_classify,
        'ml_value': value,
        'c_id': this.cookieStore.getCookie('cid'),
        'ml_operator_id': this.cookieStore.getCookie('uid'),
        'u_id': this.cookieStore.getCookie('uid')
      }).subscribe((data) => {
        if (data['status'] == 200) {
          this.mining_waring_list = data['result']['miningWaringList'];
          this.mining_log_list = data['result']['miningLogList'];
        } else if (data['status'] == 202) {
          alert(data['msg']);
          this.cookieStore.removeAll(this.rollback_url);
          this.router.navigate(['/auth/login']);
        }
      },
      response => {
        console.log('PATCH call in error', response);
      });
    }
  }



    //单击展开，再次单击隐藏
    changedetails(){
        this.xy_details = (this.xy_details == false);
    }


}

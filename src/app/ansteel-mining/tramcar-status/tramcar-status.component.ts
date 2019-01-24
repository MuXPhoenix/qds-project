import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GlobalService} from "../../core/global.service";
import {CookieStoreService} from "../../shared/cookies/cookie-store.service";
import {wsClientService} from "../../shared/ws/ws-client";

@Component({
  selector: 'app-tramcar-status',
  templateUrl: './tramcar-status.component.html'
})
export class TramcarStatusComponent implements OnInit {
    tramcar_list : any = [];
    tramcar_info : any = [];
    prev : boolean = false;
    next : boolean = false;
    //用作全选和反选
    selects : Array<any> = [];
    check : boolean = false;
    page : any;
    class_name : string = '';
    index : number = 0;

    xy_details: boolean = false;  //单击展开，再次单击隐藏

    rollback_url : string = '/ansteel-mining/tramcar-status';
    constructor(
        private router : Router,
        private globalService:GlobalService,
        private cookieStore:CookieStoreService,
      private wsService:wsClientService) {
    }

    ngOnInit() {
        this.getQdsAssets('1');
        this.getMqttData();
    }

    getMqttData(){
        // 订阅服务器发来消息产生的流
        this.wsService.creatObservableSocket(this.globalService.ws_mqtt)
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
        if(this.tramcar_list) {
            this.tramcar_list['assetsList']['data'].forEach((val, idx, array) => {
                if (val['assets_number'] == data['carNumber']) {
                    val[data['nodeId']] = data['value'];
                }
            });
        }
    }

    ngOnDestroy(){
        this.wsService.closeWs(this.globalService.ws_mqtt);
    }
    /**
     * 获取电动轮列表
     */
    getQdsAssets(number:string) {
        let url = 'getQdsAssets?category_ids='+this.globalService.mt_assets_type+'&page='+number+'&sid='+this.cookieStore.getCookie('sid');
        this.globalService.httpRequest('get',url)
            .subscribe((data)=>{
                console.log(data);
                this.tramcar_list = data['result'];

                if(data['status'] == 202){
                    this.cookieStore.removeAll(this.rollback_url);
                    this.router.navigate(['/auth/login']);
                }
                if (this.tramcar_list) {
                    if (this.tramcar_list['assetsList']['current_page'] == this.tramcar_list['assetsList']['last_page']) {
                        this.next = true;
                    } else {
                        this.next = false;
                    }
                    if (this.tramcar_list['assetsList']['current_page'] == 1) {
                        this.prev = true;
                    } else {
                        this.prev = false;
                    }
                    this.selects = [];
                    for (let entry of this.tramcar_list['assetsList']['data']) {
                        this.selects[entry['assets_id']] = false;
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
        this.getQdsAssets(this.page);
    }


        //单击展开，再次单击隐藏
    showDetails(id,index=0){
        if(id){
            this.tramcar_list['assetsList']['data'].forEach((val, idx, array) => {
                if (val['assets_id'] == id) {
                    this.tramcar_info = val;
                }
            });
            this.class_name = 'table-color';
        }else{
            this.class_name = '';
        }
        this.index = index;
        this.xy_details = (this.xy_details == false);
    }


}
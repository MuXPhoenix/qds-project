import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GlobalService} from "../../core/global.service";
import {CookieStoreService} from "../../shared/cookies/cookie-store.service";

@Component({
  selector: 'app-tramcar-alarm',
  templateUrl: './tramcar-alarm.component.html'
})
export class TramcarAlarmComponent implements OnInit {
    mining_log_list : any = [];
    classify : any = [];
    mining_log_info : any = [];
    prev : boolean = false;
    next : boolean = false;
    //用作全选和反选
    selects : Array<any> = [];
    check : boolean = false;
    page : any;
    keyword : string = '';
    start_date : string = '';
    end_date : string = '';
    class_name:string = '';
    index:number=0;

    datePickerConfig = {
        locale: 'zh-CN',
        format:'YYYY-MM-DD HH:mm',
        enableMonthSelector:true,
        showMultipleYearsNavigation:true,
    };
    xy_details: boolean = false;  //单击展开，再次单击隐藏

    rollback_url : string = '/ansteel-mining/tramcar-alarm';
    constructor(
        private router : Router,
        private globalService:GlobalService,
        private cookieStore:CookieStoreService) { }

    ngOnInit() {
        this.getQdsAlarmLog('1');
    }
    /**
     * 获取警报列表
     */
    getQdsAlarmLog(number:string) {
        let url = 'getQdsAlarmLog?category_ids='+this.globalService.mt_assets_type+'&page='+number+'&sid='+this.cookieStore.getCookie('sid');
        console.log(this.keyword.trim());
        if(this.keyword.trim() != '') {
            url += '&keyword='+this.keyword.trim();
        }
        let isR = false;
        if(this.start_date.trim() != '' && this.end_date.trim() != '') {
            url += '&start_date='+this.start_date.trim()+ '&end_date='+this.end_date.trim();
        }else if((this.start_date.trim() != '' && this.end_date.trim() == '') || (this.start_date.trim() == '' && this.end_date.trim() != '')){
            isR =  true;
        }
        if(!isR){
        this.globalService.httpRequest('get',url)
            .subscribe((data)=>{
                console.log(data);
                this.mining_log_list = data['result'];
                this.classify = data['result']['classify'];
                if(data['status'] == 202){
                    this.cookieStore.removeAll(this.rollback_url);
                    this.router.navigate(['/auth/login']);
                }
                if (this.mining_log_list) {
                    if (this.mining_log_list['logList']['current_page'] == this.mining_log_list['logList']['last_page']) {
                        this.next = true;
                    } else {
                        this.next = false;
                    }
                    if (this.mining_log_list['logList']['current_page'] == 1) {
                        this.prev = true;
                    } else {
                        this.prev = false;
                    }
                    this.selects = [];
                    for (let entry of this.mining_log_list['logList']['data']) {
                        this.selects[entry['ml_id']] = false;
                    }
                    this.check = false;
                }
            });
        }else{
            alert('请选择时间区间！');
        }
    }

    /**
     * 页码分页
     * @param page
     */
    pagination(page : any) {
        this.page = page;
        this.getQdsAlarmLog(this.page);
    }

    //单击展开，再次单击隐藏
    showDetails(ml_id,index=0){
        if(ml_id){
            this.mining_log_list['logList']['data'].forEach((val, idx, array) => {
                if (val['ml_id'] == ml_id) {
                    this.mining_log_info = val;
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

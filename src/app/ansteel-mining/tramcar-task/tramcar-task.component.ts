import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../core/global.service";
import {CookieStoreService} from "../../shared/cookies/cookie-store.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tramcar-task',
  templateUrl: './tramcar-task.component.html'
})
export class TramcarTaskComponent implements OnInit {
    mining_task_list : any = [];
    mining_task_info : any = [];
    prev : boolean = false;
    next : boolean = false;
    //用作全选和反选
    selects : Array<any> = [];
    check : boolean = false;
    page : any;
    class_name : string = '';
    index : number = 0;

    rollback_url : string = '/ansteel-mining/tramcar-task';
    xy_details: boolean = false;  //单击展开，再次单击隐藏

    constructor(
        private router : Router,
        private globalService:GlobalService,
        private cookieStore:CookieStoreService,) { }

    ngOnInit() {
        this.getMiningTaskList('1');
    }


    /**
     * 获取最新任务列表
     */
    getMiningTaskList(number:string) {
        let url = 'getMiningTaskList?mt_assets_type='+this.globalService.mt_assets_type+'&page='+number+'&sid='+this.cookieStore.getCookie('sid');
        this.globalService.httpRequest('get',url)
            .subscribe((data)=>{
                console.log(data);
                this.mining_task_list = data['result']['miningTaskList'];

                if(data['status'] == 202){
                    this.cookieStore.removeAll(this.rollback_url);
                    this.router.navigate(['/auth/login']);
                }
                if (this.mining_task_list) {
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
                        this.selects[entry['mt_id']] = false;
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


    //单击展开，再次单击隐藏
    showDetails(id,index=0){
        if(id){
            this.mining_task_list['data'].forEach((val, idx, array) => {
                if (val['mt_id'] == id) {
                    this.mining_task_info = val;
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

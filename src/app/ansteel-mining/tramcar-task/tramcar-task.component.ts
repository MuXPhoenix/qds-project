import {Component, OnInit, ViewChild} from '@angular/core';
import {GlobalService} from "../../core/global.service";
import {CookieStoreService} from "../../shared/cookies/cookie-store.service";
import {Router} from "@angular/router";
import {ModalDirective} from "ngx-bootstrap";

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

    operate_type : string = '';//操作弹框类型
    operate_button_type : string = '';//操作按钮类型
    approval_id:string = ''; //当前展示详情的approval_id
    class_name : string = '';
    index : number = 0;

    uid:string = '';

    rollback_url : string = '/ansteel-mining/tramcar-task';
    xy_details: boolean = false;  //单击展开，再次单击隐藏

    constructor(
        private router : Router,
        private globalService:GlobalService,
        private cookieStore:CookieStoreService,) { }

    ngOnInit() {
        this.uid = this.cookieStore.getCookie('uid');
        this.getMiningTaskList('1');
    }


    /**
     * 获取最新任务列表
     */
    getMiningTaskList(number:string) {
        let url = 'getMiningTaskList?mt_assets_type='+this.globalService.mt_assets_type+'&page_type=newTask&page='+number+'&uid='+this.uid+'&sid='+this.cookieStore.getCookie('sid');
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
    showDetails(id,approval_id,index=0){
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
        this.approval_id = approval_id;
        this.xy_details = (this.xy_details == false);
    }

    /**
     * 显示操作弹出框
     * @param type
     */
    public showModal(type:string,type1:string): void {
        this.operate_type = type;
        this.operate_button_type = type1;
        if(type == 'operation'){
            this.operationModel.show();
        }else if(type == 'cancel'){
            this.cancelModel.show();
        }else if(type == 'urge'){
            this.urgeModel.show();
        }
    }

    public hideModal(): void {
        if(this.operate_type == 'operation'){
            this.operationModel.hide();
        }else if(this.operate_type == 'cancel'){
            this.cancelModel.hide();
        }else if(this.operate_type == 'urge'){
            this.urgeModel.hide();
        }
        this.operate_type = '';
        this.operate_button_type = '';
    }


    /**
     * 提交设置的信息
     */
    setModal(){
        let log_type = '';
        if(this.mining_task_info.approval_type == 6){
            log_type = 'approval_changeShift';
        }else if(this.mining_task_info.approval_type == 7){
            log_type = 'approval_fuelling';
        }else{
            alert('没有审批类型，无法提交审核，请联系管理员。');
            return false;
        }
        this.globalService.httpRequest('post','addLog', {
            'other_id': this.approval_id,
            'other_table_name': 'approval',
            'log_type': log_type,
            'log_operation_type': this.operate_button_type,
            'u_id': this.uid,
            'sid': this.cookieStore.getCookie('sid')
        }).subscribe((data) => {
            if (data['status'] == 200) {
                this.getStatus();
                this.hideModal();
            } else if (data['status'] == 202) {
                alert(data['msg']);
                this.cookieStore.removeAll(this.rollback_url);
                this.router.navigate(['/auth/login']);
            } else if (data['status'] == 201) {
                this.getStatus();
                alert(data['msg']);
                this.hideModal();
            }else if (data['status'] == 9999) {
                alert(data['msg']);
            }
        });
    }


    //修改状态并获取详情
    getStatus(){
        let pag = (this.page == 0) ? 1:this.page;
        this.getMiningTaskList(pag);
        setTimeout(()=>{
            console.log(this.approval_id);
            this.showDetails(this.mining_task_info.mt_id,this.approval_id,this.index);
        },500);
    }

    // <!-- Modal 审批同意意见  审批拒绝意见   评论-->
    @ViewChild('operationModel') public operationModel: ModalDirective;
    // <!-- 撤销 -->
    @ViewChild('cancelModel') public cancelModel: ModalDirective;
    // <!-- 催办 -->
    @ViewChild('urgeModel') public urgeModel: ModalDirective;

}

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'filter_string'})
/**
 * 替换字符串里的字符
 */
export class FilterStringPipe implements PipeTransform{
    transform(value: string,search:string): string {
        let exp = eval('/'+search+'/g');
        return value.replace(exp,'');
    }
}



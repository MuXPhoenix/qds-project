import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {GlobalService} from "../../core/global.service";
import {CookieStoreService} from "../../shared/cookies/cookie-store.service";
import {ModalDirective} from "ngx-bootstrap";

@Component({
  selector: 'app-tramcar-dutyshift',
  templateUrl: './tramcar-dutyshift.component.html'
})
export class TramcarDutyshiftComponent implements OnInit {
    dutyshift_list : any = [];
    dutyshift_info : any = [];
    prev : boolean = false;
    next : boolean = false;
    //用作全选和反选
    selects : Array<any> = [];
    check : boolean = false;
    page : any;

    uid:string = '';

    operate_type : string = '';//操作弹框类型
    operate_button_type : string = '';//操作按钮类型
    approval_id:string = ''; //当前展示详情的approval_id
    class_name : string = '';
    index : number = 0;

    xy_details: boolean = false;  //单击展开，再次单击隐藏

    approval_type = 6;//交接班审核类型
    rollback_url : string = '/ansteel-mining/tramcar-dutyshift';
    constructor(
        private router : Router,
        private globalService:GlobalService,
        private cookieStore:CookieStoreService) { }

    ngOnInit() {
        this.uid = this.cookieStore.getCookie('uid');
        this.getQdsDutyshift('1');
    }
    /**
     * 获取交接班审核列表
     */
    getQdsDutyshift(number:string) {
    let url = 'getQdsChangeShift?category_ids='+this.globalService.mt_assets_type+'&approval_type='+this.approval_type+'&page='+number+'&sid='+this.cookieStore.getCookie('sid');
    this.globalService.httpRequest('get',url)
        .subscribe((data)=>{
            console.log(data);
            this.dutyshift_list = data['result'];
            if(data['status'] == 202){
                this.cookieStore.removeAll(this.rollback_url);
                this.router.navigate(['/auth/login']);
            }
            if (this.dutyshift_list) {
                if (this.dutyshift_list['approvalList']['current_page'] == this.dutyshift_list['approvalList']['last_page']) {
                    this.next = true;
                } else {
                    this.next = false;
                }
                if (this.dutyshift_list['approvalList']['current_page'] == 1) {
                    this.prev = true;
                } else {
                    this.prev = false;
                }
                this.selects = [];
                for (let entry of this.dutyshift_list['approvalList']['data']) {
                    this.selects[entry['approval_id']] = false;
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
        this.getQdsDutyshift(this.page);
    }

    //单击展开，再次单击隐藏
    showDetails(approval_id,type=0,index=0){
        if(type == 0) {
            this.xy_details = (this.xy_details == false);
        }
        if (approval_id) {
            this.dutyshift_list['approvalList']['data'].forEach((val, idx, array) => {
                if (val['approval_id'] == approval_id) {
                    this.dutyshift_info = val;
                }
            });
            this.class_name = 'table-color';
        }else{
            this.class_name = '';
        }
        this.index = index;
        this.approval_id = approval_id;
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
        this.globalService.httpRequest('post','addLog', {
            'other_id': this.approval_id,
            'other_table_name': 'approval',
            'log_type': 'approval_changeShift',
            'log_operation_type': this.operate_button_type,
            'u_id': this.uid,
            'sid': this.cookieStore.getCookie('sid')
        }).subscribe((data) => {
            if (data['status'] == 200) {
                this.getStatus(this.approval_id,1);
                this.hideModal();
            } else if (data['status'] == 202) {
                alert(data['msg']);
                this.cookieStore.removeAll(this.rollback_url);
                this.router.navigate(['/auth/login']);
            } else if (data['status'] == 201) {
                this.getStatus(this.approval_id,1);
                alert(data['msg']);
                this.hideModal();
            }else if (data['status'] == 9999) {
                alert(data['msg']);
            }
        });
    }


    //修改状态并获取详情
    getStatus(value:any,num){
        let pag = (this.page == 0) ? 1:this.page;
        this.getQdsDutyshift(pag);
        setTimeout(()=>{
            console.log(this.approval_id);
            this.showDetails(this.approval_id,1,this.index);
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

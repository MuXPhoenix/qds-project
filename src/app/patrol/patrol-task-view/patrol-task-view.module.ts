
/**
 * Created by Administrator on 2019/01/22
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {AngularEchartsModule} from "ngx-echarts";
import {I3otpModule} from "../../shared/i3otp.module";
import {PatrolTaskViewComponent} from "./patrol-task-view.component";

const routes: Routes = [{
    path: '',
    component: PatrolTaskViewComponent,
    data: {pageTitle: 'patrol-task-view'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        AngularEchartsModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [PatrolTaskViewComponent],
})
export class PatrolTaskViewModule { }


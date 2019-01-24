
/**
 * Created by Administrator on 2019/01/23
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {AngularEchartsModule} from "ngx-echarts";
import {I3otpModule} from "../../shared/i3otp.module";
import {TrainsTaskComponent} from "./trains-task.component";

const routes: Routes = [{
    path: '',
    component: TrainsTaskComponent,
    data: {pageTitle: 'trains-task'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        AngularEchartsModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [TrainsTaskComponent],
})
export class TrainsTaskModule { }





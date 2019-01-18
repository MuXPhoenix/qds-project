/**
 * Created by Administrator on 2019/01/16
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {PatrolIndexComponent} from "./patrol-index.component";
import {AngularEchartsModule} from "ngx-echarts";
import {I3otpModule} from "../../shared/i3otp.module";

const routes: Routes = [{
    path: '',
    component: PatrolIndexComponent,
    data: {pageTitle: 'patrol-index'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        AngularEchartsModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [PatrolIndexComponent],
})
export class PatrolIndexModule { }

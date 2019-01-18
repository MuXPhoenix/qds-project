/**
 * Created by Administrator on 2019/01/16
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {MonitoringIndexComponent} from "./monitoring-index.component";

const routes: Routes = [{
    path: '',
    component: MonitoringIndexComponent,
    data: {pageTitle: 'monitoring-index'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [MonitoringIndexComponent],
})
export class MonitoringIndexModule { }

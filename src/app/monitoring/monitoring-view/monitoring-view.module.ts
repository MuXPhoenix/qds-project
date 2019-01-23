import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
/**
 * Created by Administrator on 2019/01/22
 */
import {MonitoringViewComponent} from "./monitoring-view.component";
import {I3otpModule} from "../../shared/i3otp.module";


const routes: Routes = [{
    path: '',
    component: MonitoringViewComponent,
    data: {pageTitle: 'monitoring-view'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [MonitoringViewComponent],
})
export class MonitoringViewModule { }

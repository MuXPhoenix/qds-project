/**
 * Created by Administrator on 2019/01/16
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {TramcarAlarmComponent} from "./tramcar-alarm.component";
import {DpDatePickerModule} from "ng2-date-picker";

const routes: Routes = [{
    path: '',
    component: TramcarAlarmComponent,
    data: {pageTitle: 'tramcar-alarm'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        DpDatePickerModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [TramcarAlarmComponent],
})
export class TramcarAlarmModule { }

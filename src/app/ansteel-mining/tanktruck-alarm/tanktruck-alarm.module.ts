/**
 * Created by Administrator on 2019/01/16
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {TanktruckAlarmComponent} from "./tanktruck-alarm.component";

const routes: Routes = [{
    path: '',
    component: TanktruckAlarmComponent,
    data: {pageTitle: 'tanktruck-alarm'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [TanktruckAlarmComponent],
})
export class TanktruckAlarmModule { }

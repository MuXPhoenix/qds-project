/**
 * Created by Administrator on 2019/01/16
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {TramcarStatusComponent} from "./tramcar-status.component";

const routes: Routes = [{
    path: '',
    component: TramcarStatusComponent,
    data: {pageTitle: 'tramcar-status'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [TramcarStatusComponent],
})
export class TramcarStatusModule { }

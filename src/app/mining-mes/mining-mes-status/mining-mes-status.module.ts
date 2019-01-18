/**
 * Created by Administrator on 2019/01/19
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {MiningMesStatusComponent} from "./mining-mes-status.component";
import {AngularEchartsModule} from "ngx-echarts";

const routes: Routes = [{
    path: '',
    component: MiningMesStatusComponent,
    data: {pageTitle: 'mining-mes-status'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        AngularEchartsModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [MiningMesStatusComponent],
})
export class MiningMesStatusModule { }


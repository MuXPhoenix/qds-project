/**
 * Created by Administrator on 2019/01/16
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {EnergyIndexComponent} from "./energy-index.component";
import {AngularEchartsModule} from "ngx-echarts";

const routes: Routes = [{
    path: '',
    component: EnergyIndexComponent,
    data: {pageTitle: 'energy-index'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        AngularEchartsModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [EnergyIndexComponent],
})
export class EnergyIndexModule { }

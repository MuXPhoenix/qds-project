/**
 * Created by Administrator on 2019/01/16
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {EnergyDriverDataComponent} from "./energy-driver-data.component";
import {AngularEchartsModule} from "ngx-echarts";

const routes: Routes = [{
    path: '',
    component: EnergyDriverDataComponent,
    data: {pageTitle: 'energy-driver-data'}
}];

@NgModule({
    imports: [
        CommonModule,
        AngularEchartsModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [EnergyDriverDataComponent],
})
export class EnergyDriverDataModule { }

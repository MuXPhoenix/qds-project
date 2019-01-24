
/**
 * Created by Administrator on 2019/01/22
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {AngularEchartsModule} from "ngx-echarts";
import {EnergyConsumeElectricityviewComponent} from "./energy-consume-electricityview.component";

const routes: Routes = [{
    path: '',
    component: EnergyConsumeElectricityviewComponent,
    data: {pageTitle: 'energy-consume-electricityview'}
}];

@NgModule({
    imports: [
        CommonModule,
        AngularEchartsModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [EnergyConsumeElectricityviewComponent],
})
export class EnergyConsumeElectricityviewModule { }



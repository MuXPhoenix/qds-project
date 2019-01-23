
/**
 * Created by Administrator on 2019/01/22
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {AngularEchartsModule} from "ngx-echarts";
import {EnergyOilConsumptionviewComponent} from "./energy-oil-consumptionview.component";

const routes: Routes = [{
    path: '',
    component: EnergyOilConsumptionviewComponent,
    data: {pageTitle: 'energy-oil-consumptionview'}
}];

@NgModule({
    imports: [
        CommonModule,
        AngularEchartsModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [EnergyOilConsumptionviewComponent],
})
export class EnergyOilConsumptionviewModule { }

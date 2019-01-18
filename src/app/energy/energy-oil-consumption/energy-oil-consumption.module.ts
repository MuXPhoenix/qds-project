
/**
 * Created by Administrator on 2019/01/18
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {EnergyOilConsumptionComponent} from "./energy-oil-consumption.component";

const routes: Routes = [{
    path: '',
    component: EnergyOilConsumptionComponent,
    data: {pageTitle: 'energy-oil-consumption'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [EnergyOilConsumptionComponent],
})
export class EnergyOilConsumptionModule { }


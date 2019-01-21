
/**
 * Created by Administrator on 2019/01/18
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {EnergyConsumeElectricityComponent} from "./energy-consume-electricity.component";

const routes: Routes = [{
    path: '',
    component: EnergyConsumeElectricityComponent,
    data: {pageTitle: 'energy-consume-electricity'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [EnergyConsumeElectricityComponent],
})
export class EnergyConsumeElectricityModule { }


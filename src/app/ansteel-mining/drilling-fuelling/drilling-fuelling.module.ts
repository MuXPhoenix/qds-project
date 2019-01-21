/**
 * Created by Administrator on 2019/01/16
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {DrillingFuellingComponent} from "./drilling-fuelling.component";

const routes: Routes = [{
    path: '',
    component: DrillingFuellingComponent,
    data: {pageTitle: 'drilling-fuelling'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [DrillingFuellingComponent],
})
export class DrillingFuellingModule { }

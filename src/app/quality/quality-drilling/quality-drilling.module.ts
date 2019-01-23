
/**
 * Created by Administrator on 2019/01/22
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {QualityDrillingComponent} from "./quality-drilling.component";


const routes: Routes = [{
    path: '',
    component: QualityDrillingComponent,
    data: {pageTitle: 'quality-drilling'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [QualityDrillingComponent],
})
export class QualityDrillingModule { }



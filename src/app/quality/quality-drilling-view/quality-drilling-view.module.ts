
/**
 * Created by Administrator on 2019/01/22
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {QualityDrillingViewComponent} from "./quality-drilling-view.component";
import {AngularEchartsModule} from "ngx-echarts";


const routes: Routes = [{
    path: '',
    component: QualityDrillingViewComponent,
    data: {pageTitle: 'quality-drilling-view'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        AngularEchartsModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [QualityDrillingViewComponent],
})
export class QualityDrillingViewModule { }

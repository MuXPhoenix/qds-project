
/**
 * Created by Administrator on 2019/01/23
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {AngularEchartsModule} from "ngx-echarts";
import {I3otpModule} from "../../shared/i3otp.module";
import {OtherautomobileDataComponent} from "./otherautomobile-data.component";

const routes: Routes = [{
    path: '',
    component: OtherautomobileDataComponent,
    data: {pageTitle: 'otherautomobile-data'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        AngularEchartsModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [OtherautomobileDataComponent],
})
export class OtherautomobileDataModule { }

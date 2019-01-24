
/**
 * Created by Administrator on 2019/01/23
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {AngularEchartsModule} from "ngx-echarts";
import {I3otpModule} from "../../shared/i3otp.module";
import {MiningMesDrillviewComponent} from "./mining-mes-drillview.component";

const routes: Routes = [{
    path: '',
    component: MiningMesDrillviewComponent,
    data: {pageTitle: 'mining-mes-drillview'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        AngularEchartsModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [MiningMesDrillviewComponent],
})
export class MiningMesDrillviewModule { }


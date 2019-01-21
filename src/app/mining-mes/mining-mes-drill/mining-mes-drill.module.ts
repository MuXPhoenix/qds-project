
/**
 * Created by Administrator on 2019/01/18
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {MiningMesDrillComponent} from "./mining-mes-drill.component";

const routes: Routes = [{
    path: '',
    component: MiningMesDrillComponent,
    data: {pageTitle: 'mining-mes-drill'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [MiningMesDrillComponent],
})
export class MiningMesDrillModule { }

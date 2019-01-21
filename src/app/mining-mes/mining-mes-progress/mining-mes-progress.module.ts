/**
 * Created by Administrator on 2019/01/18
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {MiningMesProgressComponent} from "./mining-mes-progress.component";

const routes: Routes = [{
    path: '',
    component: MiningMesProgressComponent,
    data: {pageTitle: 'mining-mes-progress'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [MiningMesProgressComponent],
})
export class MiningMesProgressModule { }

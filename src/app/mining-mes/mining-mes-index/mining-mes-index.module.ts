/**
 * Created by Administrator on 2019/01/16
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {MiningMesIndexComponent} from "./mining-mes-index.component";

const routes: Routes = [{
    path: '',
    component: MiningMesIndexComponent,
    data: {pageTitle: 'mining-mes-index'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [MiningMesIndexComponent],
})
export class MiningMesIndexModule { }
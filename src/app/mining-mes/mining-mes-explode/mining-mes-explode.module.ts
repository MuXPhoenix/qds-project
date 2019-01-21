/**
 * Created by Administrator on 2019/01/18
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {MiningMesExplodeComponent} from "./mining-mes-explode.component";

const routes: Routes = [{
    path: '',
    component: MiningMesExplodeComponent,
    data: {pageTitle: 'mining-mes-explode'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [MiningMesExplodeComponent],
})
export class MiningMesExplodeModule { }
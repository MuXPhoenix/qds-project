/**
 * Created by Administrator on 2019/01/16
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {OtherautomobileIndexComponent} from "./otherautomobile-index.component";

const routes: Routes = [{
    path: '',
    component: OtherautomobileIndexComponent,
    data: {pageTitle: 'otherautomobile-index'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [OtherautomobileIndexComponent],
})
export class OtherautomobileIndexModule { }
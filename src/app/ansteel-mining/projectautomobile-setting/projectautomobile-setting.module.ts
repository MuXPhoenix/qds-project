/**
 * Created by Administrator on 2019/01/16
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {ProjectautomobileSettingComponent} from "./projectautomobile-setting.component";

const routes: Routes = [{
    path: '',
    component: ProjectautomobileSettingComponent,
    data: {pageTitle: 'projectautomobile-setting'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [ProjectautomobileSettingComponent],
})
export class ProjectautomobileSettingModule { }
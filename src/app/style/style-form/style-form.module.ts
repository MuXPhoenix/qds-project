
/**
 * Created by Administrator on 2019/01/22
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {StyleFormComponent} from "./style-form.component";

const routes: Routes = [{
    path: '',
    component: StyleFormComponent,
    data: {pageTitle: 'style-form'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [StyleFormComponent],
})
export class StyleFormModule { }




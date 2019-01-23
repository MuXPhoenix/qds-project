
/**
 * Created by Administrator on 2019/01/22
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {StyleViewComponent} from "./style-view.component";

const routes: Routes = [{
    path: '',
    component: StyleViewComponent,
    data: {pageTitle: 'style-view'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [StyleViewComponent],
})
export class StyleViewModule { }


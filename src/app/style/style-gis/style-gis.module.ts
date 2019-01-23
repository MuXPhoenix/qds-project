
/**
 * Created by Administrator on 2019/01/22
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {StyleGisComponent} from "./style-gis.component";

const routes: Routes = [{
    path: '',
    component: StyleGisComponent,
    data: {pageTitle: 'style-gis'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [StyleGisComponent],
})
export class StyleGisModule { }

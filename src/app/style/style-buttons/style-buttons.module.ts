
/**
 * Created by Administrator on 2019/01/22
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {StyleButtonsComponent} from "./style-buttons.component";


const routes: Routes = [{
    path: '',
    component: StyleButtonsComponent,
    data: {pageTitle: 'style-buttons'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [StyleButtonsComponent],
})
export class StyleButtonsModule { }




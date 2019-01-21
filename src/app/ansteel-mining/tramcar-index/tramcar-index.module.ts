import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {TramcarIndexComponent} from "./tramcar-index.component";

const routes: Routes = [{
    path: '',
    component: TramcarIndexComponent,
    data: {pageTitle: 'tramcar-index'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [TramcarIndexComponent],
    providers:[]
})

export class TramcarIndexModule { }

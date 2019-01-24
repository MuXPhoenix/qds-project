import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {TramcarIndexComponent} from "./tramcar-index.component";
import {TramcarIndexGuard} from "../../core/guards/tramcar-index.guards";
import {FilterStringPipe} from "../../core/filter_string.pipe";
// import {FilterStringModule} from "../../core/filter_string.module";

const routes: Routes = [{
    path: '',
    component: TramcarIndexComponent,
    data: {pageTitle: 'tramcar-index'},
    canDeactivate: [TramcarIndexGuard]  //路由守卫
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        RouterModule.forChild(routes),
        // FilterStringModule
    ],
    exports: [RouterModule],
    declarations: [
        TramcarIndexComponent,
        FilterStringPipe
    ],
    providers:[]
})

export class TramcarIndexModule { }

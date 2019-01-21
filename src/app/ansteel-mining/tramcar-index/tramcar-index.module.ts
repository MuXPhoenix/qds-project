/**
 * Created by Administrator on 2018/12/19 0019.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {TramcarIndexComponent} from "./tramcar-index.component";

const routes: Routes = [{
    path: '',
    component: TramcarIndexComponent,
    data: {pageTitle: 'tramcar-index'}
}];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [TramcarIndexComponent],
    providers:[]
})

export class TramcarIndexModule { }

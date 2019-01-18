/**
 * Created by Administrator on 2019/01/16
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {I3otpModule} from "../../shared/i3otp.module";
import {ScraperTaskComponent} from "./scraper-task.component";

const routes: Routes = [{
    path: '',
    component: ScraperTaskComponent,
    data: {pageTitle: 'scraper-task'}
}];

@NgModule({
    imports: [
        CommonModule,
        I3otpModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [ScraperTaskComponent],
})
export class ScraperTaskModule { }

/**
 * Created by Administrator on 2019/01/19
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiningMesProductionComponent } from './mining-mes-production.component';
import {RouterModule, Routes} from "@angular/router";
import {I3otpModule} from "../../shared/i3otp.module";

const routes: Routes = [{
    path: '',
    component: MiningMesProductionComponent,
    data: {pageTitle: 'mining-mes-production'}
}];
@NgModule({
  imports: [
    CommonModule,
      I3otpModule,
      RouterModule.forChild(routes)
  ],
    exports: [RouterModule],
    declarations: [MiningMesProductionComponent],
})
export class MiningMesProductionModule { }

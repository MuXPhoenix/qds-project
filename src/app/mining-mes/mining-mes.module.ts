import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiningMesIndexComponent } from './mining-mes-index/mining-mes-index.component';
import {I3otpModule} from "../shared/i3otp.module";
import {routing} from "./mining-mes-routing.module";

@NgModule({
  declarations: [MiningMesIndexComponent],
  imports: [
    CommonModule,
      I3otpModule,
      routing
  ]
})
export class MiningMesModule { }

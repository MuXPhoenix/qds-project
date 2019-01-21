import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from "./ansteel-mining-routing.module";
import {FilterStringPipe} from "../core/filter_string.pipe";
import {wsClientService} from "../shared/ws/ws-client";
import {TramcarIndexGuard} from "../core/guards/tramcar-index.guards";

@NgModule({
  declarations: [
      FilterStringPipe
  ],
  imports: [
    CommonModule,
      routing
  ],
  providers: [wsClientService,TramcarIndexGuard]
})
export class AnsteelMiningModule { }

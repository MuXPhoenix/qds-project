import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from "./ansteel-mining-routing.module";
import {wsClientService} from "../shared/ws/ws-client";
import {TramcarIndexGuard} from "../core/guards/tramcar-index.guards";
import {FormsModule} from "@angular/forms";
import {TramcarStatusGuard} from "../core/guards/tramcar-status.guards";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
      FormsModule,
      routing
  ],
  providers: [wsClientService,TramcarIndexGuard,TramcarStatusGuard]
})
export class AnsteelMiningModule { }

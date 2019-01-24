import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FilterStringPipe} from "./filter_string.pipe";

@NgModule({
  declarations: [FilterStringPipe],
  imports: [
    CommonModule,
  ]
})
export class FilterStringModule { }

import { Routes, RouterModule } from '@angular/router';
import {InitiateDutyshiftComponent} from "./initiate-dutyshift.component";

export const InitiateDutyshiftRoutes: Routes = [{
    path: '',
    component: InitiateDutyshiftComponent
}];
export const InitiateDutyshiftRoutingModule = RouterModule.forChild(InitiateDutyshiftRoutes);



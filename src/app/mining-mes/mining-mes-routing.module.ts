import { Routes, RouterModule } from '@angular/router';
import {MiningMesIndexComponent} from "./mining-mes-index/mining-mes-index.component";

export const routes:Routes = [
    {
        path: 'mining-mes-index',
        component: MiningMesIndexComponent
    }
];

export const routing = RouterModule.forChild(routes)
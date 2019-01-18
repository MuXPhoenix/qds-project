import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: 'mining-mes-index',
        loadChildren: 'app/mining-mes/mining-mes-index/mining-mes-index.module#MiningMesIndexModule',
        data: {pageTitle: 'MiningMesIndex'}
    },
    {
        path: 'mining-mes-production',
        loadChildren: 'app/mining-mes/mining-mes-production/mining-mes-production.module#MiningMesProductionModule',
        data: {pageTitle: 'MiningMesProduction'}
    },
    {
        path: 'mining-mes-progress',
        loadChildren: 'app/mining-mes/mining-mes-progress/mining-mes-progress.module#MiningMesProgressModule',
        data: {pageTitle: 'MiningMesProgress'}
    },
    {
        path: 'mining-mes-status',
        loadChildren: 'app/mining-mes/mining-mes-status/mining-mes-status.module#MiningMesStatusModule',
        data: {pageTitle: 'MiningMesStatus'}
    }
];

export const routing = RouterModule.forChild(routes);

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
        path: 'mining-mes-status',
        loadChildren: 'app/mining-mes/mining-mes-status/mining-mes-status.module#MiningMesStatusModule',
        data: {pageTitle: 'MiningMesStatus'}
    },
    {
        path: 'mining-mes-explode',
        loadChildren: 'app/mining-mes/mining-mes-explode/mining-mes-explode.module#MiningMesExplodeModule',
        data: {pageTitle: 'MiningMesExplode'}
    },
    {
        path: 'mining-mes-drill',
        loadChildren: 'app/mining-mes/mining-mes-drill/mining-mes-drill.module#MiningMesDrillModule',
        data: {pageTitle: 'MiningMesDrill'}
    },
    {
        path: 'mining-mes-drillview',
        loadChildren: 'app/mining-mes/mining-mes-drillview/mining-mes-drillview.module#MiningMesDrillviewModule',
        data: {pageTitle: 'MiningMesDrillview'}
    },
    {
        path: 'mining-mes-explodeview',
        loadChildren: 'app/mining-mes/mining-mes-explodeview/mining-mes-explodeview.module#MiningMesExplodeviewModule',
        data: {pageTitle: 'MiningMesExplodeview'}
    },
    {
        path: 'mining-mes-productionview',
        loadChildren: 'app/mining-mes/mining-mes-productionview/mining-mes-productionview.module#MiningMesProductionviewModule',
        data: {pageTitle: 'MiningMesProductionview'}
    }
];

export const routing = RouterModule.forChild(routes);

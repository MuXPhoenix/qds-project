import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: 'energy-index',
        loadChildren: 'app/energy/energy-index/energy-index.module#EnergyIndexModule',
        data: {pageTitle: 'EnergyIndex'}
    },
    {
        path: 'energy-driver-data',
        loadChildren: 'app/energy/energy-driver-data/energy-driver-data.module#EnergyDriverDataModule',
        data: {pageTitle: 'EnergyDriverData'}
    }
];

export const routing = RouterModule.forChild(routes);

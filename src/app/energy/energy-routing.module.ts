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
    },
    {
        path: 'energy-oil-consumption',
        loadChildren: 'app/energy/energy-oil-consumption/energy-oil-consumption.module#EnergyOilConsumptionModule',
        data: {pageTitle: 'EnergyOilConsumption'}
    },
    {
        path: 'energy-consume-electricity',
        loadChildren: 'app/energy/energy-consume-electricity/energy-consume-electricity.module#EnergyConsumeElectricityModule',
        data: {pageTitle: 'EnergyConsumeElectricity'}
    },
    {
        path: 'energy-electricity',
        loadChildren: 'app/energy/energy-electricity/energy-electricity.module#EnergyElectricityModule',
        data: {pageTitle: 'EnergyElectricity'}
    },
    {
        path: 'energy-electricity-view',
        loadChildren: 'app/energy/energy-electricity-view/energy-electricity-view.module#EnergyElectricityViewModule',
        data: {pageTitle: 'EnergyElectricityView'}
    },
    {
        path: 'energy-consume-electricityview',
        loadChildren: 'app/energy/energy-consume-electricityview/energy-consume-electricityview.module#EnergyConsumeElectricityviewModule',
        data: {pageTitle: 'EnergyConsumeElectricityview'}
    },
    {
        path: 'energy-oil-consumptionview',
        loadChildren: 'app/energy/energy-oil-consumptionview/energy-oil-consumptionview.module#EnergyOilConsumptionviewModule',
        data: {pageTitle: 'EnergyOilConsumptionview'}
    }
];

export const routing = RouterModule.forChild(routes);

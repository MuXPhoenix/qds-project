import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: 'quality-drilling',
        loadChildren: 'app/quality/quality-drilling/quality-drilling.module#QualityDrillingModule',
        data: {pageTitle: 'QualityDrilling'}
    },
    {
        path: 'quality-drilling-view',
        loadChildren: 'app/quality/quality-drilling-view/quality-drilling-view.module#QualityDrillingViewModule',
        data: {pageTitle: 'QualityDrillingView'}
    },
    {
        path: 'quality-assay',
        loadChildren: 'app/quality/quality-assay/quality-assay.module#QualityAssayModule',
        data: {pageTitle: 'QualityAssay'}
    },
    {
        path: 'quality-assay-view',
        loadChildren: 'app/quality/quality-assay-view/quality-assay-view.module#QualityAssayViewModule',
        data: {pageTitle: 'QualityAssayView'}
    }
];

export const routing = RouterModule.forChild(routes);
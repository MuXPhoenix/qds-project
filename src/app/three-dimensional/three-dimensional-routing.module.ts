import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: 'three-dimensional-index',
        loadChildren: 'app/three-dimensional/three-dimensional-index/three-dimensional-index.module#ThreeDimensionalIndexModule',
        data: {pageTitle: 'ThreeDimensionalIndex'}
    }
];

export const routing = RouterModule.forChild(routes);

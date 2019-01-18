import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: 'patrol-index',
        loadChildren: 'app/patrol/patrol-index/patrol-index.module#PatrolIndexModule',
        data: {pageTitle: 'PatrolIndex'}
    }
];

export const routing = RouterModule.forChild(routes);
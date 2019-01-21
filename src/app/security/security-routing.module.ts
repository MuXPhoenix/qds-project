import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: 'security-index',
        loadChildren: 'app/security/security-index/security-index.module#SecurityIndexModule',
        data: {pageTitle: 'SecurityIndex'}
    }
];

export const routing = RouterModule.forChild(routes);

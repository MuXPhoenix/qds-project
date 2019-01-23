import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: 'security-index',
        loadChildren: 'app/security/security-index/security-index.module#SecurityIndexModule',
        data: {pageTitle: 'SecurityIndex'}
    },
    {
        path: 'security-task',
        loadChildren: 'app/security/security-task/security-task.module#SecurityTaskModule',
        data: {pageTitle: 'SecurityTask'}
    },
    {
        path: 'security-view',
        loadChildren: 'app/security/security-view/security-view.module#SecurityViewModule',
        data: {pageTitle: 'SecurityView'}
    }
];

export const routing = RouterModule.forChild(routes);

import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: 'patrol-index',
        loadChildren: 'app/patrol/patrol-index/patrol-index.module#PatrolIndexModule',
        data: {pageTitle: 'PatrolIndex'}
    },
    {
        path: 'patrol-situation',
        loadChildren: 'app/patrol/patrol-situation/patrol-situation.module#PatrolSituationModule',
        data: {pageTitle: 'PatrolSituation'}
    },
    {
        path: 'patrol-task',
        loadChildren: 'app/patrol/patrol-task/patrol-task.module#PatrolTaskModule',
        data: {pageTitle: 'PatrolTask'}
    },
    {
        path: 'patrol-situation-view',
        loadChildren: 'app/patrol/patrol-situation-view/patrol-situation-view.module#PatrolSituationViewModule',
        data: {pageTitle: 'PatrolSituationView'}
    },
    {
        path: 'patrol-task-view',
        loadChildren: 'app/patrol/patrol-task-view/patrol-task-view.module#PatrolTaskViewModule',
        data: {pageTitle: 'PatrolTaskView'}
    }
];

export const routing = RouterModule.forChild(routes);
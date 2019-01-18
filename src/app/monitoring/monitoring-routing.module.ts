import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: 'monitoring-index',
        loadChildren: 'app/monitoring/monitoring-index/monitoring-index.module#MonitoringIndexModule',
        data: {pageTitle: 'MonitoringIndex'}
    },
    {
        path: 'monitoring-task',
        loadChildren: 'app/monitoring/monitoring-task/monitoring-task.module#MonitoringTaskModule',
        data: {pageTitle: 'MonitoringTask'}
    },
    {
        path: 'monitoring-history',
        loadChildren: 'app/monitoring/monitoring-history/monitoring-history.module#MonitoringHistoryModule',
        data: {pageTitle: 'MonitoringHistory'}
    }
];

export const routing = RouterModule.forChild(routes);

import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: 'style-buttons',
        loadChildren: 'app/style/style-buttons/style-buttons.module#StyleButtonsModule',
        data: {pageTitle: 'StyleButtons'}
    },
    {
        path: 'style-carousel',
        loadChildren: 'app/style/style-carousel/style-carousel.module#StyleCarouselModule',
        data: {pageTitle: 'StyleCarousel'}
    },
    {
        path: 'style-color',
        loadChildren: 'app/style/style-color/style-color.module#StyleColorModule',
        data: {pageTitle: 'StyleColor'}
    },
    {
        path: 'style-dashboard',
        loadChildren: 'app/style/style-dashboard/style-dashboard.module#StyleDashboardModule',
        data: {pageTitle: 'StyleDashboard'}
    },
    {
        path: 'style-editors',
        loadChildren: 'app/style/style-editors/style-editors.module#StyleEditorsModule',
        data: {pageTitle: 'StyleEditors'}
    },
    {
        path: 'style-form',
        loadChildren: 'app/style/style-form/style-form.module#StyleFormModule',
        data: {pageTitle: 'StyleForm'}
    },
    {
        path: 'style-gis',
        loadChildren: 'app/style/style-gis/style-gis.module#StyleGisModule',
        data: {pageTitle: 'StyleGis'}
    },
    {
        path: 'style-layouts',
        loadChildren: 'app/style/style-layouts/style-layouts.module#StyleLayoutsModule',
        data: {pageTitle: 'StyleLayouts'}
    },
    {
        path: 'style-scada',
        loadChildren: 'app/style/style-scada/style-scada.module#StyleScadaModule',
        data: {pageTitle: 'StyleScada'}
    },
    {
        path: 'style-table',
        loadChildren: 'app/style/style-table/style-table.module#StyleTableModule',
        data: {pageTitle: 'StyleTable'}
    },
    {
        path: 'style-view',
        loadChildren: 'app/style/style-view/style-view.module#StyleViewModule',
        data: {pageTitle: 'StyleView'}
    },
    {
        path: 'style-awesome-icons',
        loadChildren: 'app/style/style-awesome-icons/style-awesome-icons.module#StyleAwesomeIconsModule',
        data: {pageTitle: 'StyleAwesomeIcons'}
    },
    {
        path: 'style-glyph-icons',
        loadChildren: 'app/style/style-glyph-icons/style-glyph-icons.module#StyleGlyphIconsModule',
        data: {pageTitle: 'StyleGlyphIcons'}
    }
];

export const routing = RouterModule.forChild(routes);
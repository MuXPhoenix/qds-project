import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: 'blending-index',
        loadChildren: 'app/ansteel-mining/blending-index/blending-index.module#BlendingIndexModule',
        data: {pageTitle: 'BlendingIndex'}
    },
    {
        path: 'blending-dailyplan',
        loadChildren: 'app/ansteel-mining/blending-dailyplan/blending-dailyplan.module#BlendingDailyplanModule',
        data: {pageTitle: 'BlendingDailyplan'}
    },
    {
        path: 'gis-index',
        loadChildren: 'app/ansteel-mining/gis-index/gis-index.module#GisIndexModule',
        data: {pageTitle: 'GisIndex'}
    },
    {
        path: 'drilling-alarm',
        loadChildren: 'app/ansteel-mining/drilling-alarm/drilling-alarm.module#DrillingAlarmModule',
        data: {pageTitle: 'DrillingAlarm'}
    },
    {
        path: 'drilling-dutyshift',
        loadChildren: 'app/ansteel-mining/drilling-dutyshift/drilling-dutyshift.module#DrillingDutyshiftModule',
        data: {pageTitle: 'DrillingDutyshift'}
    },
    {
        path: 'drilling-fuelling',
        loadChildren: 'app/ansteel-mining/drilling-fuelling/drilling-fuelling.module#DrillingFuellingModule',
        data: {pageTitle: 'DrillingFuelling'}
    },
    {
        path: 'drilling-index',
        loadChildren: 'app/ansteel-mining/drilling-index/drilling-index.module#DrillingIndexModule',
        data: {pageTitle: 'DrillingIndex'}
    },
    {
        path: 'drilling-setting',
        loadChildren: 'app/ansteel-mining/drilling-setting/drilling-setting.module#DrillingSettingModule',
        data: {pageTitle: 'DrillingSetting'}
    },
    {
        path: 'drilling-status',
        loadChildren: 'app/ansteel-mining/drilling-status/drilling-status.module#DrillingStatusModule',
        data: {pageTitle: 'DrillingStatus'}
    },
    {
        path: 'drilling-task',
        loadChildren: 'app/ansteel-mining/drilling-task/drilling-task.module#DrillingTaskModule',
        data: {pageTitle: 'DrillingTask'}
    },
    {
        path: 'scraper-alarm',
        loadChildren: 'app/ansteel-mining/scraper-alarm/scraper-alarm.module#ScraperAlarmModule',
        data: {pageTitle: 'ScraperAlarm'}
    },
    {
        path: 'scraper-dutyshift',
        loadChildren: 'app/ansteel-mining/scraper-dutyshift/scraper-dutyshift.module#ScraperDutyshiftModule',
        data: {pageTitle: 'ScraperDutyshift'}
    },
    {
        path: 'scraper-fuelling',
        loadChildren: 'app/ansteel-mining/scraper-fuelling/scraper-fuelling.module#ScraperFuellingModule',
        data: {pageTitle: 'ScraperFuelling'}
    },
    {
        path: 'scraper-index',
        loadChildren: 'app/ansteel-mining/scraper-index/scraper-index.module#ScraperIndexModule',
        data: {pageTitle: 'ScraperIndex'}
    },
    {
        path: 'scraper-setting',
        loadChildren: 'app/ansteel-mining/scraper-setting/scraper-setting.module#ScraperSettingModule',
        data: {pageTitle: 'ScraperSetting'}
    },
    {
        path: 'scraper-status',
        loadChildren: 'app/ansteel-mining/scraper-status/scraper-status.module#ScraperStatusModule',
        data: {pageTitle: 'ScraperStatus'}
    },
    {
        path: 'scraper-task',
        loadChildren: 'app/ansteel-mining/scraper-task/scraper-task.module#ScraperTaskModule',
        data: {pageTitle: 'ScraperTask'}
    },
    {
        path: 'tramcar-alarm',
        loadChildren: 'app/ansteel-mining/tramcar-alarm/tramcar-alarm.module#TramcarAlarmModule',
        data: {pageTitle: 'TramcarAlarm'}
    },
    {
        path: 'tramcar-dutyshift',
        loadChildren: 'app/ansteel-mining/tramcar-dutyshift/tramcar-dutyshift.module#TramcarDutyshiftModule',
        data: {pageTitle: 'TramcarDutyshift'}
    },
    {
        path: 'tramcar-fuelling',
        loadChildren: 'app/ansteel-mining/tramcar-fuelling/tramcar-fuelling.module#TramcarFuellingModule',
        data: {pageTitle: 'TramcarFuelling'}
    },
    {
        path: 'tramcar-index',
        loadChildren: 'app/ansteel-mining/tramcar-index/tramcar-index.module#TramcarIndexModule',
        data: {pageTitle: 'TramcarIndex'}
    },
    {
        path: 'tramcar-setting',
        loadChildren: 'app/ansteel-mining/tramcar-setting/tramcar-setting.module#TramcarSettingModule',
        data: {pageTitle: 'TramcarSetting'}
    },
    {
        path: 'tramcar-status',
        loadChildren: 'app/ansteel-mining/tramcar-status/tramcar-status.module#TramcarStatusModule',
        data: {pageTitle: 'TramcarStatus'}
    },
    {
        path: 'tramcar-task',
        loadChildren: 'app/ansteel-mining/tramcar-task/tramcar-task.module#TramcarTaskModule',
        data: {pageTitle: 'TramcarTask'}
    },
    {
        path: 'tanktruck-alarm',
        loadChildren: 'app/ansteel-mining/tanktruck-alarm/tanktruck-alarm.module#TanktruckAlarmModule',
        data: {pageTitle: 'TanktruckAlarm'}
    },
    {
        path: 'tanktruck-dutyshift',
        loadChildren: 'app/ansteel-mining/tanktruck-dutyshift/tanktruck-dutyshift.module#TanktruckDutyshiftModule',
        data: {pageTitle: 'TanktruckDutyshift'}
    },
    {
        path: 'tanktruck-fuelling',
        loadChildren: 'app/ansteel-mining/tanktruck-fuelling/tanktruck-fuelling.module#TanktruckFuellingModule',
        data: {pageTitle: 'TanktruckFuelling'}
    },
    {
        path: 'tanktruck-index',
        loadChildren: 'app/ansteel-mining/tanktruck-index/tanktruck-index.module#TanktruckIndexModule',
        data: {pageTitle: 'TanktruckIndex'}
    },
    {
        path: 'tanktruck-setting',
        loadChildren: 'app/ansteel-mining/tanktruck-setting/tanktruck-setting.module#TanktruckSettingModule',
        data: {pageTitle: 'TanktruckSetting'}
    },
    {
        path: 'tanktruck-status',
        loadChildren: 'app/ansteel-mining/tanktruck-status/tanktruck-status.module#TanktruckStatusModule',
        data: {pageTitle: 'TanktruckStatus'}
    },
    {
        path: 'tanktruck-task',
        loadChildren: 'app/ansteel-mining/tanktruck-task/tanktruck-task.module#TanktruckTaskModule',
        data: {pageTitle: 'TanktruckTask'}
    },
    {
        path: 'otherautomobile-alarm',
        loadChildren: 'app/ansteel-mining/otherautomobile-alarm/otherautomobile-alarm.module#OtherautomobileAlarmModule',
        data: {pageTitle: 'OtherautomobileAlarm'}
    },
    {
        path: 'otherautomobile-dutyshift',
        loadChildren: 'app/ansteel-mining/otherautomobile-dutyshift/otherautomobile-dutyshift.module#OtherautomobileDutyshiftModule',
        data: {pageTitle: 'OtherautomobileDutyshift'}
    },
    {
        path: 'otherautomobile-fuelling',
        loadChildren: 'app/ansteel-mining/otherautomobile-fuelling/otherautomobile-fuelling.module#OtherautomobileFuellingModule',
        data: {pageTitle: 'OtherautomobileFuelling'}
    },
    {
        path: 'otherautomobile-index',
        loadChildren: 'app/ansteel-mining/otherautomobile-index/otherautomobile-index.module#OtherautomobileIndexModule',
        data: {pageTitle: 'OtherautomobileIndex'}
    },
    {
        path: 'otherautomobile-setting',
        loadChildren: 'app/ansteel-mining/otherautomobile-setting/otherautomobile-setting.module#OtherautomobileSettingModule',
        data: {pageTitle: 'OtherautomobileSetting'}
    },
    {
        path: 'otherautomobile-status',
        loadChildren: 'app/ansteel-mining/otherautomobile-status/otherautomobile-status.module#OtherautomobileStatusModule',
        data: {pageTitle: 'OtherautomobileStatus'}
    },
    {
        path: 'otherautomobile-task',
        loadChildren: 'app/ansteel-mining/otherautomobile-task/otherautomobile-task.module#OtherautomobileTaskModule',
        data: {pageTitle: 'OtherautomobileTask'}
    },
    {
        path: 'projectautomobile-alarm',
        loadChildren: 'app/ansteel-mining/projectautomobile-alarm/projectautomobile-alarm.module#ProjectautomobileAlarmModule',
        data: {pageTitle: 'ProjectautomobileAlarm'}
    },
    {
        path: 'projectautomobile-dutyshift',
        loadChildren: 'app/ansteel-mining/projectautomobile-dutyshift/projectautomobile-dutyshift.module#ProjectautomobileDutyshiftModule',
        data: {pageTitle: 'ProjectautomobileDutyshift'}
    },
    {
        path: 'projectautomobile-fuelling',
        loadChildren: 'app/ansteel-mining/projectautomobile-fuelling/projectautomobile-fuelling.module#ProjectautomobileFuellingModule',
        data: {pageTitle: 'ProjectautomobileFuelling'}
    },
    {
        path: 'projectautomobile-index',
        loadChildren: 'app/ansteel-mining/projectautomobile-index/projectautomobile-index.module#ProjectautomobileIndexModule',
        data: {pageTitle: 'ProjectautomobileIndex'}
    },
    {
        path: 'projectautomobile-setting',
        loadChildren: 'app/ansteel-mining/projectautomobile-setting/projectautomobile-setting.module#ProjectautomobileSettingModule',
        data: {pageTitle: 'ProjectautomobileSetting'}
    },
    {
        path: 'projectautomobile-status',
        loadChildren: 'app/ansteel-mining/projectautomobile-status/projectautomobile-status.module#ProjectautomobileStatusModule',
        data: {pageTitle: 'ProjectautomobileStatus'}
    },
    {
        path: 'projectautomobile-task',
        loadChildren: 'app/ansteel-mining/projectautomobile-task/projectautomobile-task.module#ProjectautomobileTaskModule',
        data: {pageTitle: 'ProjectautomobileTask'}
    },
];

export const routing = RouterModule.forChild(routes);

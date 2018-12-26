import { Routes, RouterModule } from '@angular/router';
import {BlendingIndexComponent} from "./blending-index/blending-index.component";
import {BlendingDailyplanComponent} from "./blending-dailyplan/blending-dailyplan.component";
import {GisIndexComponent} from "./gis-index/gis-index.component";
import {DrillingAlarmComponent} from "./drilling-alarm/drilling-alarm.component";
import {DrillingDutyshiftComponent} from "./drilling-dutyshift/drilling-dutyshift.component";
import {DrillingFuellingComponent} from "./drilling-fuelling/drilling-fuelling.component";
import {DrillingIndexComponent} from "./drilling-index/drilling-index.component";
import {DrillingSettingComponent} from "./drilling-setting/drilling-setting.component";
import {DrillingStatusComponent} from "./drilling-status/drilling-status.component";
import {DrillingTaskComponent} from "./drilling-task/drilling-task.component";
import {ScraperAlarmComponent} from "./scraper-alarm/scraper-alarm.component";
import {ScraperDutyshiftComponent} from "./scraper-dutyshift/scraper-dutyshift.component";
import {ScraperFuellingComponent} from "./scraper-fuelling/scraper-fuelling.component";
import {ScraperIndexComponent} from "./scraper-index/scraper-index.component";
import {ScraperSettingComponent} from "./scraper-setting/scraper-setting.component";
import {ScraperStatusComponent} from "./scraper-status/scraper-status.component";
import {ScraperTaskComponent} from "./scraper-task/scraper-task.component";
import {TramcarAlarmComponent} from "./tramcar-alarm/tramcar-alarm.component";
import {TramcarDutyshiftComponent} from "./tramcar-dutyshift/tramcar-dutyshift.component";
import {TramcarFuellingComponent} from "./tramcar-fuelling/tramcar-fuelling.component";
import {TramcarIndexComponent} from "./tramcar-index/tramcar-index.component";
import {TramcarSettingComponent} from "./tramcar-setting/tramcar-setting.component";
import {TramcarStatusComponent} from "./tramcar-status/tramcar-status.component";
import {TramcarTaskComponent} from "./tramcar-task/tramcar-task.component";
import {TanktruckAlarmComponent} from "./tanktruck-alarm/tanktruck-alarm.component";
import {TanktruckDutyshiftComponent} from "./tanktruck-dutyshift/tanktruck-dutyshift.component";
import {TanktruckFuellingComponent} from "./tanktruck-fuelling/tanktruck-fuelling.component";
import {TanktruckIndexComponent} from "./tanktruck-index/tanktruck-index.component";
import {TanktruckSettingComponent} from "./tanktruck-setting/tanktruck-setting.component";
import {TanktruckStatusComponent} from "./tanktruck-status/tanktruck-status.component";
import {TanktruckTaskComponent} from "./tanktruck-task/tanktruck-task.component";
import {OtherautomobileAlarmComponent} from "./otherautomobile-alarm/otherautomobile-alarm.component";
import {OtherautomobileDutyshiftComponent} from "./otherautomobile-dutyshift/otherautomobile-dutyshift.component";
import {OtherautomobileFuellingComponent} from "./otherautomobile-fuelling/otherautomobile-fuelling.component";
import {OtherautomobileIndexComponent} from "./otherautomobile-index/otherautomobile-index.component";
import {OtherautomobileSettingComponent} from "./otherautomobile-setting/otherautomobile-setting.component";
import {OtherautomobileTaskComponent} from "./otherautomobile-task/otherautomobile-task.component";
import {ProjectautomobileAlarmComponent} from "./projectautomobile-alarm/projectautomobile-alarm.component";
import {ProjectautomobileDutyshiftComponent} from "./projectautomobile-dutyshift/projectautomobile-dutyshift.component";
import {ProjectautomobileFuellingComponent} from "./projectautomobile-fuelling/projectautomobile-fuelling.component";
import {ProjectautomobileIndexComponent} from "./projectautomobile-index/projectautomobile-index.component";
import {ProjectautomobileSettingComponent} from "./projectautomobile-setting/projectautomobile-setting.component";
import {ProjectautomobileStatusComponent} from "./projectautomobile-status/projectautomobile-status.component";
import {ProjectautomobileTaskComponent} from "./projectautomobile-task/projectautomobile-task.component";
import {OtherautomobileStatusComponent} from "./otherautomobile-status/otherautomobile-status.component";

export const routes:Routes = [
    {
        path: 'blending-index',
        component: BlendingIndexComponent
    },
    {
        path: 'blending-dailyplan',
        component: BlendingDailyplanComponent
    },
    {
        path: 'gis-index',
        component: GisIndexComponent
    },
    {
        path: 'drilling-alarm',
        component: DrillingAlarmComponent
    },
    {
        path: 'drilling-dutyshift',
        component: DrillingDutyshiftComponent
    },
    {
        path: 'drilling-fuelling',
        component: DrillingFuellingComponent
    },
    {
        path: 'drilling-index',
        component: DrillingIndexComponent
    },
    {
        path: 'drilling-setting',
        component: DrillingSettingComponent
    },
    {
        path: 'drilling-status',
        component: DrillingStatusComponent
    },
    {
        path: 'drilling-task',
        component: DrillingTaskComponent
    },
    {
        path: 'scraper-alarm',
        component: ScraperAlarmComponent
    },
    {
        path: 'scraper-dutyshift',
        component: ScraperDutyshiftComponent
    },
    {
        path: 'scraper-fuelling',
        component: ScraperFuellingComponent
    },
    {
        path: 'scraper-index',
        component: ScraperIndexComponent
    },
    {
        path: 'scraper-setting',
        component: ScraperSettingComponent
    },
    {
        path: 'scraper-status',
        component: ScraperStatusComponent
    },
    {
        path: 'scraper-task',
        component: ScraperTaskComponent
    },
    {
        path: 'tramcar-alarm',
        component: TramcarAlarmComponent
    },
    {
        path: 'tramcar-dutyshift',
        component: TramcarDutyshiftComponent
    },
    {
        path: 'tramcar-fuelling',
        component: TramcarFuellingComponent
    },
    {
        path: 'tramcar-index',
        component: TramcarIndexComponent
    },
    {
        path: 'tramcar-setting',
        component: TramcarSettingComponent
    },
    {
        path: 'tramcar-status',
        component: TramcarStatusComponent
    },
    {
        path: 'tramcar-task',
        component: TramcarTaskComponent
    },
    {
        path: 'tanktruck-alarm',
        component: TanktruckAlarmComponent
    },
    {
        path: 'tanktruck-dutyshift',
        component: TanktruckDutyshiftComponent
    },
    {
        path: 'tanktruck-fuelling',
        component: TanktruckFuellingComponent
    },
    {
        path: 'tanktruck-index',
        component: TanktruckIndexComponent
    },
    {
        path: 'tanktruck-setting',
        component: TanktruckSettingComponent
    },
    {
        path: 'tanktruck-status',
        component: TanktruckStatusComponent
    },
    {
        path: 'tanktruck-task',
        component: TanktruckTaskComponent
    },
    {
        path: 'otherautomobile-alarm',
        component: OtherautomobileAlarmComponent
    },
    {
        path: 'otherautomobile-dutyshift',
        component: OtherautomobileDutyshiftComponent
    },
    {
        path: 'otherautomobile-fuelling',
        component: OtherautomobileFuellingComponent
    },
    {
        path: 'otherautomobile-index',
        component: OtherautomobileIndexComponent
    },
    {
        path: 'otherautomobile-setting',
        component: OtherautomobileSettingComponent
    },
    {
        path: 'otherautomobile-status',
        component: OtherautomobileStatusComponent
    },
    {
        path: 'otherautomobile-task',
        component: OtherautomobileTaskComponent
    },
    {
        path: 'projectautomobile-alarm',
        component: ProjectautomobileAlarmComponent
    },
    {
        path: 'projectautomobile-dutyshift',
        component: ProjectautomobileDutyshiftComponent
    },
    {
        path: 'projectautomobile-fuelling',
        component: ProjectautomobileFuellingComponent
    },
    {
        path: 'projectautomobile-index',
        component: ProjectautomobileIndexComponent
    },
    {
        path: 'projectautomobile-setting',
        component: ProjectautomobileSettingComponent
    },
    {
        path: 'projectautomobile-status',
        component: ProjectautomobileStatusComponent
    },
    {
        path: 'projectautomobile-task',
        component: ProjectautomobileTaskComponent
    }
];

export const routing = RouterModule.forChild(routes)


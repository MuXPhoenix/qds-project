import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {I3otpModule} from "../shared/i3otp.module";
import {routing} from "./ansteel-mining-routing.module";
import { BlendingIndexComponent } from './blending-index/blending-index.component';
import { BlendingDailyplanComponent } from './blending-dailyplan/blending-dailyplan.component';
import { GisIndexComponent } from './gis-index/gis-index.component';
import { DrillingIndexComponent } from './drilling-index/drilling-index.component';
import { DrillingStatusComponent } from './drilling-status/drilling-status.component';
import { DrillingAlarmComponent } from './drilling-alarm/drilling-alarm.component';
import { DrillingTaskComponent } from './drilling-task/drilling-task.component';
import { DrillingDutyshiftComponent } from './drilling-dutyshift/drilling-dutyshift.component';
import { DrillingFuellingComponent } from './drilling-fuelling/drilling-fuelling.component';
import { DrillingSettingComponent } from './drilling-setting/drilling-setting.component';
import { ScraperIndexComponent } from './scraper-index/scraper-index.component';
import { ScraperStatusComponent } from './scraper-status/scraper-status.component';
import { ScraperAlarmComponent } from './scraper-alarm/scraper-alarm.component';
import { ScraperTaskComponent } from './scraper-task/scraper-task.component';
import { ScraperDutyshiftComponent } from './scraper-dutyshift/scraper-dutyshift.component';
import { ScraperFuellingComponent } from './scraper-fuelling/scraper-fuelling.component';
import { ScraperSettingComponent } from './scraper-setting/scraper-setting.component';
import { TramcarIndexComponent } from './tramcar-index/tramcar-index.component';
import { TramcarStatusComponent } from './tramcar-status/tramcar-status.component';
import { TramcarAlarmComponent } from './tramcar-alarm/tramcar-alarm.component';
import { TramcarTaskComponent } from './tramcar-task/tramcar-task.component';
import { TramcarDutyshiftComponent } from './tramcar-dutyshift/tramcar-dutyshift.component';
import { TramcarFuellingComponent } from './tramcar-fuelling/tramcar-fuelling.component';
import { TramcarSettingComponent } from './tramcar-setting/tramcar-setting.component';
import { TanktruckIndexComponent } from './tanktruck-index/tanktruck-index.component';
import { TanktruckStatusComponent } from './tanktruck-status/tanktruck-status.component';
import { TanktruckAlarmComponent } from './tanktruck-alarm/tanktruck-alarm.component';
import { TanktruckTaskComponent } from './tanktruck-task/tanktruck-task.component';
import { TanktruckDutyshiftComponent } from './tanktruck-dutyshift/tanktruck-dutyshift.component';
import { TanktruckFuellingComponent } from './tanktruck-fuelling/tanktruck-fuelling.component';
import { TanktruckSettingComponent } from './tanktruck-setting/tanktruck-setting.component';
import { OtherautomobileIndexComponent } from './otherautomobile-index/otherautomobile-index.component';
import { OtherautomobileStatusComponent } from './otherautomobile-status/otherautomobile-status.component';
import { OtherautomobileAlarmComponent } from './otherautomobile-alarm/otherautomobile-alarm.component';
import { OtherautomobileTaskComponent } from './otherautomobile-task/otherautomobile-task.component';
import { OtherautomobileDutyshiftComponent } from './otherautomobile-dutyshift/otherautomobile-dutyshift.component';
import { OtherautomobileFuellingComponent } from './otherautomobile-fuelling/otherautomobile-fuelling.component';
import { OtherautomobileSettingComponent } from './otherautomobile-setting/otherautomobile-setting.component';
import { ProjectautomobileIndexComponent } from './projectautomobile-index/projectautomobile-index.component';
import { ProjectautomobileStatusComponent } from './projectautomobile-status/projectautomobile-status.component';
import { ProjectautomobileAlarmComponent } from './projectautomobile-alarm/projectautomobile-alarm.component';
import { ProjectautomobileTaskComponent } from './projectautomobile-task/projectautomobile-task.component';
import { ProjectautomobileDutyshiftComponent } from './projectautomobile-dutyshift/projectautomobile-dutyshift.component';
import { ProjectautomobileFuellingComponent } from './projectautomobile-fuelling/projectautomobile-fuelling.component';
import { ProjectautomobileSettingComponent } from './projectautomobile-setting/projectautomobile-setting.component';
import {FilterStringPipe} from "../core/filter_string.pipe";
import {wsClientService} from "../shared/ws/ws-client";
import {TramcarIndexGuard} from "../core/guards/tramcar-index.guards";


@NgModule({
  declarations: [BlendingIndexComponent, BlendingDailyplanComponent, GisIndexComponent, DrillingIndexComponent,
    DrillingStatusComponent, DrillingAlarmComponent, DrillingTaskComponent, DrillingDutyshiftComponent, DrillingFuellingComponent,
    DrillingSettingComponent, ScraperIndexComponent, ScraperStatusComponent, ScraperAlarmComponent, ScraperTaskComponent,
    ScraperDutyshiftComponent, ScraperFuellingComponent, ScraperSettingComponent, TramcarIndexComponent, TramcarStatusComponent,
    TramcarAlarmComponent, TramcarTaskComponent, TramcarDutyshiftComponent, TramcarFuellingComponent, TramcarSettingComponent,
    TanktruckIndexComponent, TanktruckStatusComponent, TanktruckAlarmComponent, TanktruckTaskComponent, TanktruckDutyshiftComponent,
    TanktruckFuellingComponent, TanktruckSettingComponent, OtherautomobileIndexComponent, OtherautomobileStatusComponent,
    OtherautomobileAlarmComponent, OtherautomobileTaskComponent, OtherautomobileDutyshiftComponent,
    OtherautomobileFuellingComponent, OtherautomobileSettingComponent, ProjectautomobileIndexComponent,
    ProjectautomobileStatusComponent, ProjectautomobileAlarmComponent, ProjectautomobileTaskComponent,
    ProjectautomobileDutyshiftComponent, ProjectautomobileFuellingComponent, ProjectautomobileSettingComponent,
    FilterStringPipe],
  imports: [
    CommonModule,
      I3otpModule,
      routing
  ],
  providers: [wsClientService,TramcarIndexGuard]
})
export class AnsteelMiningModule { }

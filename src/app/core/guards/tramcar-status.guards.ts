/**
 * Created by Administrator on 2019/1/8 0008.
 */
import {CanDeactivate} from "@angular/router";
import {TramcarStatusComponent} from "../../ansteel-mining/tramcar-status/tramcar-status.component";

export class TramcarStatusGuard implements CanDeactivate<TramcarStatusComponent>{
    canDeactivate ( tramcarStatusComponent:TramcarStatusComponent ){
        console.log('tramcarStatusComponent');
        tramcarStatusComponent.ngOnDestroy();
        return true;

    }
}
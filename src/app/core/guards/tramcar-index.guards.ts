/**
 * Created by Administrator on 2019/1/8 0008.
 */
import {CanDeactivate} from "@angular/router";
import {TramcarIndexComponent} from "../../ansteel-mining/tramcar-index/tramcar-index.component";


/**
 * Created by LJ on 2017/7/12.
 */
export class TramcarIndexGuard implements CanDeactivate<TramcarIndexComponent>{
    canDeactivate ( chartComponent:TramcarIndexComponent ){
        // if(window.confirm( '离开此页面将停止对最新数据的显示，您确定要离开此页面吗？')) {
        console.log('TramcarIndexGuard');
        chartComponent.ngOnDestroy();
        return true;
        // }else{
        //     return false;
        // }
    }
}
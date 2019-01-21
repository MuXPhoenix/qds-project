/**
 * Created by Administrator on 2018/12/28 0028.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter_string',
    // pure: true
})
/**
 * 替换字符串里的字符
 */
export class FilterStringPipe implements PipeTransform {
    transform(value: string,search:string): string {
        let exp = eval('/'+search+'/g');
        return value.replace(exp,'');
    }
}
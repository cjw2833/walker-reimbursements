import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPipeTwo'
})
export class StatusPipeTwoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

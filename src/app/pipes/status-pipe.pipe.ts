import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPipe'
})
export class StatusPipePipe implements PipeTransform {

  transform(value: any): any {
    switch(value){
      case 1: value = 'PENDING'; break;
      case 2: value = 'APPROVED'; break;
      case 3: value = 'DENIED'; break;
    }
    return value;
  }

}

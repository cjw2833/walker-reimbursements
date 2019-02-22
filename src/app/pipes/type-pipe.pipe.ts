import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typePipe'
})
export class TypePipePipe implements PipeTransform {

  transform(value: any): any {
    switch(value){
      case 1: value = 'LODGING'; break;
      case 2: value = 'TRAVEL'; break;
      case 3: value = 'FOOD'; break;
      case 4: value = 'OTHER'; break;
    }
    return value;
  }

}

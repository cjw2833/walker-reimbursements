import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typePipeTwo'
})
export class TypePipeTwoPipe implements PipeTransform {

  transform(value: any): any {
    switch(value){
      case 'LODGING': value = 1; break;
      case 'TRAVEL':  value = 2; break;
      case 'FOOD':    value = 3; break;
      case 'OTHER':   value = 4; break;
    }
    return value;
  }

}

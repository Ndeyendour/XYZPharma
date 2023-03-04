import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'investorcolor'
 
})
export class PipeInvestPipe implements PipeTransform {

  transform(name: string): string {
  
    let color: string;
  
    switch (name) {
      case 'Q12020':
        color = 'red lighten-1';
        break;
      case 'Q22019':
        color = 'blue lighten-1';
        break;
      case 'Q32018':
        color = 'green lighten-1';
        break;
      case 'Q42017':
        color = 'brown lighten-1';
        break;
      case 'Q52016':
        color = 'grey lighten-3';
        break;
      case 'Q62015':
        color = 'blue lighten-3';
        break;
      case 'Q72014':
        color = 'deep-purple accent-1';
        break;
      
      default:
        color = 'grey';
        break;
    }
    return 'chip ' + color;
  
  }

}

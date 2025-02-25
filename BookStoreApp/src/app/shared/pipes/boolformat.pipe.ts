import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolformat',
  standalone: false
})
export class BoolformatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? 'Yes' : 'No';
  }

}

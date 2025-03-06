import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatPipe'
})
export class DateFormatPipe extends DatePipe implements PipeTransform {

  override transform(value: any): any {
    return super.transform(value, 'EE dd MMM HH:mm', "", "fr-CA");
  }
}

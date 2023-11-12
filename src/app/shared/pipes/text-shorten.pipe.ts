import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textShorten',
})
export class TextShortenPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string | void {
    if (value.length < 15) {
      return;
    }

    return value.slice(0, 50) + '...';
  }
}

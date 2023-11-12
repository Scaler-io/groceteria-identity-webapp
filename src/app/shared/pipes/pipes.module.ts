import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameShorthandPipe } from './name-shorthand.pipe';
import { CamelCaseSpacerPipe } from './camel-case-spacer.pipe';
import { TextShortenPipe } from './text-shorten.pipe';
import { FormatTimePipe } from './format-time.pipe';
import { FormatDatePipe } from './format-date.pipe';

@NgModule({
  declarations: [
    NameShorthandPipe,
    CamelCaseSpacerPipe,
    TextShortenPipe,
    FormatTimePipe,
    FormatDatePipe,
  ],
  imports: [CommonModule],
  exports: [
    NameShorthandPipe,
    CamelCaseSpacerPipe,
    TextShortenPipe,
    FormatTimePipe,
    FormatDatePipe,
  ],
})
export class PipesModule {}

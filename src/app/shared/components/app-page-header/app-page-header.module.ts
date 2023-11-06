import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPageHeaderComponent } from './app-page-header.component';
import { BreadcrumbModule } from 'xng-breadcrumb';

@NgModule({
  declarations: [AppPageHeaderComponent],
  imports: [CommonModule, BreadcrumbModule],
  exports: [AppPageHeaderComponent],
})
export class AppPageHeaderModule {}

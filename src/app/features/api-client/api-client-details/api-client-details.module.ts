import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiClientDetailsComponent } from './api-client-details.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { AppMaterialModule } from 'src/app/app-material.module';
import { DividerModule } from 'src/app/shared/components/divider/divider.module';
import { ListViewModule } from 'src/app/shared/components/list-view/list-view.module';

@NgModule({
  declarations: [ApiClientDetailsComponent],
  imports: [CommonModule, DividerModule, ListViewModule, PipesModule, AppMaterialModule],
  exports: [ApiClientDetailsComponent],
})
export class ApiClientDetailsModule {}

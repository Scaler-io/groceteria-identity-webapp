import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiClientComponent } from './api-client.component';
import { ApiClientRoutingModule } from './api-client-routing.module';
import { StoreModule } from '@ngrx/store';
import {
  API_CLIENT_STATE_NAME,
  apiClientReducer,
} from 'src/app/state/api-client/api-client.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ApiClientEffect } from 'src/app/state/api-client/api-client.effect';
import { CdkTableModule } from '@angular/cdk/table';
import { AppMaterialModule } from 'src/app/app-material.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { PaginatorModule } from 'src/app/shared/components/paginator/paginator.module';
import { ChipModule } from 'src/app/shared/components/chip/chip.module';

@NgModule({
  declarations: [ApiClientComponent],
  imports: [
    CommonModule,
    ApiClientRoutingModule,
    PipesModule,
    StoreModule.forFeature(API_CLIENT_STATE_NAME, apiClientReducer),
    EffectsModule.forFeature([ApiClientEffect]),
    CdkTableModule,
    AppMaterialModule,
    PaginatorModule,
    ChipModule,
  ],
})
export class ApiClientModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatRippleModule,
  RippleGlobalOptions,
} from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input'

const globalRippleConfig: RippleGlobalOptions = {
  disabled: false,
  animation: {
    enterDuration: 300,
    exitDuration: 0,
  },
};

const MaterialComponentModules = [
  MatRippleModule,
  MatMenuModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatInputModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialComponentModules],
  exports: [MaterialComponentModules],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig },
  ],
})
export class AppMaterialModule {}

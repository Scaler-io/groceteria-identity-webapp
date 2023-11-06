import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAvatarComponent } from './user-avatar.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [UserAvatarComponent],
  imports: [CommonModule, AppMaterialModule, PipesModule],
  exports: [UserAvatarComponent],
})
export class UserAvatarModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAvatarComponent } from './user-avatar.component';
import { AppMaterialModule } from 'src/app/app-material.module';

@NgModule({
  declarations: [UserAvatarComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [UserAvatarComponent],
})
export class UserAvatarModule {}

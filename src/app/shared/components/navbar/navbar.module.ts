import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { UserAvatarModule } from '../user-avatar/user-avatar.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, AppMaterialModule, UserAvatarModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SidenavModule } from './features/sidenav/sidenav.module';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { appReducers } from './store/app.state';
import { AuthModule } from 'angular-auth-oidc-client';
import { environment } from 'src/environments/environment';
import { AppMaterialModule } from './app-material.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppPageHeaderModule } from './shared/components/app-page-header/app-page-header.module';
import { CoreModule } from './core/core.module';
import { AppCountEffect } from './state/app-count/app-count.effect';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidenavModule,
    NavbarModule,
    AppMaterialModule,
    AppPageHeaderModule,
    AuthModule.forRoot({
      config: environment.config.oidcConfig
    }),
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AppCountEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

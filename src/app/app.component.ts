import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './core/auth/auth.service';
import { combineLatest, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { SetAuthState } from './state/auth/auth.action';
import { NavigationStart, Router } from '@angular/router';
import { getApiClientCount } from './state/app-count/app-count.selector';
import { GetApiClientCount } from './state/app-count/app-count.action';
import { LoginResponse } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public isAuthenticated: boolean;
  public isAppBusy: boolean = true;
  public appCounts = {
    apiClientCount: 0,
  };

  constructor(
    private auth: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart && this.router.url === '/') {
        this.isAppBusy = true;
      } else {
        setTimeout(() => {
          this.isAppBusy = false;
        }, 1000);
      }
    });
  }

  private subscriptions = {
    auth: null,
    apiClientCount: null,
  };

  ngOnInit(): void {
    this.performAuthenticationAndAppCount();
  }

  private performAuthenticationAndAppCount(): void {
    const authResult$ = this.auth.isAuthenticated();
    const appCounts$ = this.store.select(getApiClientCount);

    combineLatest([authResult$, appCounts$]).subscribe(
      ([authResponse, appCountResponse]) => {
        this.loadAccount(authResponse);
        this.loadAppCount(appCountResponse);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscriptions.auth) this.subscriptions.auth.unsubscribe();
  }

  private loadAccount(authResponse: LoginResponse) {
    this.isAuthenticated = authResponse.isAuthenticated;
    if (!authResponse.isAuthenticated) {
      this.auth.authorize();
    } else {
      this.store.dispatch(new SetAuthState(authResponse));
    }
  }

  private loadAppCount(appCountResponse: number) {
    if (appCountResponse === 0) {
      this.store.dispatch(new GetApiClientCount());
    } else {
      this.appCounts.apiClientCount = appCountResponse;
    }
  }
}

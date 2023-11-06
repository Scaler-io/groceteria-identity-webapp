import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './core/auth/auth.service';
import { map } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { SetAuthState } from './state/auth/auth.action';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public isAuthenticated: boolean;
  public isAppBusy: boolean = true;

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
  };

  ngOnInit(): void {
    this.performAuthentication();
  }

  private performAuthentication(): void {
    this.subscriptions.auth = this.auth
      .isAuthenticated()
      .subscribe((response) => {
        this.isAuthenticated = response.isAuthenticated;
        if (!response.isAuthenticated) {
          this.auth.authorize();
        } else {
          this.store.dispatch(new SetAuthState(response));
        }
      });
  }

  ngOnDestroy(): void {
    if (this.subscriptions.auth) this.subscriptions.auth.unsubscribe();
  }
}

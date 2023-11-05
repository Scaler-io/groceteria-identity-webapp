import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/auth/auth.service';
import { AuthUser } from 'src/app/core/model/auth';
import { getAuthUser } from 'src/app/state/auth/auth.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'groceteria-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnInit, OnDestroy {
  public authUser: AuthUser;

  constructor(private auth: AuthService, private store: Store<AppState>) {}

  private subscriptions = {
    auth: null,
  };

  ngOnInit(): void {
    this.subscriptions.auth = this.store
      .select(getAuthUser)
      .subscribe((res) => {
        this.authUser = res;
      });
  }

  ngOnDestroy(): void {
    if (this.subscriptions.auth) this.subscriptions.auth.unsubscribe();
  }

  public logout(): void {
    this.auth.signoff();
  }
}

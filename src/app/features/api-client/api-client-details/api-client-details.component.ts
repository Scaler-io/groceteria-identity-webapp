import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApiClient } from 'src/app/core/model/api-client';
import { CamelCaseSpacerPipe } from 'src/app/shared/pipes/camel-case-spacer.pipe';
import { GetApiClientStart } from 'src/app/state/api-client/api-client.action';
import { getApiClientDetails } from 'src/app/state/api-client/api-client.selector';
import { AppState } from 'src/app/store/app.state';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'groceteria-api-client-details',
  templateUrl: './api-client-details.component.html',
  styleUrls: ['./api-client-details.component.scss'],
})
export class ApiClientDetailsComponent implements OnInit, OnDestroy {
  public apiClientDetails: ApiClient;
  constructor(
    private breadcrum: BreadcrumbService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    const apiClientId = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new GetApiClientStart(apiClientId));
    this.subscriptions.apiClietDetails = this.store
      .select(getApiClientDetails)
      .subscribe((res) => {
        this.apiClientDetails = res;
        this.breadcrum.set(
          '@apiClientName',
          new CamelCaseSpacerPipe().transform(res.clientName),
        );
      });
  }

  private subscriptions = {
    apiClietDetails: null,
  };

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.subscriptions.apiClietDetails)
      this.subscriptions.apiClietDetails.unsubscribe();
  }
}

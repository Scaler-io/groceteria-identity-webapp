import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApiClientSummary } from 'src/app/core/model/api-client';
import { GetApiClientListStart } from 'src/app/state/api-client/api-client.action';
import {
  getApiList,
  getPaginationMetaData,
} from 'src/app/state/api-client/api-client.selector';
import { AppState } from 'src/app/store/app.state';
import { MatTableDataSource } from '@angular/material/table';
import { PaginationMetadata } from 'src/app/core/model/paginated-result';
import { Observable, switchMap } from 'rxjs';
import { getApiClientCount } from 'src/app/state/app-count/app-count.selector';

@Component({
  selector: 'groceteria-api-client',
  templateUrl: './api-client.component.html',
  styleUrls: ['./api-client.component.scss'],
})
export class ApiClientComponent implements OnInit, OnDestroy {
  public apiClients = new MatTableDataSource<ApiClientSummary>([]);
  public paginationMetaData: PaginationMetadata = null;
  public totalItems: number;
  public isApiDataLoaded: boolean;
  public displayedColumns = [
    'clientName',
    'clientId',
    'accessTokenLifetime',
    'enabled',
    'created',
    'action',
  ];

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  private subscriptions = {
    clientSummary: null,
    paginatedMetadata: null,
    totalApiCount: null,
  };

  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      if (
        e instanceof NavigationEnd &&
        this.router.url.includes('client?page=1')
      ) {
        this.router.navigate([], { queryParams: { page: 1 } });
      }
    });

    if (!this.route.snapshot.queryParamMap.has('page')) {
      const queryParams = { ...this.route.snapshot.queryParams };
      queryParams['page'] = 1;
      this.router.navigate([], { queryParams: queryParams });
    }

    this.route.queryParamMap.subscribe((query) => {
      const page = +query.get('page');
      if (page) this.store.dispatch(new GetApiClientListStart(page));
    });

    this.subscriptions.clientSummary = this.store
      .select(getApiList)
      .subscribe((response) => {
        if (response && response.length > 0) {
          this.isApiDataLoaded = true;
        } else {
          this.isApiDataLoaded = false;
        }
        this.apiClients.data = response;
      });

    this.subscriptions.paginatedMetadata = this.store
      .select(getPaginationMetaData)
      .subscribe((response) => {
        this.paginationMetaData = response;
      });

    this.subscriptions.totalApiCount = this.getApiTotalCount().subscribe(
      (query) => {
        const page = query['page'];
        if (page && this.totalItems > 0) {
          if (page > Math.ceil(this.totalItems / 20)) {
            this.router.navigate([], { queryParams: { page: 1 } });
          }
        }
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscriptions.clientSummary)
      this.subscriptions.clientSummary.unsubscribe();
    if (this.subscriptions.paginatedMetadata)
      this.subscriptions.paginatedMetadata.unsubscribe();
  }

  public apiStatusString(status: boolean): string {
    return status ? 'active' : 'inactive';
  }

  public openClientDetails(clientId) {
    this.router.navigate(['api-clients', clientId]);
  }

  private getApiTotalCount(): Observable<Params> {
    const queryParams$ = this.route.queryParams;
    return this.store.select(getApiClientCount).pipe(
      switchMap((response) => {
        this.totalItems = response;
        return queryParams$;
      })
    );
  }
}

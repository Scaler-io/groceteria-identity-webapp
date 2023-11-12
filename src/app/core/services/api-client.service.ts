import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiClient, PaginatedApiClientList } from '../model/api-client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  constructor(private http: HttpClient) {}

  public getApiClientPaginatedData(
    pageIndex: number = 1,
    pageSize: number = 20
  ): Observable<PaginatedApiClientList> {
    return this.http.get<PaginatedApiClientList>(
      `${environment.config.identityApiConfig.identityManagerApiUrl}/clients?pageIndex=${pageIndex}&pageSize=${pageSize}`,
      { headers: this.getHttpHeader() }
    );
  }

  public getApiClientDetails(id: string): Observable<ApiClient> {
    return this.http.get<ApiClient>(
      `${environment.config.identityApiConfig.identityManagerApiUrl}/clients/${id}`,
      {
        headers: this.getHttpHeader(),
      }
    );
  }

  public getTotalApiClientCount(): Observable<number> {
    return this.http.get<number>(
      `${environment.config.identityApiConfig.identityManagerApiUrl}/clients/count`,
      { headers: this.getHttpHeader() }
    );
  }

  private getHttpHeader() {
    return {
      'Subscription-Key': environment.config.identityApiConfig.subscriptionKey,
    };
  }
}

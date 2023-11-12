import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  GET_API_CLIENT_LIST_START,
  GET_API_CLIENT_START,
  GetApiClientListStart,
  GetApiClientListSuccess,
  GetApiClientStart,
  GetApiClientSuccess,
} from './api-client.action';
import { catchError, map, switchMap } from 'rxjs';
import { ApiClientMockService } from 'src/app/core/services/mock/api-client.mock.service';
import { ApiClientService } from 'src/app/core/services/api-client.service';

@Injectable({ providedIn: 'root' })
export class ApiClientEffect {
  public fetchApiClient$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GET_API_CLIENT_LIST_START),
      switchMap((action: GetApiClientListStart) => {
        return this.apiClient.getApiClientPaginatedData(action.pageNumber).pipe(
          map((response) => {
            return new GetApiClientListSuccess(response);
          }),
          catchError((error) => {
            console.log(error);
            throw error;
          })
        );
      })
    );
  });

  public getApiClientDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GET_API_CLIENT_START),
      switchMap((action: GetApiClientStart) => {
        return this.apiClient.getApiClientDetails(action.clientId).pipe(
          map((response) => {
            return new GetApiClientSuccess(response);
          }),
          catchError((error) => {
            console.log(error);
            throw error;
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private apiClient: ApiClientService) {}
}

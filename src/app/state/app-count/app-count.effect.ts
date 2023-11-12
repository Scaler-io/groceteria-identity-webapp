import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, catchError, map, switchMap } from 'rxjs';
import { ApiClientService } from 'src/app/core/services/api-client.service';
import {
  GET_API_CLIENT_COUNT,
  GetApiClientCountSuccess,
} from './app-count.action';
import { ApiClientMockService } from 'src/app/core/services/mock/api-client.mock.service';

@Injectable({ providedIn: 'root' })
export class AppCountEffect {
  public fetchApiClientCount$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(GET_API_CLIENT_COUNT),
      switchMap(() => {
        return this.apiClient.getTotalApiClientCount().pipe(
          map((response) => {
            return new GetApiClientCountSuccess(response);
          }),
          catchError((error) => {
            console.error(error);
            throw error;
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private apiClient: ApiClientService) {}
}

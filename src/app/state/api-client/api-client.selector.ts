import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PaginationMetadata } from 'src/app/core/model/paginated-result';
import { ApiClientState, API_CLIENT_STATE_NAME } from './api-client.reducer';

const state = createFeatureSelector<ApiClientState>(API_CLIENT_STATE_NAME);

export const getApiList = createSelector(state, (state: ApiClientState) => {
  return state.clients;
});

export const getApiListCount = createSelector(
  state,
  (state: ApiClientState) => {
    return state.count;
  }
);

export const getPaginationMetaData = createSelector(
  state,
  (state: ApiClientState) => {
    return <PaginationMetadata>{
      count: state.count,
      top: state.top,
      currentPage: state.currentPage,
    };
  }
);

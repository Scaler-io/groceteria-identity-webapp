import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppCountState, APP_COUNT_STATE_NAME } from './app-count.reducer';

const state = createFeatureSelector<AppCountState>(APP_COUNT_STATE_NAME);

export const getApiClientCount = createSelector(state, (state) => {
  return state.apiClientCount;
});

import { API_CLIENT_STATE_NAME, ApiClientState } from '../state/api-client/api-client.reducer';
import { APP_COUNT_STATE_NAME, AppCountState, appCountReducer } from '../state/app-count/app-count.reducer';
import {
  AUTH_STATE_NAME,
  AuthState,
  authReducer,
} from '../state/auth/auth.reducer';

export interface AppState {
  [AUTH_STATE_NAME]: AuthState;
  [API_CLIENT_STATE_NAME]: ApiClientState;
  [APP_COUNT_STATE_NAME]: AppCountState;
}

export const appReducers = {
  [AUTH_STATE_NAME]: authReducer,
  [APP_COUNT_STATE_NAME]: appCountReducer
};

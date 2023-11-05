import {
  AUTH_STATE_NAME,
  AuthState,
  authReducer,
} from '../state/auth/auth.reducer';

export interface AppState {
  [AUTH_STATE_NAME]: AuthState;
}

export const appReducers = {
  [AUTH_STATE_NAME]: authReducer,
};

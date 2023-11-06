import { AuthUser } from 'src/app/core/model/auth';
import { AuthActions, SET_AUTH_STATE } from './auth.action';

export const AUTH_STATE_NAME = 'auth';

export interface AuthState {
  user: AuthUser;
  isLoggedIn: boolean;
  token: string;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  token: '',
};

export function authReducer(
  state: AuthState = initialState,
  action: AuthActions
) {
  switch (action.type) {
    case SET_AUTH_STATE:
      return {
        ...state,
        user: <AuthUser>{
          firstName: action.payload.userData.firstName,
          lastName: action.payload.userData.lastName,
          email: action.payload.userData.email,
          roles: action.payload.userData.roles,
        },
        isLoggedIn: action.payload.isAuthenticated,
        token: action.payload.accessToken,
      };
    default:
      return state;
  }
}

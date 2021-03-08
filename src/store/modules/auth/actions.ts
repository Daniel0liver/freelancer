import {
  AUTH_SIGN_IN_REQUEST,
  AUTH_SIGN_IN_SUCCESS,
  ISignInAction,
  ISignInSuccessAction,
  ISignInActionProps,
} from './types';

export function signInResquest({
  email,
  password,
}: ISignInActionProps): ISignInAction {
  return {
    type: AUTH_SIGN_IN_REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess(): ISignInSuccessAction {
  return {
    type: AUTH_SIGN_IN_SUCCESS,
  };
}

export const AUTH_SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST';
export interface ISignInActionProps {
  email: string;
  password: string;
}
export interface ISignInAction {
  type: typeof AUTH_SIGN_IN_REQUEST;
  payload: ISignInActionProps;
}

export const AUTH_SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS';
export interface ISignInSuccessAction {
  type: typeof AUTH_SIGN_IN_SUCCESS;
}

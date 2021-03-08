import produce from 'immer';
import { TSettingsAction } from '../types';
import { AUTH_SIGN_IN_REQUEST, AUTH_SIGN_IN_SUCCESS } from './types';

const INITIAL_STATE = {
  signed: false,
  signout: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action: TSettingsAction) {
  return produce(state, (draft) => {
    switch (action.type) {
      case AUTH_SIGN_IN_REQUEST: {
        draft.loading = true;
        break;
      }
      case AUTH_SIGN_IN_SUCCESS: {
        draft.loading = false;
        draft.signed = true;
        break;
      }
      default:
    }
  });
}

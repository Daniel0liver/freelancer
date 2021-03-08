import { Alert } from 'react-native';
import { takeLatest, call, all, put, StrictEffect } from 'redux-saga/effects';

import { AUTH_SIGN_IN_REQUEST } from './types';

import { signInSuccess } from './actions';

import { auth } from '../../../services/Firebase';

export function* signIn({ payload }: StrictEffect) {
  try {
    const { email, password } = payload;

    yield call([auth, auth.signInWithEmailAndPassword], email, password);

    yield put(signInSuccess());
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      Alert.alert('Atenção', 'Email ou senha inválido.');
    } else if (error.code === 'auth/wrong-password') {
      Alert.alert('Atenção', 'Email ou senha inválido.');
    } else if (error.code === 'auth/invalid-email') {
      Alert.alert('Oops', 'O endereço de email está mal formatado.');
    } else {
      Alert.alert(
        'Ocorreu um erro',
        'Falha na autenticação. Verifique sua conexão com a Internet.',
      );
    }
  }
}

export default all([takeLatest(AUTH_SIGN_IN_REQUEST, signIn)]);

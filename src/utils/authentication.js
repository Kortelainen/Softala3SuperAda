import {AsyncStorage} from 'react-native';
import store from '../redux/store';
import * as AuthState from '../modules/auth/AuthState';

const AUTHENTICATION_STORAGE_KEY = 'PepperoniState:Authentication';

export function getAuthenticationToken() {
  return AsyncStorage.getItem(AUTHENTICATION_STORAGE_KEY);
}

export async function setAuthenticationToken(token) {
  store.dispatch(AuthState.onUserLoginSuccess());
  return AsyncStorage.setItem(AUTHENTICATION_STORAGE_KEY, token);
}

export async function clearAuthenticationToken() {
  store.dispatch(AuthState.onUserLoginError());
  return AsyncStorage.removeItem(AUTHENTICATION_STORAGE_KEY);
}

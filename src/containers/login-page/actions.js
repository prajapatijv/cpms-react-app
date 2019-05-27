import { LOGIN_ACTIONS as C } from '../actionTypes'

export const login = (credentials) => ({ type: C.LOGIN, payload: credentials })
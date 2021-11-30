import UserActionTypes from './user-types';

export const loginindata = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
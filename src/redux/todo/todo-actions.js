import todoActionTypes from './todo-types';

export const storetododata = (todo) => ({
  type: todoActionTypes.SET_CURRENT_DATA,
  payload: todo
});
export const deletetododata = (index) => ({
  type: todoActionTypes.REMOVE_CURRENT_DATA,
  payload: index
});
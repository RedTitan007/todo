import todoActionTypes from './todo-types';

const INITIAL_STATE = {
  tododata: []
};
const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case todoActionTypes.SET_CURRENT_DATA:
        return {
          ...state,
          tododata: [...state.tododata,action.payload]
        };
        case todoActionTypes.REMOVE_CURRENT_DATA:
        return {
          ...state,
          tododata: [...state.tododata.filter((a,index)=>a!==state.tododata[action.payload])]
        };
        default:
      return state;
  }
};
export default todoReducer;
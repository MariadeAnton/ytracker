import { combineReducers } from 'redux';

function alert(state = {}, action) {
  switch (action.type) {
    case 'SUCCESS':
      return {
        type: 'alert-success',
        message: action.message,
      }
    default:
      return state;
  }
}

export default combineReducers({alert});
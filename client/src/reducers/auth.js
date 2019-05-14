import {
  GET_CURRENT_USER,
  UPDATE_USER,
  LOGOUT,
  AUTH_ERROR
} from "../actions/types";

const initialState = {
  userData: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CURRENT_USER:
    case UPDATE_USER:
      return {
        ...state,
        userData: payload
      };
    case LOGOUT:
    case AUTH_ERROR:
      return {
        ...state,
        userData: null
      };
    default:
      return state;
  }
}

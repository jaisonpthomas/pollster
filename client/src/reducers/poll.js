import { GET_POLLS, ADD_POLL, POLL_ERROR } from "../actions/types";

const initialState = {
  polls: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POLLS:
      return {
        ...state,
        polls: payload
      };
    case ADD_POLL:
      return {
        ...state,
        polls: [payload, ...state.polls]
      };
    case POLL_ERROR:
    default:
      return state;
  }
}

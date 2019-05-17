import axios from "axios";
import { GET_POLLS, ADD_POLL, POLL_ERROR, UPDATE_USER } from "./types";

export const addPoll = poll => async dispatch => {
  try {
    const res = await axios.post("/api/polls", poll);
    console.log(res.data);

    dispatch({
      type: ADD_POLL,
      payload: res.data.poll
    });
    dispatch({
      type: UPDATE_USER,
      payload: res.data.user
    });
  } catch (err) {
    dispatch({
      type: POLL_ERROR
    });
  }
};

export const getPolls = () => async dispatch => {
  try {
    const res = await axios.get("/api/polls");
    dispatch({
      type: GET_POLLS,
      payload: res.data.reverse()
    });
  } catch (err) {
    dispatch({
      type: POLL_ERROR
    });
  }
};

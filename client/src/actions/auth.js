import axios from "axios";
import { GET_CURRENT_USER, UPDATE_USER, LOGOUT, AUTH_ERROR } from "./types";

export const fetchUser = () => async dispatch => {
  try {
    const res = await axios.get("auth/api/current_user");
    dispatch({
      type: GET_CURRENT_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

export const handleToken = token => async dispatch => {
  try {
    const res = await axios.post("payments/api/stripe", token);
    dispatch({
      type: UPDATE_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: "PAYMENT_ERROR" });
  }
};

export const logout = () => async dispatch => {
  try {
    await axios.get("auth/api/logout");
    dispatch({
      type: LOGOUT
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

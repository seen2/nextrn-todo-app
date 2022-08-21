import axios from "axios";

import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  USER_LOADING,
} from "./actionTypes";
import { returnErrors } from "./errorAction";

//check token and load user

export const loadUser = () => (dispatch, getState) => {
  //user Loading
  dispatch({ type: USER_LOADING });

  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then((res) => dispatch({ type: USER_LOADED, payload: res.data }))
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};
//Register user

export const registerUser =
  ({ name, email, password }) =>
  (dispatch) => {
    //Headers
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, password });
    axios
      .post("/api/users", body, config)
      .then((res) => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
      .catch((err) => {
        dispatch(
          returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
        );

        dispatch({ type: REGISTER_FAIL });
      });
  };

//Login user
export const loginUser = (email, password) => (dispatch) => {
  //Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });
  axios
    .post("/api/auth", body, config)
    .then((res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );

      dispatch({ type: LOGIN_FAIL });
    });
};

//logout user
export const logout = () => ({ type: LOGOUT_SUCCESS });

//setup config and load token

export const tokenConfig = (getState) => {
  //Get token from localStorage
  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //if token, then add to header
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};

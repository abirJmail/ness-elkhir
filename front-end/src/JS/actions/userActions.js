import axios from "axios";

import {
  GET_USER,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  USER_LOGIN,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_REGISTER,
  USER_REGISTER_FAILED,
  USER_REGISTER_SUCCESS,
  LOG_OUT,
} from "../constants/userActionTypes";

export const userRegister = (newUser) => async (dispatch) => {
  dispatch({ type: USER_REGISTER });

  try {
    const res = await axios.post("/user/register", newUser);

    console.log(res);

    dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);

    dispatch({ type: USER_REGISTER_FAILED, payload: error.response.data });
  }
};

export const userLogin = (loginCred) => async (dispatch) => {
  dispatch({ type: USER_LOGIN });

  try {
    const res = await axios.post("/user/login", loginCred);

    console.log(res.data);

    localStorage.setItem("token", res.data.token);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAILED, payload: error.response.data });
  }
};

export const getProfile = () => async (dispatch) => {
  dispatch({ type: GET_USER });

  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    const user = await axios.get("/user/currentPage", config);

    dispatch({ type: GET_USER_SUCCESS, payload: user.data });
  } catch (error) {
    dispatch({ type: GET_USER_FAILED, payload: error.response.data });
  }
};
export const logOut = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOG_OUT });
};
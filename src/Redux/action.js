import { authMeProcess, forgotProses, loginProses, registerProsesMasyarakat, registerProsesPetugas, resetProses } from "../API/auth";
import Cookies from "js-cookie";

export function authMe() {
  return async (dispatch) => {
    try {
      let response = await loginProses();
      let data = response.data;
      dispatch({
        type: "login",
        username: data?.data?.username,
        password: data?.data?.password,
        isAuth: true,
      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}

export function authLogin(payload) {
  return async (dispatch) => {
    try {
      let response = await loginProses(payload);
      let data = response.data;
      console.log(data);
      console.log(data.token)
      dispatch({
        type: "login",
        username: data?.user?.username,
        password: data?.user?.password,
        isAuth: true,
      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}

export function authRegisterMasyarakat(payload) {
  return async (dispatch) => {
    try {
      let response = await registerProsesMasyarakat(payload);
      let data = response.data;
      console.log(data);
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}

export function authRegisterPetugas(payload) {
  return async (dispatch) => {
    try {
      let response = await registerProsesPetugas(payload);
      let data = response.data;
      console.log(data);
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}

export function authForgot(payload) {
  return async (dispatch) => {
    try {
      let response = await forgotProses(payload);
      let data = response.data;
      console.log(data);
      dispatch({
        type: "login",
        email: data?.user?.email,
        // isAuth: true,
      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
} 

export function authReset(id, token, payload) {
  return async (dispatch) => {
    try {
      let response = await resetProses(id, token, payload);
      let data = response.data;
      console.log(data);
      dispatch({
        type: "login",
        email: data?.user?.email,
        isAuth: true,
      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}

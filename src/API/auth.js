import axios, { syncToken } from "./URL";

export function loginProses(payload) {
  return axios.post("/login", payload);
}

export function registerProsesMasyarakat(payload) {
  console.log(payload);
  return axios.post("/register/masyarakat", payload);
}

export function registerProsesPetugas(payload) {
  console.log(payload);
  payload.levelId = parseInt(payload.levelId)
  return axios.post("/register/petugas", payload);
}

export function resetProses(id, token, payload) {
  return axios.post(`/reset-password/${id}/${token}`, payload);
}

export function forgotProses(payload) {
  return axios.post("/lupa-password", payload);
}

export function authMeProcess() {
  syncToken();
  return axios.get("/authme");
}

import client from "./URL";
import axios from "./URL";

export function getListPetugas() {
    return axios.get("/list/petugas");
  console.log("API GET");
}

export default client;

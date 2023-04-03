import client from "./URL";
import axios from "./URL";

export function getListMasyarakat() {
    return axios.get("/list/masyarakat");
  console.log("API GET");
}

export default client;

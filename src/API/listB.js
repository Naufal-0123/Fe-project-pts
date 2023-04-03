import client from "./URL";
import axios from "./URL";

export function getListBarang() {
  return axios.get("/barang/list");
  console.log("API GET");
}

export async function createBarang(payload) {
  return axios.post(`/barang/create`, payload);
}

export async function deleteBarang(id) {
  return axios.delete(`/barang/delete/${id}`);
}

export default client;

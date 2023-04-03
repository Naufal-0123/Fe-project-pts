import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteBarang, getListBarang } from "../../../API/listB";
import * as dayjs from "dayjs";

export default function DashboardD() {
  const navigate = useNavigate();
  const [listBa, setListBa] = React.useState([]);
  const [isFetchB, setIsFetchB] = React.useState(false);
  const convertRupiah = require("rupiah-format");

  const getListBHandle = async () => {
    try {
      setIsFetchB(true);
      const response = await getListBarang();
      console.log("get barang =>", response);
      console.log("jalan lagi cuy");
      setListBa(response.data.data.rows);
      console.log("Jalan");
    } catch (err) {
      console.log(err);
    } finally {
      setIsFetchB(false);
    }
  };

  const getDeleteHandle = async (id) => {
    try {
      setIsFetchB(true);
      const response = await deleteBarang(id);
      console.log("response =>", response);
      console.log("jalan lagi cuy");
      setListBa(response.data.data);
      console.log("Jalan");
      getListBHandle();
    } catch (err) {
      console.log(err);
    } finally {
      setIsFetchB(false);
    }
  };

  console.log("listBa", listBa);
  React.useEffect(() => {
    getListBHandle();
    console.log("tes");
  }, []);

  return (
    <div>
      <h1 className="m-5 text-black text-[25px] text-left font-bold">Barang</h1>
      <div className="flex flex-row">
        <div className="w-[100%] bg-white m-5 rounded-lg">
          <div className="flex flex-row justify-between">
            <h1 className="m-5 text-black text-[25px] text-left font-bold">
              Data Barang
            </h1>
            <Link
              className="text-center text-white p-3 bg-orange-400 rounded-lg text-lg font-bold hover:text-bold-5 m-3"
              to={"/dashboard/addProduct"}
            >
              Add Barang
            </Link>
          </div>
          <table className="w-[100%] border-separate ">
            <thead>
              <tr>
                <th className="text-lg p-2 bg-orange-400 rounded-lg text-white">
                  No
                </th>
                <th className="text-lg p-2 bg-orange-400 rounded-lg text-white">
                  Nama Barang
                </th>
                <th className="text-lg p-2 bg-orange-400 rounded-lg text-white">
                  Deskripsi Barang
                </th>
                <th className="text-lg p-2 bg-orange-400 rounded-lg text-white">
                  Tanggal
                </th>
                <th className="text-lg p-2 bg-orange-400 rounded-lg text-white">
                  Harga Awal
                </th>
                <th className="text-lg p-2 bg-orange-400 rounded-lg text-white">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {isFetchB ? (
                <tr>
                  <td colSpan={9}>loading</td>
                </tr>
              ) : (
                listBa?.map((user, index) => {
                  return (
                    <tr key={index} className="text-left border pr-96 ">
                      <td className="text-left p-3 text-lg text-black">
                        {index + 1}
                      </td>
                      <td className="text-left p-3 text-lg text-black">
                        {user?.namaBarang}
                      </td>
                      <td className="text-left p-3 text-lg text-black">
                        {user?.deskBarang}
                      </td>
                      <td className="text-left text-black">
                        {dayjs(user?.tgl).format("DD MMM YYYY")}
                      </td>
                      <td className="text-left p-3 text-lg text-black">
                        {convertRupiah.convert(user?.hargaAwal)}
                      </td>
                      <td className="mb-5 items-center text-center text-[#E7F6F2]">
                        <div className="flex py-5 w-full justify-center space-x-3">
                          <button className="bg-orange-400 rounded-md  h-[50px] text-white w-[40%] mr-4 mt-1 mb-1">
                            Edit
                          </button>
                          <button
                            className="bg-orange-400 rounded-md  h-[50px] text-black w-[40%] mt-1 mb-1"
                            onClick={() => getDeleteHandle(user?.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

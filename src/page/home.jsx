import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { getListBarang } from "../API/listB";

export default function Home() {
  const username = useSelector((state) => state.authProses.username);
  const [isFetchB, setIsFetchB] = React.useState(false);
  const convertRupiah = require("rupiah-format");
  const [listBa, setListBa] = React.useState([]);

  const getListMHandle = async () => {
    try {
      setIsFetchB(true);
      const response = await getListBarang();
      console.log("response =>", response);
      console.log("jalan lagi cuy");
      setListBa(response.data.data.rows);
      console.log("Jalan");
    } catch (err) {
      console.log(err);
    } finally {
      setIsFetchB(false);
    }
  };

  console.log(listBa);
  React.useEffect(() => {
    getListMHandle();
    console.log("tes");
  }, []);

  return (
    <div className="bg-orange-400 h-screen w-screen flex flex-col">
      <div className="h-24 bg-white border border-white outline-none rounded-b-lg justify-center">
        <div className="flex flex-row justify-between">
          <div className=" flex flex-col">
            <h1 className="p-1 text-black text-[20px] text-left font-bold">
              {username}
            </h1>
            <h1 className="p-1 text-black text-[20px] text-left font-bold">
              ADMINISTRATOR
            </h1>
          </div>
          <div className="flex flex-col justify-end">
            <Link
              className="text-center text-white p-2 bg-orange-400 rounded-lg text-lg font-bold hover:text-bold-5 m-3"
              to={"/login"}
            >
              Log Out
            </Link>
          </div>
        </div>
        <div className="flex-row grid grid-cols-6 m-9 gap-2 ">
          {isFetchB ? (
            <tr>
              <td colSpan={9}>loading</td>
            </tr>
          ) : (
            listBa?.map((user, index) => {
              return (
                <div className="h-[230px] w-44 bg-white  rounded-lg">
                  <div className="h-28 w-44 bg-black rounded-lg"></div>
                  <div className="flex flex-col">
                    <h1 className=" text-black text-[15px] text-left p-1 mt-6 font-bold">
                      {user.namaBarang}
                    </h1>
                    <h1 className=" text-black text-[15px] text-left p-1 font-bold">
                      {user.deskBarang}
                    </h1>
                    <h1 className=" text-black text-[19px] text-left p-1 font-bold">
                    {convertRupiah.convert(user?.hargaAwal)}
                    </h1>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

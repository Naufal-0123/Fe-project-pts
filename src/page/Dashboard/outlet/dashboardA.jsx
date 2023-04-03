import React from "react";
import { getListMasyarakat } from "../../../API/listM";
import { getListPetugas } from "../../../API/listP";
import { getListBarang } from "../../../API/listB";

export default function DashboardA() {
  const [listMa, setListMa] = React.useState([]);
  const [isFetchM, setIsFetchM] = React.useState(false);
  const [listPa, setListPa] = React.useState([]);
  const [isFetchP, setIsFetchP] = React.useState(false);
  const [listBa, setListBa] = React.useState([]);
  const [isFetchB, setIsFetchB] = React.useState(false);

  const getListMHandle = async () => {
    try {
      setIsFetchM(true);
      const response = await getListMasyarakat();
      console.log("response =>", response);
      console.log("jalan lagi cuy");
      setListMa(response.data.data);
      console.log("Jalan");
    } catch (err) {
      console.log(err);
    } finally {
      setIsFetchM(false);
    }
  };

  const getListPHandle = async () => {
    try {
      setIsFetchP(true);
      const response = await getListPetugas();
      console.log("response =>", response);
      console.log("jalan lagi cuy");
      setListPa(response.data.data);
      console.log("Jalan");
    } catch (err) {
      console.log(err);
    } finally {
      setIsFetchP(false);
    }
  };

  const getListBHandle = async () => {
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

  console.log(listMa);
  React.useEffect(() => {
    getListMHandle();
    console.log("tes");
  }, []);

  console.log(listPa);
  React.useEffect(() => {
    getListPHandle();
    console.log("tes");
  }, []);

  console.log(listBa);
  React.useEffect(() => {
    getListBHandle();
    console.log("tes");
  }, []);

  return (
    <div className="">
      <h1 className="m-14 text-black text-[25px] text-left font-bold">
        Dashboard
      </h1>
      <div className="flex flex-row justify-evenly">
        <div className="h-36 w-72 bg-white m-10 rounded-lg">
          <h1 className="p-5 text-black text-[25px] text-center font-bold">
            {listMa.length}
          </h1>
          <h1 className=" text-black text-[25px] text-center font-bold">
            Masyarakat
          </h1>
        </div>
        <div className="h-36 w-72 bg-white m-10 rounded-lg">
          <h1 className="p-5 text-black text-[25px] text-center font-bold">
            {listPa.length}
          </h1>
          <h1 className=" text-black text-[25px] text-center font-bold">
            Petugas
          </h1>
        </div>
        <div className="h-36 w-72 bg-white m-10 rounded-lg">
          <h1 className="p-5 text-black text-[25px] text-center font-bold">
            {listBa.length}
          </h1>
          <h1 className=" text-black text-[25px] text-center font-bold">
            Barang
          </h1>
        </div>
      </div>
    </div>
  );
}

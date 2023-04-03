import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getListMasyarakat } from "../../../API/listM";

export default function DashboardB() {
  const navigate = useNavigate();
  const [isFetchM, setIsFetchM] = React.useState(false);
  const [listMa, setListMa] = React.useState([]);

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

  console.log(listMa);
  React.useEffect(() => {
    getListMHandle();
    console.log("tes");
  }, []);

  return (
    <div>
      <h1 className="m-5 text-black text-[25px] text-left font-bold">
        Masyarakat
      </h1>
      <div className="flex flex-row">
        <div className="w-[100%] h-[5%] bg-white m-5 rounded-lg ">
          <div className="flex flex-row justify-between">
            <h1 className="m-5 text-black text-[25px] text-left font-bold">
              Data Masyarakat
            </h1>
          </div>
          <table className="w-full border-separate h-[5%]">
            <thead>
              <tr>
                <th className="text-lg bg-orange-400 rounded-lg text-white">
                  No
                </th>
                <th className="text-lg bg-orange-400 rounded-lg text-white">
                  Nama Lengkap
                </th>
                <th className="text-lg bg-orange-400 rounded-lg text-white">
                  Telepon
                </th>
                <th className="text-lg bg-orange-400 rounded-lg text-white">
                  Username
                </th>
              </tr>
            </thead>
            <tbody>
             {isFetchM ? (
            <tr>
              <td colSpan={9}>loading</td>
            </tr> 
          ) : (
            listMa.map((user, index) => {
              return (
                <tr key={index} className="text-left border">
                  <td className="text-left p-3 text-lg text-black">{index + 1}</td>
                  <td className="text-left p-3 text-lg text-black">{user?.namaLengkap}</td>
                  <td className="text-left p-3 text-lg text-black">{user?.telp}</td>
                  <td className="text-left p-3 text-lg text-black">
                    {user?.username}
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

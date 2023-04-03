import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getListPetugas } from "../../../API/listP";

export default function DashboardC() {
  const navigate = useNavigate();
  const [listPa, setListPa] = React.useState([]);
  const [isFetchP, setIsFetchP] = React.useState(false);

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

  console.log(listPa);
  React.useEffect(() => {
    getListPHandle();
    console.log("tes");
  }, []);

  return (
    <div>
      <h1 className="m-5 text-black text-[25px] text-left font-bold">
        Petugas
      </h1>
      <div className="flex flex-row">
        <div className="w-[100%] h-[5%] bg-white m-5 rounded-lg">
          <div className="flex flex-row justify-between">
            <h1 className="m-5 text-black text-[25px] text-left font-bold">
              Data Petugas
            </h1>
            <Link
              className="text-center text-white p-3 bg-orange-400 rounded-lg text-lg font-bold hover:text-bold-5 m-3"
              to={"/dashboard/addOfficer"}
            >
              Add Officer
            </Link>
          </div>
          <table className="w-full border-separate h-[5%]">
            <thead>
              <tr>
                <th className="text-lg bg-orange-400 rounded-lg text-white">
                  No
                </th>
                <th className="text-lg bg-orange-400 rounded-lg text-white">
                  Nama Petugas
                </th>
                <th className="text-lg bg-orange-400 rounded-lg text-white">
                  Username
                </th>
                <th className="text-lg bg-orange-400 rounded-lg text-white">
                  Action
                </th>
                <div className="flex flex-row"></div>
              </tr>
            </thead>
            <tbody>
              {isFetchP ? (
                <tr>
                  <td colSpan={9}>loading</td>
                </tr>
              ) : (
                listPa.map((user, index) => {
                  return (
                    <tr key={index} className="text-left border pr-96 ">
                      <td className="text-left p-3 text-lg text-black">
                        {index + 1}
                      </td>
                      <td className="text-left p-3 text-lg text-black">
                        {user?.namaPetugas}
                      </td>
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

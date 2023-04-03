import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  const username = useSelector((state)=> state.authProses.username)

  return(  
    <div className="bg-orange-400 h-screen w-screen flex flex-col">
      <div className="h-24 bg-white border border-white outline-none rounded-br-lg justify-center">
        <div className="flex flex-row justify-between">
          <div className="justify-left">
            <h1 className="m-4 text-black text-[25px] text-right font-bold">
              ADMINISTRATOR
            </h1>
          </div>
          <div className="text-center">
            <h1 className="m-5 text-black text-[20px] text-right font-bold">
              {username}
            </h1>
          </div>
        </div>
      </div>
      <div className="h-full flex">
        <div className="w-[12%] h-full bg-white border border-white outline-none justify-center">
          <div className="flex flex-col justify-center mt-5">
            <Link
              className="text-center text-white p-2 bg-orange-400 rounded-lg text-lg font-bold hover:text-bold-5 m-3"
              to={"/dashboard/dashboard"}
            >
              Dashboard
            </Link>
            <Link
              className="text-center text-white p-2 bg-orange-400 rounded-lg text-lg font-bold hover:text-bold-5 m-3"
              to={"/dashboard/users"}
            >
              Masyarakat
            </Link>
            <Link
              className="text-center text-white p-2 bg-orange-400 rounded-lg text-lg font-bold hover:text-bold-5 m-3"
              to={"/dashboard/officer"}
            >
              Petugas
            </Link>
            <Link
              className="text-center text-white p-2 bg-orange-400 rounded-lg text-lg font-bold hover:text-bold-5 m-3"
              to={"/dashboard/product"}
            >
              Barang
            </Link>
           
          </div>
          <div className="flex flex-col justify-end mt-[90%]">
            <Link
              className="text-center text-white p-2 bg-orange-400 rounded-lg text-lg font-bold hover:text-bold-5 m-3"
              to={"/login"}
            >
              Log Out
            </Link>
          </div>
        </div>
        <div className="w-[80%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

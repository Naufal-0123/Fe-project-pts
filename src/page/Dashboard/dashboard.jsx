import React from "react";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="bg-zinc-900 h-screen w-screen flex flex-col">
      <div className="h-24 bg-pink-600 border border-fuchsia-900 outline-none rounded-br-2xl justify-center">
        <div className="flex flex-row justify-between">
          <div className="justify-left">
            <h1 className="m-5 text-pink-900 text-[25px] text-right font-bold">
              ADMINISTRATOR
            </h1>
          </div>
          <div className="text-center">
            <h1 className="m-5 text-pink-900 text-[20px] text-right font-bold">
              Naufal Dzakwan
            </h1>
          </div>
        </div>
      </div>
      <div className="h-full flex">
        <div className="w-[20%] h-full bg-pink-600 border border-fuchsia-900 outline-none justify-center">
          <div className="flex flex-col justify-center mt-5">
            <a
              className="text-center text-pink-600 p-2 bg-pink-900 rounded-lg text-lg font-bold hover:text-bold-5 m-3"
              href="/dashboard/dashboard"
            >
              Dashboard
            </a>
            <a
              className="text-center text-pink-600 p-2 bg-pink-900 rounded-lg text-lg font-bold hover:text-bold-5 m-3"
              href="/dashboard/users"
            >
              User
            </a>
            <a
              className="text-center text-pink-600 p-2 bg-pink-900 rounded-lg text-lg font-bold hover:text-bold-5 m-3"
              href="/dashboard/officer"
            >
              Officer
            </a>
            <a
              className="text-center text-pink-600 p-2 bg-pink-900 rounded-lg text-lg font-bold hover:text-bold-5 m-3"
              href="/dashboard/product"
            >
              Product
            </a>
            <a
              className="text-center text-pink-600 p-2 bg-pink-900 rounded-lg text-lg font-bold hover:text-bold-5 m-3"
              href="/dashboard/addProduct"
            >
              Add Product
            </a>
          </div>
          <div className="flex flex-col justify-end mt-56">
            <a
              className="text-center text-pink-600 p-2 bg-pink-900 rounded-lg text-lg font-bold hover:text-bold-5 m-3"
              href="/login"
            >
              Log Out
            </a>
          </div>
        </div>
        <div className="w-[80%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

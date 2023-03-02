import React from "react";

export default function DashboardA() {
  return (
    <div>
      <h1 className="m-16 text-pink-600 text-[25px] text-left font-bold">
        Dashboard
      </h1>
      <div className="flex flex-row justify-evenly">
        <div className="h-36 w-72 bg-pink-600 m-10 rounded-lg">
          <h1 className="p-5 text-pink-900 text-[25px] text-center font-bold">
            4
          </h1>
          <h1 className=" text-pink-900 text-[25px] text-center font-bold">
            Users
          </h1>
        </div>
        <div className="h-36 w-72 bg-pink-600 m-10 rounded-lg">
          <h1 className="p-5 text-pink-900 text-[25px] text-center font-bold">
            4
          </h1>
          <h1 className=" text-pink-900 text-[25px] text-center font-bold">
            Officer
          </h1>
        </div>
        <div className="h-36 w-72 bg-pink-600 m-10 rounded-lg">
          <h1 className="p-5 text-pink-900 text-[25px] text-center font-bold">
            4
          </h1>
          <h1 className=" text-pink-900 text-[25px] text-center font-bold">
            Product
          </h1>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Input from "../../component/input";

export default function DashboardE() {
  return (
    <div>
      <h1 className="m-16 text-pink-600 text-[25px] text-left font-bold">
        Add Product
      </h1>
      <div className="flex flex-row ">
        <div className="w-[90%] h-96 bg-pink-600 m-10 rounded-lg items-center">
           <h1 className="text-pink-900 text-[25px] text-center font-bold mt-5">
        Create Product
      </h1>
          <div className="flex flex-col justify-center items-center space-y-4 mt-[4%] ">
            <Input
              name={"name"}
              type={"text"}
              placeholder="Product Name"
            />
            <Input
              name={"name"}
              type={"text"}
              placeholder="Price Product"
            />
             <Input
              name={"name"}
              type={"text"}
              placeholder="Description"
            />
          </div>
          <div className="flex flex-col justify-center">
            <a
              className="text-center text-pink-600 p-2 bg-pink-900 rounded-lg text-lg font-bold hover:text-bold-5 m-3 mt-10"
              href=""
            >
              Create
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "../styles/styles.css";

export default function Register() {
  return (
    <div className="bg-zinc-900 h-screen w-screen flex flex-col">
      <div className="h-24 bg-[#E96479] border border-fuchsia-900 outline-none rounded-b-2xl justify-center">
        <h1 className="m-5 text-pink-900 text-[30px] text-center font-bold">
          LANG-ON
        </h1>
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="w-96 h-max bg-pink-600 border border-fuchsia-900 outline-none rounded-xl  justify-center">
          <h1 className="text-pink-900 text-[30px] text-center font-bold mt-5 mb-5">
            REGISTER WITH
          </h1>
          <div className="flex flex-row justify-center">
            <a
              className="text-pink-600 p-2 bg-pink-900 rounded-lg text-lg font-bold hover:text-bold-5 m-3"
              href="/registerA"
            >
              ADMIN
            </a>
            <a
              className="text-pink-600 p-2 bg-pink-900 rounded-lg text-lg font-bold hover:text-bold-5 m-3"
              href="/registerP"
            >
              PUBLIC
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

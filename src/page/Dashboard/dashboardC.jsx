import React from "react";

export default function DashboardC() {
  return (
    <div>
      <h1 className="m-16 text-pink-600 text-[25px] text-left font-bold">
        Officer
      </h1>
      <div className="flex flex-row">
        <div className="w-[90%] bg-pink-600 m-10 rounded-lg">
          <div className="flex flex-row justify-between">
            <h1 className="m-5 text-pink-900 text-[25px] text-left font-bold">
              Data Petugas
            </h1>
            <a
              className="text-pink-600 p-3 bg-pink-900 rounded-lg text-lg font-bold hover:text-bold-5 m-3"
              href=""
            >
              Add Officer
            </a>
          </div>
          <table className="w-full border-separate">
            <thead>
              <tr>
                <th className="text-lg p-2 bg-pink-900 rounded-lg text-pink-600">
                  No
                </th>
                <th className="text-lg p-2 bg-pink-900 rounded-lg text-pink-600">
                  Nama Petugas
                </th>
                <th className="text-lg p-2 bg-pink-900 rounded-lg text-pink-600">
                  Username
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center p-10 text-lg text-pink-900">1</td>
                <td className="text-center p-10 text-lg text-pink-900">
                  Naufal dzakwan
                </td>
                <td className="text-center p-10 text-lg text-pink-900">
                  08997753
                </td>
              </tr>
              <tr>
                <td className="text-center p-10 text-lg text-pink-900">2</td>
                <td className="text-center p-10 text-lg text-pink-900">
                  Ahmad saiful
                </td>
                <td className="text-center p-10 text-lg text-pink-900">
                  08664253
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

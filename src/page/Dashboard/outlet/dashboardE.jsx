import React from "react";
import Input from "../../../component/input";
import Button from "../../../component/button";
import { createBarang } from "../../../API/listB";
import { Link, useNavigate } from "react-router-dom";

export default function DashboardE() {
  let navigate = useNavigate();
  const [errorNamaBarang, setErrorNamaBarang] = React.useState("");
  const [errorDeskBarang, setErrorDeskBarang] = React.useState("");
  const [errorHargaAwal, setErrorHargaAwal] = React.useState("");
  const [payload, setPayload] = React.useState({
    namaBarang: "",
    hargaAwal: "",
    deskBarang: "",
  });

  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };

  const Swal = require("sweetalert2");
  const [isLoading, setIsLoading] = React.useState(false);
  let [messageError, setMessageError] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await createBarang(payload);
      console.log("response", response);
      if (response?.status === "Success") {
        navigate("/dashboard/officer", { replace: true });
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: response?.message,
        });
      } else {
        setMessageError(response?.response?.data?.msg);
        setErrorNamaBarang(response?.response?.data?.errors?.namaBarang.msg);
        setErrorDeskBarang(response?.response?.data?.errors?.deskBarang?.msg);
        setErrorHargaAwal(response?.response?.data?.errors?.hargaAwal?.msg);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: response?.response?.data?.error?.email,
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
    console.log("jalan cuy");
  };
  return (
    <div className="mt-11">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex justify-center items-center">
          <div className="w-96 bg-white outline-none rounded-xl justify-center">
            <h1 className="text-black text-[30px] text-center font-bold mt-1 mb-2">
              CREATE PRODUCT
            </h1>
            <div className="flex flex-col justify-center items-center space-y-2">
              <Input
                onChange={handleChange}
                value={payload.namaBarang}
                name={"namaBarang"}
                type={"text"}
                placeholder="Enter Product Name"
              />
              <p className="text-red-500 font-bold text-sm">
                {errorNamaBarang}
              </p>
              <Input
                onChange={handleChange}
                value={payload.deskBarang}
                name={"deskBarang"}
                type={"text"}
                placeholder="Enter Your Description Product"
              />
              <p className="text-red-500 font-bold text-sm">{errorDeskBarang}</p>
              <Input
                onChange={handleChange}
                value={payload.hargaAwal}
                name={"hargaAwal"}
                type={"text"}
                placeholder="Enter Your Price Product"
              />
              <p className="text-red-500 font-bold text-sm">{errorHargaAwal}</p>

              <div className="p-5">
                <Button title={isLoading ? "PROCESS" : "CREATE"} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

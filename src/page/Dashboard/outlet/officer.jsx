import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authRegisterPetugas } from "../../../Redux/action";
import Input from "../../../component/input";
import Button from "../../../component/button";
import Select from "../../../component/select";
import "../../../styles/styles.css";

export default function Officers() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [errornamaPetugas, setErrornamaPetugas] = React.useState("");
  const [errorUsername, setErrorUsername] = React.useState("");
  const [errorPassword, setErrorPassword] = React.useState("");
  const [payload, setPayload] = React.useState({
    namaPetugas: "",
    username: "",
    password: "",
    level: "",
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
      const response = await dispatch(authRegisterPetugas(payload));
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
        setErrornamaPetugas(response?.response?.data?.errors?.namaPetugas.msg);
        setErrorUsername(response?.response?.data?.errors?.username?.msg);
        setErrorPassword(response?.response?.data?.errors?.password?.msg);
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
              REGISTER ADMIN
            </h1>
            <div className="flex flex-col justify-center items-center space-y-2">
              <Input
                onChange={handleChange}
                value={payload.namaPetugas}
                name={"namaPetugas"}
                type={"text"}
                placeholder="Enter Officer Name"
              />
              <p className="text-red-500 font-bold text-sm">
                {errornamaPetugas}
              </p>
              <Input
                onChange={handleChange}
                value={payload.username}
                name={"username"}
                type={"text"}
                placeholder="Enter Your Name"
              />
              <p className="text-red-500 font-bold text-sm">{errorUsername}</p>
              <Input
                onChange={handleChange}
                value={payload.password}
                name={"password"}
                type={"password"}
                placeholder="Enter Your Password"
              />
              <p className="text-red-500 font-bold text-sm">{errorPassword}</p>
              <Select
                onChange={handleChange}
                id={"levelId"}
                name={"levelId"}
                value={payload.levelId}
                selectStyle={"ml-8"}
              >
                <option value="">Pilih Role Anda</option>
                <option value="1">Administrator</option>
                <option value="2">Petugas</option>
              </Select>
             <div className="p-5">
             <Button title={isLoading ? "PROCESS" : "REGISTER"} />
             </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
// Validate Username

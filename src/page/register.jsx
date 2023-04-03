import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authRegisterMasyarakat } from "../Redux/action";
import Input from "../component/input";
import Button from "../component/button";
import "../styles/styles.css";

export default function Register() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [errornamaLengkap, setErrornamaLengkap] = React.useState("");
  const [errorUsername, setErrorUsername] = React.useState("");
  const [errorPassword, setErrorPassword] = React.useState("");
  const [errorTelp, setErrorTelp] = React.useState("");
  const [payload, setPayload] = React.useState({
    namaLengkap: "",
    username: "",
    telp: "",
    password: "",
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
      const response = await dispatch(authRegisterMasyarakat(payload));
      console.log("response", response);
      if (response?.status === "Success") {
        navigate("/login", { replace: true });
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
        setMessageError(response?.response?.data?.errors?.msg);
        setErrornamaLengkap(response?.response?.data?.errors?.namaLengkap.msg);
        setErrorUsername(response?.response?.data?.errors?.username?.msg);
        setErrorPassword(response?.response?.data?.errors?.password?.msg);
        setErrorTelp(response?.response?.data?.errors?.telp?.msg);
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
          title: response?.message,
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
    <div className="bg-orange-400 h-screen w-screen h-screen flex flex-col">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="h-24 bg-white border border-white outline-none rounded-b-lg justify-center">
          <h1 className="m-5 text-[#2E0249] text-[30px] text-center font-bold">
            LANG-ON
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-96 bg-white outline-none rounded-xl  justify-center">
            <h1 className="text-black text-[30px] text-center font-bold mt-1 mb-2">
              REGISTER PUBLIC
            </h1>
            <div className="flex flex-col justify-center items-center space-y-2">
              <Input
                onChange={handleChange}
                value={payload.namaLengkap}
                name={"namaLengkap"}
                type={"text"}
                placeholder="Enter Full Name"
              />
              <p className="text-red-500 font-bold text-sm">{errornamaLengkap}</p>
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
              <Input
                onChange={handleChange}
                value={payload.telp}
                name={"telp"}
                type={"number"}
                placeholder="Enter Your Phone Number"
              />
              <p className="text-red-500 font-bold text-sm">{errorTelp}</p>
              <Button title={isLoading ? "PROCESS" : "REGISTER"} />
            </div>
            <div className="flex flex-row justify-center">
              <p className="text-orange-500 text-lg font-bold m-5">
                Have an account ?
              </p>
              <Link
                className="text-black text-lg font-bold hover:text-bold-5 m-5"
                to={"/login"}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

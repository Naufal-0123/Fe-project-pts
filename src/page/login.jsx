import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authLogin } from "../Redux/action";
import Input from "../component/input";
import Button from "../component/button";
import "../styles/styles.css";

export default function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorUsername, setErrorUsername] = React.useState("");
  const [errorPassword, setErrorPassword] = React.useState("");
  const [payload, setPayload] = React.useState({
    username: "",
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
      const response = await dispatch(authLogin(payload));
      console.log("response", response);
      if (response?.status === "Success") {
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
          title: response?.msg,
        });

        if (response?.user?.levelId === undefined) {
          return navigate("/home", { replace: true });
        } else {
          return navigate("/dashboard/dashboard", { replace: true });
        }
      } else {
        setMessageError(response?.response?.data?.msg);
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
    <div className="bg-orange-400 h-screen w-screen flex flex-col">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="h-24 bg-white border border-white outline-none rounded-b-lg justify-center">
          <h1 className="m-5 text-black text-[30px] text-center font-bold">
            LANG-ON
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-96 bg-white outline-none rounded-xl  justify-center">
            <h1 className="text-black text-[30px] text-center font-bold mt-10 mb-10">
              LOGIN
            </h1>
            <div className="flex flex-col justify-center items-center space-y-5">
              <Input
                onChange={handleChange}
                value={payload.username}
                name={"username"}
                type={"text"}
                placeholder="Enter Your Username"
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

              <Button title={isLoading ? "PROCESS" : "LOGIN"} />
            </div>
            <div className="flex flex-row justify-center">
              <p className="text-orange-500 text-lg font-bold m-3">
                Dont have an account ?
              </p>
              <Link
                className="text-black text-lg font-bold hover:text-bold-5 m-3"
                to={"/register"}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

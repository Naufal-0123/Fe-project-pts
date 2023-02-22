import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authLogin } from "../Redux/action";
import Input from "../component/input";
import Button from "../component/button";
import "../styles/styles.css";

export default function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorEmail, setErrorEmail] = React.useState("");
  const [errorPassword, setErrorPassword] = React.useState("");
  const [payload, setPayload] = React.useState({
    email: "",
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
        navigate("/Dashboard", { replace: true });
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
      } else {
        setErrorEmail(response?.response?.data?.msg);
        setErrorPassword(response?.response?.data?.msg);
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
          title: response?.response?.data?.msg,
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
    <div className="bg-zinc-900 h-screen w-screen flex flex-col">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="h-24 bg-[#E96479] border border-fuchsia-900 outline-none rounded-b-2xl ">
          <h1 className="m-5 text-pink-900 text-[30px] text-center font-bold">
            LANG-ON
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-96 bg-pink-600 border border-fuchsia-900 outline-none rounded-xl  justify-center">
            <h1 className="text-pink-900 text-[30px] text-center font-bold mt-10 mb-10">
              LOGIN
            </h1>
            <div className="flex flex-col justify-center items-center space-y-5">
              <Input
                onChange={handleChange}
                value={payload.email}
                name={"email"}
                type={"email"}
                placeholder="Enter Your Email"
              />
              <p className="text-pink-600 font-bold">{errorEmail}</p>
              <Input
                onChange={handleChange}
                value={payload.password}
                name={"password"}
                type={"password"}
                placeholder="Enter Your Password"
              />
              <p className="text-pink-600 font-bold">{errorPassword}</p>

              <Button title={isLoading ? "PROCESS" : "LOGIN"} />
            </div>
            <div className="flex flex-row justify-center">
              <p className="text-pink-800 text-lg font-bold m-3">
                Dont have an account ?
              </p>
              <a
                className="text-pink-900 text-lg font-bold hover:text-bold-5 m-3"
                href="/register"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

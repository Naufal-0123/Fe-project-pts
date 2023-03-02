import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authRegister } from "../Redux/action";
import Input from "../component/input";
import Button from "../component/button";
import "../styles/styles.css";

export default function RegisterPublic() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorName, setErrorName] = React.useState("");
  const [errorPassword, setErrorPassword] = React.useState("");
  const [errorConfirmPass, setErrorConfirmPass] = React.useState("");
  const [payload, setPayload] = React.useState({
    name: "",
    email: "",
    password: "",
    confimPass: "",
    status: "",
    jenisKelamin: "",
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
      const response = await dispatch(authRegister(payload));
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
          title: response?.msg,
        });
      } else {
        setMessageError(response?.response?.data?.msg);
        setErrorName(response?.response?.data?.errors?.name?.msg);
        setErrorPassword(response?.response?.data?.errors?.password?.msg);
        setErrorConfirmPass(response?.response?.data?.errors?.confimPass?.msg);
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
    <div className="bg-zinc-900 h-screen w-screen flex flex-col">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="h-24 bg-[#E96479] border border-fuchsia-900 outline-none rounded-b-2xl justify-center">
          <h1 className="m-5 text-pink-900 text-[30px] text-center font-bold">
            LANG-ON
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-96 bg-pink-600 border border-fuchsia-900 outline-none rounded-xl  justify-center">
            <h1 className="text-pink-900 text-[30px] text-center font-bold mt-5 mb-5">
              REGISTER PUBLIC
            </h1>
            <div className="flex flex-col justify-center items-center space-y-4">
              <Input
                onChange={handleChange}
                value={payload.name}
                name={"name"}
                type={"text"}
                placeholder="Enter Full Name"
              />
              <p className="text-pink-600 font-bold">{errorName}</p>
              <Input
                onChange={handleChange}
                value={payload.name}
                name={"name"}
                type={"text"}
                placeholder="Enter Your Name"
              />
              <p className="text-pink-600 font-bold">{errorName}</p>
              <Input
                onChange={handleChange}
                value={payload.password}
                name={"password"}
                type={"password"}
                placeholder="Enter Your Password"
              />
              <p className="text-pink-600 font-bold">{errorPassword}</p>
              <Input
                onChange={handleChange}
                value={payload.password}
                name={"password"}
                type={"password"}
                placeholder="Confirm Your Password"
              />
              <p className="text-pink-600 font-bold">{errorPassword}</p>
              <Input
                onChange={handleChange}
                value={payload.password_confirmation}
                name={"password_confirmation"}
                type={"password"}
                placeholder="Enter Number Phone"
              />
              <p className="text-pink-600 font-bold">{errorConfirmPass}</p>
              <Button title={isLoading ? "PROCESS" : "REGISTER"} />
            </div>
            <div className="flex flex-row justify-center">
              <p className="text-pink-800 text-lg font-bold m-5">
                Have an account ?
              </p>
              <a
                className="text-pink-900 text-lg font-bold hover:text-bold-5 m-5"
                href="/login"
              >
                Login
              </a>
              <a
              className="text-pink-600 p-2 bg-pink-900 rounded-lg text-lg font-bold hover:text-bold-5 m-3"
              href="/register"
            >
              BACK
            </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

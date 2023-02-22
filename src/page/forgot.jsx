// import React from "react";
// import { useDispatch } from "react-redux";
// import { authForgot } from "../Redux/action";
// import { useNavigate } from "react-router-dom";
// import Input from "../component/input";
// import Button from "../component/button";

// export default function Forgot() {
//   let navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [errorEmail, setErrorEmail] = React.useState("");

//   const [payload, setPayload] = React.useState({
//     email: "",
//   });

//   const handleChange = (e) => {
//     setPayload((payload) => {
//       return {
//         ...payload,
//         [e.target.name]: e.target.value,
//       };
//     });
//   };

//   const [isLoading, setIsLoading] = React.useState(false);
//   let [messageError, setMessageError] = React.useState("");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("tes");
//     try {
//       const response = await dispatch(authForgot(payload));
//       console.log("response", response);
//       if (response?.status === "Success") {
//         return navigate("*", { replace: true });
//       } else {
//         setMessageError(response?.response?.data?.msg);
//       }
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setIsLoading(false);
//     }
//     console.log("jalan cuy");
//   };
//   return (
//     <div className="bg-zinc-900 h-screen w-screen flex flex-col">
//       <form className="space-y-5" onSubmit={handleSubmit}>
//       <div className="h-24 bg-pink-600 border border-fuchsia-900 outline-none rounded-b-2xl justify-center">
//           <h1 className="text-pink-900 text-[30px] text-center font-bold">
//             LANG-ON
//           </h1>
//         </div>
//         <h1 className="mt-32 text-pink-600 text-[30px] text-center font-bold">
//           FORGOT PASSWORD
//         </h1>
//         <div className="flex flex-col justify-center items-center space-y-5">
//         <Input
//             required
//             onChange={handleChange}
//             value={payload.email}
//             name={"email"}
//             type={"email"}
//             placeholder="Enter Your Email"
//           />
//           <p className="text-pink-600 font-bold">{messageError}</p>
//           <Button title={isLoading ? "PROCESS" : "VERIFY"} />
//         </div>
//       </form>
//     </div>
//   );
// }

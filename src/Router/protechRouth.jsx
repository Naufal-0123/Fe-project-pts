import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authMe } from "../Redux/action";
import { syncToken } from "../API/URL";

export default function ProtechRouth({ children }) {
  const auth = Cookies.get("myapps_token");
  const isAuth = useSelector((state) => state?.authProses?.isAuth);

  console.log("auth=>", auth);
  let [process, setProcess] = React.useState(true);
  let dispatch = useDispatch();
  const onLoaded = async (values) => {
    let result = await dispatch(authMe(values));
    syncToken();
    setProcess(false);
    console.log("res", result);
  };
  React.useEffect(() => {
    if (!isAuth) {
      if (auth !== undefined) {
        onLoaded();
      } else {
        setProcess(false);
      }
    } else {
      syncToken();
      setProcess(false);
    }
  }, []);
  if (process) {
    return <div>Loading</div>;
  } else {
    console.log("auth", auth);
    // return auth !== undefined ? children : <Navigate to={"/login"} />;
  }
}
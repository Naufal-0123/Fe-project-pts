import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ProtechRouth from "./Router/protechRouth";
import Login from "./Page/login";
import Register from "./Page/register";
import RegisterAdmin from "./Page/regisAdmin";
import RegisterPublic from "./Page/regisPublic";
import Dashboard from "./Page/Dashboard/dashboard";
import DashboardA from "./Page/Dashboard/dashboardA";
import DashboardB from "./Page/Dashboard/dashboardB";
import DashboardC from "./Page/Dashboard/dashboardC";
import DashboardD from "./Page/Dashboard/dashboardD";
import DashboardE from "./Page/Dashboard/dashboardE";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerA" element={<RegisterAdmin />} />
        <Route path="/registerP" element={<RegisterPublic />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/dashboard" element={<DashboardA/>}/>
          <Route path="/dashboard/users" element={<DashboardB/>}/>
          <Route path="/dashboard/officer" element={<DashboardC/>}/>
          <Route path="/dashboard/product" element={<DashboardD/>}/>
          <Route path="/dashboard/addProduct" element={<DashboardE/>}/>
        </Route>
        <Route path="*" element={<Navigate to={"/login"} replace={true} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

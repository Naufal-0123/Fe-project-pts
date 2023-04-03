import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ProtechRouth from "./Router/protechRouth";
import Home from "./Page/home";
import Login from "./Page/login";
import Register from "./Page/register";
import Dashboard from "./Page/Dashboard/dashboard";
import DashboardA from "./Page/Dashboard/outlet/dashboardA";
import DashboardB from "./Page/Dashboard/outlet/dashboardB";
import DashboardC from "./Page/Dashboard/outlet/dashboardC";
import DashboardD from "./Page/Dashboard/outlet/dashboardD";
import DashboardE from "./Page/Dashboard/outlet/dashboardE";
import Officers from "./Page/Dashboard/outlet/officer";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/dashboard" element={<DashboardA/>}/>
          <Route path="/dashboard/users" element={<DashboardB/>}/>
          <Route path="/dashboard/officer" element={<DashboardC/>}/>
          <Route path="/dashboard/product" element={<DashboardD/>}/>
          <Route path="/dashboard/addProduct" element={<DashboardE/>}/>
          <Route path="/dashboard/addOfficer" element={<Officers/>}/>
        </Route>
        <Route path="*" element={<Navigate to={"/login"} replace={true} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

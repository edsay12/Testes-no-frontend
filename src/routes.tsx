import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import SignUp from "./SignUp/SignUp";

export default function MainRouters() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
  );
}

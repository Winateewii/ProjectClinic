import React from "react";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Botton from "./components/ผู้ป่วย/Botton";
import Bottonsearch from "./components/ผู้ป่วย/Bottonsearch";
import Index from "./components/หน้าหลัก/Index";
import Appointment from "./components/การนัดหมาย/Apm";
function App() {
  return (
    <div>
      <Sidebar />
      <Appointment />
    </div>
  );
}

export default App;

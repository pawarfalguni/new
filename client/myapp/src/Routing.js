import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentData from "./student/StudentData";
import AddStudent from "./student/AddStudent";
import StudentOperation from "./student/StudentOperation";
import EditStudent from "./student/EditStudent";
import HrLogin from "./student/HrLogin";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HrLogin />} />
        <Route path="/employedata" element={<StudentData />} />
        <Route path="/addemploye" element={<AddStudent />} />
        <Route path="/employeoperation" element={<StudentOperation />} />
        <Route path="/editemploye/:id" element={<EditStudent />} />
      </Routes>
    </div>
  );
};

export default Routing;

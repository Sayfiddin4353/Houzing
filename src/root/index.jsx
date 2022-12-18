import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navbar } from "../utils/navbar";

const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        {navbar.map(({ id, path, element }) => {
          return <Route key={id} path={path} element={element} />;
        })}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<h1>Not Found Page</h1>} />
      </Route>
    </Routes>
  );
};

export default Root;

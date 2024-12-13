// App.js
import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import "./index.css";
import AuthLayout from "./layouts/auth";

const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
    </Routes>
  );
};

export default App;

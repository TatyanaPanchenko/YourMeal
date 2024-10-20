import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import {
  RegistrationPage,
  AuthorizationPage,
  MenuPage,
  ErrorPage,
} from "../pages";
import style from "./app.module.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "./app.module.scss";

function App() {
  const [auth, setAuth] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!auth) {
  //     navigate("/authorization");
  //   }
  // }, []);

  return (
    <div className={style.app}>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<MenuPage />}></Route>
        <Route
          path="/authorization"
          element={<AuthorizationPage setShowHeader={setShowHeader} />}
        ></Route>
        <Route
          path="/registration"
          element={<RegistrationPage setShowHeader={setShowHeader} />}
        ></Route>
        <Route
          path="*"
          element={<ErrorPage setShowHeader={setShowHeader} />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

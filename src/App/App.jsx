import { useState } from "react";
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
  const [showHeader, setShowHeader] = useState(true);
  return (
    <div className={style.app}>
      {showHeader && <Header />}

      <Routes>
        <Route
          path="/"
          element={<AuthorizationPage setShowHeader={setShowHeader} />}
        ></Route>
        <Route
          path="/registration"
          element={<RegistrationPage setShowHeader={setShowHeader} />}
        ></Route>
        <Route path="/home" element={<MenuPage />}></Route>
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

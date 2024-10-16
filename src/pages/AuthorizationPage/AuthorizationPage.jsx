import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Autorization from "../../components/Autorization/Autorization";
import style from "./authorizationPage.module.scss";

export default function AuthorizationPage({ setShowHeader }) {
  useEffect(() => {
    setShowHeader(false);
    return () => setShowHeader(true);
  }, []);
  return (
    <div className={style.autorization}>
      <Autorization />
      <Link to="/registration" className="link">
        Регистрация
      </Link>
    </div>
  );
}

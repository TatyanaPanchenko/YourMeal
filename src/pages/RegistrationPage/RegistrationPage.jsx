import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Registration from "../../components/Registration/Registration";
import style from "./registrationPage.module.scss";

export default function RegistrationPage({ setShowHeader }) {
  useEffect(() => {
    setShowHeader(false);
    return () => setShowHeader(true);
  }, []);
  return (
    <div className={style.registration}>
      <Registration />
      <Link to="/" className="link">
        Авторизация
      </Link>
    </div>
  );
}

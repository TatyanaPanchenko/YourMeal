import React from "react";
// import style from "./menuPage.module.scss";
import Firstscreen from "../../components/Firstscreen/Firstscreen";
import Nav from "../../components/Nav/Nav";
import Main from "../../components/Main/Main";
import nav from "../../data/nav.json";

export default function menuPage() {
  return (
    <>
      <Firstscreen />
      <Nav nav={nav} />
      <Main />
    </>
  );
}

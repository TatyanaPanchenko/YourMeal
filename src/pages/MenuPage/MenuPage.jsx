import React from "react";
import Firstscreen from "../../components/Firstscreen/Firstscreen";
import Nav from "../../components/Nav/Nav";
import Main from "../../components/Main/Main";
import nav from "../../data/nav.json";

export default function MenuPage() {
  return (
    <>
      <Firstscreen />
      <Nav nav={nav} />
      <Main />
    </>
  );
}

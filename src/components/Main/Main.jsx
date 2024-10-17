import { useState, useEffect } from "react";
import MealMenu from "../MealMenu/MealMenu";
import Cart from "../Cart/Cart";
import cart from "../../data/cart.json";
import style from "./main.module.scss";

export default function Main() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);

  const content = "http://localhost:5173/db.json";
  async function getServerData() {
    try {
      const responce = await fetch(content);
      const arr = await responce.json();
      setData([...data, arr]);
      if (data.length > 0) {
        setStatus(true);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (!status) {
      getServerData();
    }
  });
  return (
    <section className={style.main}>
      <div className={style["main-container"]}>
        <div className={style["main-wrapper"]}>
          {status ? (
            <>
              <Cart cart={cart} />
              <MealMenu data={data} />
            </>
          ) : (
            <div className={style.loading}>Loading...</div>
          )}
        </div>
      </div>
    </section>
  );
}

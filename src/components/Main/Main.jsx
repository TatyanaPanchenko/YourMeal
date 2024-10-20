import { useState, useEffect } from "react";
import MealMenu from "../MealMenu/MealMenu";
import Cart from "../Cart/Cart";
import style from "./main.module.scss";
import DB from "../../services/DB";

export default function Main() {
  const [products, setProducts] = useState({ data: [], status: false });
  const [cartItems, setCartItems] = useState({ data: [], status: false });
  const [status, setStatus] = useState(false);
  const upload = { status, setStatus };
  useEffect(() => {
    const productsServer = DB.getAllProducts();
    const cartServer = DB.getAllCartItem();
    Promise.allSettled([productsServer, cartServer]).then((results) => {
      if (results[0].status === "fulfilled") {
        setProducts({ data: results[0].value, status: true });
      }
      if (results[1].status === "fulfilled") {
        setCartItems({ data: results[1].value, status: true });
      }
    });
  }, [status]);

  if (!cartItems.status || !products.status) {
    return <div className={style.loading}>Loading...</div>;
  }
  return (
    <section className={style.main}>
      <div className={style["main-container"]}>
        <div className={style["main-wrapper"]}>
          <>
            <Cart cartItems={cartItems.data} />
            <MealMenu products={products.data} upload={upload} />
          </>
        </div>
      </div>
    </section>
  );
}

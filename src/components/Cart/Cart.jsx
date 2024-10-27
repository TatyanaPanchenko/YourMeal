import { useState } from "react";
import CartWrapper from "../CartWrapper/CartWrapper";
import style from "./cart.module.scss";

export default function Cart({ cartElements, upload, product_name }) {
  const [styleDelivery, setStyleDelivery] = useState("cart-none");
  const delivery = { styleDelivery, setStyleDelivery };

  if (cartElements.length === 0) {
    return (
      <div className={style.cart}>
        <div className={style["cart-wrapper"]}>
          <div className={style["cart-top"]}>
            <div className={style["cart-title"]}>Корзина</div>
            <div className={style["cart-totalCount"]}>
              <span>0</span>
            </div>
          </div>
          <div className={style["cart-empty"]}>Тут пока пусто :(</div>
        </div>
      </div>
    );
  }
  return (
    <CartWrapper
      delivery={delivery}
      upload={upload}
      cartElements={cartElements}
      product_name={product_name}
    />
  );
}

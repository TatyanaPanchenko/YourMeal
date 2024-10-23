import { useState } from "react";
import { useEffect } from "react";
import CartItem from "../CartItem/CartItem";
import style from "./cart.module.scss";
import { getItemsCount } from "../../common/cartHandler";

export default function Cart({ cartElements, upload }) {
  if (cartElements.length === 0) {
    return (
      <div className={style.cart}>
        <div className={style["cart-wrapper"]}>
          <div className={style["cart-top"]}>
            <div className={style["cart-title"]}>Корзина</div>
          </div>
          <div className={style["cart-empty"]}>Корзина пуста</div>
        </div>
      </div>
    );
  }
  return (
    <div className={style.cart}>
      <div className={style["cart-wrapper"]}>
        <div className={style["cart-top"]}>
          <div className={style["cart-title"]}>Корзина</div>
          <div className={style["cart-totalCount"]}>
            <span>{getItemsCount(cartElements)}</span>
          </div>
        </div>
        <div className={style["cart-inner"]}>
          <div className={style["cart-items"]}>
            {cartElements.map((item, index) => {
              return <CartItem key={index} item={item} upload={upload} />;
            })}
          </div>
        </div>
        <div className={style["cart-bottom"]}>
          <div className={style["cart-total"]}>
            <span>Итого</span>
            <div className={style["cart-totalPrice"]}>
              {getItemsCount(cartElements, true)}₽
            </div>
          </div>

          <button className={style["cart-order"]}>Оформить заказ</button>
          <div className={style["cart-delivery"]}> Бесплатная доставка</div>
        </div>
      </div>
    </div>
  );
}

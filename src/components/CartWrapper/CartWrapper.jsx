import style from "./cartWrapper.module.scss";
import React from "react";
import { getItemsCount } from "../../common/cartHandler";
import CartItem from "../CartItem/CartItem";

export default function CartWrapper({ upload, cartElements, delivery }) {
  return (
    <div className={style.cart}>
      <div className={style["cart-wrapper"]}>
        <div className={style["cart-top"]}>
          <div className={style["cart-title"]}>Корзина</div>
          <div className={style["cart-totalCount"]}>
            <span>{getItemsCount(cartElements, upload, delivery)}</span>
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
              {getItemsCount(cartElements, upload, delivery, true)}₽
            </div>
          </div>
          <button className={style["cart-order"]}>Оформить заказ</button>
          <div className={`${style[`${delivery.styleDelivery}`]}`}>
            Бесплатная доставка
          </div>
        </div>
      </div>
    </div>
  );
}

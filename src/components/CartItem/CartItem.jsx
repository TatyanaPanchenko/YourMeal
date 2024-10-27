import React from "react";
import style from "./cartItem.module.scss";
import { changeCountCartItem } from "../../common/cartHandler";

export default function CartItem({ upload, item, product_name, index }) {
  const { name, weight, price, count } = item;
  return (
    <div className={style["cart-item"]}>
      <div className={style["item-about"]}>
        <div className={style["item-img"]}>
          <img
            src={`products/${product_name}/${product_name}_${index}.png`}
            alt={name}
          />
        </div>
        <div className={style["item-description"]}>
          <div className={style["item-name"]}>{name}</div>
          <div className={style["item-weight"]}>{weight}</div>
          <div className={style["item-price"]}>{price}₽</div>
        </div>
      </div>
      <div className={style["item-counter"]}>
        <button
          onClick={() => changeCountCartItem(false, item, upload)}
          className={style.decrease}
        >
          -
        </button>
        <div className={style.quantity}>{count}</div>
        <button
          onClick={() => changeCountCartItem(true, item, upload)}
          className={style.increase}
        >
          +
        </button>
      </div>
    </div>
  );
}

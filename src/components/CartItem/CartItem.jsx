import React from "react";
import DB from "../../services/DB";
import style from "./cartItem.module.scss";

export default function CartItem({ item, setChange }) {
  function changeCount(sign) {
    let count = item.count;
    if (sign === "+") {
      DB.updateProductCartItem(item.id, { count: count++ }).then(() => {});
      setChange((prev) => !prev);
    } else if (sign === "-") {
      DB.updateProductCartItem(item.id, { count: count-- }).then(() => {});
      setChange((prev) => !prev);
    }
  }

  return (
    <div className={style["cart-item"]}>
      <div className={style["item-about"]}>
        <div className={style["item-img"]}>
          <img src={item.img} alt="cart-image" />
        </div>
        <div className={style["item-description"]}>
          <div className={style["item-name"]}>{item.name}</div>
          <div className={style["item-weight"]}>{item.weight}</div>
          <div className={style["item-price"]}>{item.price}₽</div>
        </div>
      </div>
      <div className={style["item-counter"]}>
        <button onClick={() => changeCount("-")} className={style.decrease}>
          -
        </button>
        <div className={style.quantity}>{item.count}</div>
        <button onClick={() => changeCount("+")} className={style.increase}>
          +
        </button>
      </div>
    </div>
  );
}

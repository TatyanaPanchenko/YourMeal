import React from "react";
import DB from "../../services/DB";
import style from "./cartItem.module.scss";

export default function CartItem({ item, setChange }) {
  console.log(item.id);
  function changeCount(sign) {
    if (sign === "+") {
      DB.updateProductCartItem(item.id, { count: 2 }).then(() => {});
      setChange((prev) => !prev);
    } else if (sign === "-") {
      DB.setProductCartItem(item).then(() => {
        item.count--;
      });
      setChange(true);
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

import React from "react";
import style from "./productItem.module.scss";

export default function ProductItem({ item, addItemCart }) {
  return (
    <div className={style["meal-menu-item"]}>
      <div className={style["meal-menu-img"]}>
        <img src={item.img} alt={item.name} />
      </div>
      <div className={style["meal-menu-price"]}>{item.price}₽</div>
      <div className={style["meal-menu-name"]}>{item.name}</div>
      <div className={style["meal-menu-weight"]}>{item.weight}</div>
      <button
        onClick={() => addItemCart(item)}
        className={style["meal-menu-btn"]}
      >
        Добавить
      </button>
    </div>
  );
}

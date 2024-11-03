import React from "react";
import style from "./productItem.module.scss";
import { addItemCart } from "../../common/cartHandler";
export default function ProductItem({
  item,
  index,
  upload,
  cartElements,
  activeTab,
}) {
  const imgUrl = `products/${activeTab.product_name}/${activeTab.product_name}_${index}.png`;
  return (
    <div className={style["meal-menu-item"]} key={index}>
      <div className={style["meal-menu-img"]}>
        <img src={imgUrl} alt={item.name} />
      </div>
      <div className={style["meal-menu-price"]}>{item.price}₽</div>
      <div className={style["meal-menu-name"]}>{item.name}</div>
      <div className={style["meal-menu-weight"]}>{item.weight}</div>
      <button
        onClick={() => addItemCart(item, cartElements, upload, imgUrl)}
        className={style["meal-menu-btn"]}
      >
        Добавить
      </button>
    </div>
  );
}

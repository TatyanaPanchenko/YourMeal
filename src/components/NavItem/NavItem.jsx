import style from "./navItem.module.scss";
import React from "react";

export default function NavItem(props) {
  const { item, activeTab, setActiveTab } = props;
  const activeItem =
    activeTab.product_name === item["product_name"] ? style["active"] : "";
  return (
    <div
      className={`${style["nav-item"]} ${activeItem}`}
      onClick={() => setActiveTab(item)}
    >
      <div className={style["nav-img"]}>
        <img src={item.img} alt={item.name} />
      </div>
      <div className={style["item-name"]}>{item.name}</div>
    </div>
  );
}

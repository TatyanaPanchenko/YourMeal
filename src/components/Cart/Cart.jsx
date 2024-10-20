import { useState } from "react";
import { useEffect } from "react";
import CartItem from "../CartItem/CartItem";
import style from "./cart.module.scss";

export default function Cart({ cartItems }) {
  const [change, setChange] = useState(false);
  const [total, setTotal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  function getTotalCount() {
    return cartItems.reduce((acc, element) => acc + Number(element.count), 0);
  }
  function getTotalCountPrice() {
    return cartItems.reduce((acc, element) => acc + Number(element.price), 0);
  }

  useEffect(() => {
    setTotal(getTotalCount());
    setTotalPrice(getTotalCountPrice());
    setChange(true);
  });

  if (cartItems.length === 0) {
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
            <span>{total}</span>
          </div>
        </div>
        <div className={style["cart-inner"]}>
          <div className={style["cart-items"]}>
            {cartItems.map((item, index) => {
              return <CartItem item={item} key={index} setChange={setChange} />;
            })}
          </div>
        </div>
        <div className={style["cart-bottom"]}>
          <div className={style["cart-total"]}>
            <span>Итого</span>
            <div className={style["cart-totalPrice"]}>{totalPrice}₽</div>
          </div>

          <button className={style["cart-order"]}>Оформить заказ</button>
          <div className={style["cart-delivery"]}> Бесплатная доставка</div>
        </div>
      </div>
    </div>
  );
}

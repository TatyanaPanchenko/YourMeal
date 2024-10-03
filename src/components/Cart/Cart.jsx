import { useState } from "react";
import style from "./cart.module.scss";
import createUniqueID from "../../createUniqueID";

export default function cart(props) {
  const arrCart = props.cart;
  const totalCount = props.cart.reduce((acc, el) => acc + Number(el.count), 0);
  const [count, setCount] = useState(arrCart);
  const [total, setTotal] = useState(totalCount);

  function changeCount(index, sign) {
    const newCount = [...count];
    newCount.map((item) => {
      if (item.id == index) {
        if (sign === "-") {
          if (item.count > 1) {
            item.count = Number(item.count) - 1;
          } else if (item.count == 1) {
            const newCountRemove = newCount.filter((el) => el.id != index);
            setCount(newCountRemove);
          }
        } else if (sign === "+") {
          item.count = Number(item.count) + 1;
        } else {
          return;
        }
      }
    });
    const newTotalCount = newCount.reduce(
      (acc, el) => acc + Number(el.count),
      0
    );
    setTotal(newTotalCount);
  }
  console.log(count);
  const getTotalPrice = (arr) => {
    const total = arr.reduce((acc, el) => {
      console.log(el.count);
      console.log(el.price);
      return acc + Number(el.price) * Number(el.count);
    }, 0);
    return total;
  };

  console.log(getTotalPrice(count));
  if (count.length > 0) {
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
              {count.map((item) => {
                return (
                  <div className={style["cart-item"]} key={createUniqueID()}>
                    <div className={style["item-about"]}>
                      <div className={style["item-img"]}>
                        <img src={item.img} alt="cart-image" />
                      </div>
                      <div className={style["item-description"]}>
                        <div className={style["item-name"]}>{item.name}</div>
                        <div className={style["item-weight"]}>
                          {item.weight}
                        </div>
                        <div className={style["item-price"]}>{item.price}₽</div>
                      </div>
                    </div>
                    <div className={style["item-counter"]}>
                      <button
                        onClick={() => changeCount(item.id, "-")}
                        className={style.decrease}
                      >
                        -
                      </button>
                      <div className={style.quantity}>{item.count}</div>
                      <button
                        onClick={() => changeCount(item.id, "+")}
                        className={style.increase}
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={style["cart-bottom"]}>
            <div className={style["cart-total"]}>
              <span>Итого</span>
              <div className={style["cart-totalPrice"]}>
                {getTotalPrice(count)}₽
              </div>
            </div>

            <button className={style["cart-order"]}>Оформить заказ</button>
          </div>
        </div>
      </div>
    );
  } else {
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
}

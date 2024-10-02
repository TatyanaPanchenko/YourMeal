import { useState } from "react";
import style from "./cart.module.scss";
import createUniqueID from "../../createUniqueID";

export default function cart(props) {
  const totalCount = props.cart.reduce((acc, el) => acc + Number(el.count), 0);
  const [count, setCount] = useState([props.cart]);
  const [total, setTotal] = useState(totalCount);

  function changeCount(index, sign) {
    const newCount = [...count];
    newCount[0].map((item) => {
      if (item.count > 0 && item.id == index) {
        if (sign === "-") {
          item.count = Number(item.count) - 1;
        } else if (sign === "+") {
          item.count = Number(item.count) + 1;
        } else {
          return;
        }
      }
    });
    const newTotalCount = newCount[0].reduce(
      (acc, el) => acc + Number(el.count),
      0
    );
    setCount(newCount);
    setTotal(newTotalCount);
  }

  // function increaseCount(index) {
  //   const newCount = [...count];
  //   newCount[index] = newCount[index] + 1;
  //   const countSum = newCount.reduce((acc, el) => acc + el, 0);
  //   setCount(newCount);

  // }
  // const getTotalPrice = (count, data) => {
  //   const newArr = [];
  //   count.forEach((itemCount, indexCount) => {
  //     data.forEach((itemPrice, indexPrice) => {
  //       if (indexCount == indexPrice) {
  //         const sum = itemCount * Number(itemPrice.price);
  //         newArr.push(sum);
  //       }
  //     });
  //   });
  //   return newArr.reduce((acc, item) => acc + item);
  // };
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
            {props.cart.map((item) => {
              return (
                <div className={style["cart-item"]} key={createUniqueID()}>
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
              {/* {getTotalPrice(count, props.data)}₽ */}
            </div>
          </div>

          <button className={style["cart-order"]}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}

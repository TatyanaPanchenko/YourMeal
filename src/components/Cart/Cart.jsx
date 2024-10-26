import CartItem from "../CartItem/CartItem";
import style from "./cart.module.scss";
import { getItemsCount } from "../../common/cartHandler";

export default function Cart({ cartElements, upload }) {
  let styleDelivery = "cart-none";

  const allTotalCount = getItemsCount(cartElements);
  const allTotalPrice = getItemsCount(cartElements, true);
  if (allTotalCount > 3 || allTotalPrice > 1000) {
    styleDelivery = "cart-delivery";
  }
  if (cartElements.length === 0) {
    return (
      <div className={style.cart}>
        <div className={style["cart-wrapper"]}>
          <div className={style["cart-top"]}>
            <div className={style["cart-title"]}>Корзина</div>
            <div className={style["cart-totalCount"]}>
              <span>0</span>
            </div>
          </div>
          <div className={style["cart-empty"]}>Тут пока пусто :(</div>
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
            <span>{getItemsCount(cartElements, styleDelivery)}</span>
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
              {getItemsCount(cartElements, styleDelivery, true)}₽
            </div>
          </div>

          <button className={style["cart-order"]}>Оформить заказ</button>
          <div className={`${style[`${styleDelivery}`]}`}>
            Бесплатная доставка
          </div>
        </div>
      </div>
    </div>
  );
}

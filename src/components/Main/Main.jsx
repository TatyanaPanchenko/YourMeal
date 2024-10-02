import MealMenu from "../MealMenu/MealMenu";
import Cart from "../Cart/Cart";
import cart from "../../data/cart.json";
import burgers from "../../data/burgers.json";
import style from "./main.module.scss";

export default function Main() {
  return (
    <section className={style.main}>
      <div className={style["main-container"]}>
        <div className={style["main-wrapper"]}>
          <Cart cart={cart} />
          <MealMenu burgers={burgers} />
        </div>
      </div>
    </section>
  );
}

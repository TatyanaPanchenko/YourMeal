import style from "./mealMenu.module.scss";
import ProductItem from "../ProductItem/ProductItem";

export default function MealMenu({ products, upload, cartElements }) {
  return (
    <div className={style["meal-menu"]}>
      <div className={style["meal-menu-title"]}>Бургеры</div>
      <div className={style["meal-menu-wrapper"]}>
        {products.map((item, index) => {
          return (
            <ProductItem
              item={item}
              key={index}
              upload={upload}
              cartElements={cartElements}
            />
          );
        })}
      </div>
    </div>
  );
}

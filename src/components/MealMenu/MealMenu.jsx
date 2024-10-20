import style from "./mealMenu.module.scss";
import ProductItem from "../ProductItem/ProductItem";
import DB from "../../services/DB";
export default function MealMenu({ products, upload }) {
  function addItemCart(item) {
    item.count = 1;
    DB.setProductCartItem(item).then(() => {
      upload.setStatus((prev) => !prev);
    });
  }
  return (
    <div className={style["meal-menu"]}>
      <div className={style["meal-menu-title"]}>Бургеры</div>
      <div className={style["meal-menu-wrapper"]}>
        {products.map((item, index) => {
          return (
            <ProductItem item={item} key={index} addItemCart={addItemCart} />
          );
        })}
      </div>
    </div>
  );
}

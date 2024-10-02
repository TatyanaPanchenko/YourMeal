import style from "./mealMenu.module.scss";
export default function MealMenu(props) {
  return (
    <div className={style["meal-menu"]}>
      <div className={style["meal-menu-title"]}>Бургеры</div>
      <div className={style["meal-menu-wrapper"]}>
        {props.burgers.map((item, index) => {
          return (
            <div className={style["meal-menu-item"]} key={index}>
              <div className={style["meal-menu-img"]}>
                <img src={item.img} alt={item.name} />
              </div>
              <div className={style["meal-menu-price"]}>{item.price}₽</div>
              <div className={style["meal-menu-name"]}>{item.name}</div>
              <div className={style["meal-menu-weight"]}>{item.weight}</div>
              <button className={style["meal-menu-btn"]}>Добавить</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

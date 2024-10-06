import style from "./nav.module.scss";

export default function Nav(props) {
  return (
    <nav className={style.nav}>
      <div className={style["nav-container"]}>
        <div className={style["nav-items"]}>
          {props.nav.map((item, index) => {
            return (
              <div className={style["nav-item"]} key={index}>
                <div className={style["nav-img"]}>
                  <img src={item.img} alt={item.name} />
                </div>
                <div className={style["item-name"]}>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

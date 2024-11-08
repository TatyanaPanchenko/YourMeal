import style from "./modalWindow.module.scss";
import React from "react";
import { changeCountCartItem } from "../../common/cartHandler";
import { addItemCart } from "../../common/cartHandler";

export default function ModalWindow({
  item,
  imgUrl,
  upload,
  cartElements,
  setModalStatus,
}) {
  const { name, weight, price, description, colorie, ingredients, count } =
    item;
  function getUpdateCount() {
    let updateCount;

    if (cartElements.length === 0) {
      updateCount = 0;
    }
    updateCount = cartElements.map((el) => {
      if (el.id === item.id) {
        return el.count;
      }
    });
    console.log(updateCount);
    return updateCount;
  }
  return (
    <div>
      <div
        className={style.modal}
        onClick={() => {
          setModalStatus(false);
        }}
      >
        <div
          className={style["modal-container"]}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={style["modal-close"]}
            onClick={() => {
              setModalStatus(false);
            }}
          ></div>
          <div className={style["modal-title"]}>{name}</div>
          <div className={style["modal-inner"]}>
            <div className={style["modal-img"]}>
              <img src={imgUrl} alt={name} />
            </div>

            <div className={style["modal-about"]}>
              <div className={style["modal-description"]}>{description}</div>
              <div className={style["modal-caption-ingredients"]}>Состав:</div>
              <div className={style["modal-ingredients"]}>
                {ingredients
                  ? ingredients.map((el, index) => {
                      return <div key={index}>{el}</div>;
                    })
                  : null}
              </div>
              <div className={style["modal-info"]}>
                {weight}, {colorie}
              </div>
            </div>
          </div>
          <div className={style["modal-bottom"]}>
            <button
              className={style["modal-btn"]}
              onClick={() => addItemCart(item, cartElements, upload, imgUrl)}
            >
              Добавить
            </button>
            <div className={style["modal-total"]}>
              <div className={style["modal-counter"]}>
                <button
                  onClick={() => {
                    cartElements.map((el, index) => {
                      if (el.id === item.id) {
                        changeCountCartItem(false, el, upload, index);
                      }
                    });
                  }}
                >
                  -
                </button>
                {cartElements.length === 0 ? (
                  <div> 0</div>
                ) : (
                  <div>
                    {cartElements.map((el) => {
                      if (el.id === item.id) {
                        return el.count;
                      }
                    })}
                  </div>
                )}

                <button
                  onClick={() => {
                    if (cartElements.length === 0) {
                      addItemCart(item, cartElements, upload, imgUrl);
                    }
                    cartElements.map((el, index) => {
                      if (el.id === item.id) {
                        changeCountCartItem(true, el, upload, index);
                      }
                    });
                  }}
                >
                  +
                </button>
              </div>
              <div className={style["modal-price"]}>{price} ₽</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

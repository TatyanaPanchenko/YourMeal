import style from "./modalDelivery.module.scss";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function modalDelivery({ setModalDeliveryStatus }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div
        className={style.modal}
        onClick={() => {
          setModalDeliveryStatus(false);
        }}
      >
        <div
          className={style["modal-container"]}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={style["modal-close"]}
            onClick={() => {
              setModalDeliveryStatus(false);
            }}
          ></div>
          <div className={style["modal-title"]}>Доставка</div>
          <div className={style["modal-inner"]}>
            <form
              className={style["delivery-form"]}
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                placeholder="Ваше имя"
                {...register("firstName", {
                  required: "Необходимо заполнить данное поле",
                  maxLength: 30,
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Поле содержит недопустимые символы",
                  },
                })}
              />
              {errors.firstName && (
                <p className={style.errorField}>{errors.firstName?.message}</p>
              )}
              <input
                placeholder="Телефон"
                type="number"
                {...register("phone", {
                  required: "Необходимо заполнить данное поле",
                  maxLength: 30,
                })}
              />
              {errors.phone && (
                <p className={style.errorField}>{errors.phone?.message}</p>
              )}
              <div className={style["modal-radio"]}>
                <div className={style["modal-radio-item"]}>
                  <label>
                    <input
                      {...register("delivery", { required: true })}
                      type="radio"
                      value="self"
                    />
                    Самовывоз
                  </label>
                </div>

                <div className={style["modal-radio-item"]}>
                  <label>
                    <input
                      {...register("delivery", { required: true })}
                      type="radio"
                      value="carrier"
                      checked
                    />
                    Доставка
                  </label>
                </div>
              </div>
              {}
              <input
                placeholder="Улица, дом, квартира"
                type="text"
                {...register("address", {
                  required: "Необходимо заполнить данное поле",
                  maxLength: 60,
                })}
              />
              {errors.address && (
                <p className={style.errorField}>{errors.address?.message}</p>
              )}

              <div className={style["modal-inputs"]}>
                <input
                  placeholder="Этаж"
                  type="number"
                  {...register("floor", {
                    maxLength: 2,
                  })}
                />

                <input
                  placeholder="Домофон"
                  type="text"
                  {...register("intercom", {
                    maxLength: 10,
                  })}
                />
              </div>
              <input type="submit" value="Оформить" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import style from "./registration.module.scss";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Checkbox } from "antd";
import Autorization from "../Autorization/Autorization";

export default function Registration() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      checkbox: false,
    },
  });

  const onSubmit = (data) => {
    reset();

    console.log(data);
  };

  return (
    <div className={style["registration-wrapper"]}>
      <div className={style["registration-title"]}>Регистрация</div>
      <form
        className={style["registration-form"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={style["registration-inner"]}>
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
            placeholder="E-mail"
            {...register("mail", {
              required: "Необходимо заполнить данное поле",
              pattern: {
                value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                message: "Поле содержит недопустимые символы",
              },
            })}
          />
          {errors.mail && (
            <p className={style.errorField}>{errors.mail?.message}</p>
          )}
          <input
            placeholder="Пароль"
            type="password"
            {...register("password", {
              required: "Необходимо заполнить данное поле",
              minLength: {
                value: 6,
                message: "Поле должно содержать не менее 6 символов",
              },
            })}
          />
          {errors.password && (
            <p className={style.errorField}>{errors.password?.message}</p>
          )}
          <input
            placeholder="Подтверждение пароля"
            type="password"
            {...register("confirmPassword", {
              required: "Необходимо заполнить данное поле",
              minLength: {
                value: 6,
                message: "Поле должно содержать не менее 6 символов",
              },
              validate: (val) => {
                if (watch("password") != val) {
                  return (
                    <p className={style.errorField}>"Пароли не совпадают"</p>
                  );
                }
              },
            })}
          />
          {errors.password && (
            <p className={style.errorField}>{errors.password?.message}</p>
          )}
        </div>
        <label>
          <Controller
            name="checkbox"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Checkbox {...field} />}
          />
          Согласие на обработку персональных данных
          {errors.checkbox && (
            <p className={style.errorField}>Необходимо отметить данное поле</p>
          )}
        </label>
        <label>
          <Controller
            name="checkbox"
            control={control}
            rules={{ required: "false" }}
            render={({ field }) => <Checkbox {...field} />}
          />
          Согласие на получение акционных предложений
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

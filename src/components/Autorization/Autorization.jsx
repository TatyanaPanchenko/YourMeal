import style from "./autorization.module.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Autorization() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      checkbox: false,
    },
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (data) {
      navigate("/");
    }
  };

  return (
    <div className={style.autorization}>
      <div className={style["autorization-wrapper"]}>
        <div className={style["autorization-title"]}>Авторизация</div>
        <form
          className={style["autorization-form"]}
          onSubmit={handleSubmit(onSubmit)}
        >
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

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

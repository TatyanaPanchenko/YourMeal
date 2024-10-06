import style from "./registration.module.scss";
import { useForm, Controller } from "react-hook-form";
import { TextField, Checkbox } from "@material-ui/core";

export default function Registration() {
  const {
    register,
    formState: { errors },
  } = useForm();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      checkbox: false,
    },
  });

  const onSubmit = (data) => console.log(data);
  return (
    <div className={style.registration}>
      <div className={style["registration-wrapper"]}>
        <div className={style["registration-title"]}>Регистрация</div>
        <form
          className={style["registration-form"]}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Ваше имя"
            {...register("firstName", { required: true, maxLength: 20 })}
            aria-invalid={errors.firstName ? "true" : "false"}
          />
          {errors.firstName?.type === "required" && (
            <p role="alert">First name is required</p>
          )}
          <input
            placeholder="Ваша фамилия"
            {...register("lastName", {
              required: true,
              maxLength: 30,
              pattern: /^[A-Za-z]+$/i,
            })}
            aria-invalid={errors.lastName ? "true" : "false"}
          />
          {errors.lastName?.type === "required" && (
            <p role="alert">Last name is required</p>
          )}
          <input
            placeholder="E-mail"
            {...register("mail", { required: "Email Address is required" })}
            aria-invalid={errors.mail ? "true" : "false"}
          />
          {errors.mail && <p role="alert">{errors.mail.message}</p>}
          <input
            placeholder="Ваш возраст"
            type="number"
            {...register("age", {
              min: 18,
              max: 99,
              required: "Age is required",
            })}
            aria-invalid={errors.age ? "true" : "false"}
          />
          {errors.age && <p role="alert">{errors.age.message}</p>}
          <label>
            <Controller
              name="checkbox"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Checkbox {...field} />}
            />
            Согласие на обработку персональных данных
          </label>
          <label>
            <Controller
              name="checkbox"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Checkbox {...field} />}
            />
            Согласие на получение акционных предложений
          </label>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

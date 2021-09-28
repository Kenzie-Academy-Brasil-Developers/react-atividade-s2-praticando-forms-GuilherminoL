import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";
import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({});
  const formValidator = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),

    email: yup.string().required("Campo obrigatório").email("Email inválido"),

    confirmEmail: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("email"), null], "Emails diferentes"),

    password: yup.string().required("Campo obrigatório"),

    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password"), null], "Senhas diferentes"),

    tel: yup.string().required("Campo obrigatório"),

    terms: yup
      .boolean()
      .required()
      .oneOf([true], "Você deve aceitar os termos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formValidator),
  });

  const onSubmit = (data) => {
    setUser(data);
  };

  return (
    <>
      <h1 className="formTitle">Entre para a Kenzie !!</h1>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="formLine">
          <label className="formLineItem">
            <input
              className="input"
              type="text"
              {...register("name")}
              placeholder="Nome Completo"
            />
            <p className="inputError">{errors.name?.message}</p>
          </label>
          <label className="formLineItem">
            <input
              className="input"
              type="tel"
              {...register("tel")}
              placeholder="Insira seu telefone"
            />
            <p className="inputError">{errors.tel?.message}</p>
          </label>
        </div>

        <div className="formLine">
          <label className="formLineItem">
            <input
              className="input"
              type="text"
              {...register("email")}
              placeholder="Insira seu email"
            />
            <p className="inputError">{errors.email?.message}</p>
          </label>
          <label className="formLineItem">
            <input
              className="input"
              type="text"
              {...register("confirmEmail")}
              placeholder="Confirme seu email"
            />
            <p className="inputError">{errors.confirmEmail?.message}</p>
          </label>
        </div>
        <div className="formLine">
          <label className="formLineItem">
            <input
              className="input"
              type="password"
              {...register("password")}
              placeholder="Insira sua senha"
            />
            <p className="inputError">{errors.password?.message}</p>
          </label>
          <label className="formLineItem">
            <input
              className="input"
              type="password"
              {...register("confirmPassword")}
              placeholder="Confirme sua senha"
            />
            <p className="inputError">{errors.confirmPassword?.message} </p>
          </label>
        </div>
        <div className="formLine">
          {" "}
          <label className="formLineItem">
            <div>
              <input
                className="inputCheckbox"
                type="checkbox"
                {...register("terms")}
              />{" "}
              <p className="termsText">
                {" "}
                Não li mas concordo com os termos de uso{" "}
              </p>
            </div>

            <p className="inputError">{errors.terms?.message}</p>
          </label>
          <button className="submitButton" type="submit">
            Entrar para Kenzie
          </button>
        </div>
      </form>
      <section>
        {user.name && <h3>Nome: {user.name}</h3>}
        {user.email && <h3>Email: {user.email}</h3>}
        {user.confirmEmail && (
          <h3>Confirmação de Email: {user.confirmEmail}</h3>
        )}
        {user.password && <h3>Senha: {user.password}</h3>}
        {user.confirmPassword && (
          <h3>Confirmação da Senha: {user.confirmPassword}</h3>
        )}
        {user.tel && <h3>Telefone: {user.tel}</h3>}
      </section>
    </>
  );
};
export default Form;

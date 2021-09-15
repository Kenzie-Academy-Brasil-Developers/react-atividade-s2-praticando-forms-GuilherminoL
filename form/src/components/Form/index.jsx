import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  return (
    <>
      <h1>Entre para a Kenzie !!</h1>
      <form>
        <input type="text" placeholder="Nome Completo" />
        <input type="email" placeholder="Insira seu email" />
        <input type="email" placeholder="Confirme seu email" />
        <input type="password" placeholder="Insira sua senha" />
        <input type="password" placeholder="Confirme sua senha" />
        <input type="tel" placeholder="Insira" />

        <label htmlFor="">
          <input type="checkbox" /> Não li mas concordo com os termos de uso
        </label>
        <button type="submit">Entrar para Kenzie !</button>
      </form>
    </>
  );
};
export default Form;

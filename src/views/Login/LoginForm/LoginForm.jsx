import "./LoginForm.scss";
import Input from "../../../components/Input/index";
import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../useFetch";
const LoginForm = () => {
  const { data, loading, error, makeRequest } = useFetch("login");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleOnClick = async (event) => {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    makeRequest({ data, method: "POST" });
    console.log(data);
  };
  return (
    <form className="LoginForm" onSubmit={handleOnClick}>
      <Input
        name="email"
        type="email"
        placeholder="Correo"
        onChange={handleOnChangeEmail}
      />
      <Input
        name="password"
        type="password"
        placeholder="Contraseña"
        onChange={handleOnChangePassword}
      />
      <Link to="/dashboard">
        <input
          type="submit"
          value="Iniciar sesión"
          className="LoginForm__submit"
        />
      </Link>
    </form>
  );
};

export default LoginForm;

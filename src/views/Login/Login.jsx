import "./Login.scss";
import LoginForm from "./LoginForm/LoginForm";
const Login = () => {
  return (
    <div className="Login">
      <div className="Login__img">
        <img
          src="https://www.pngarts.com/files/3/Alien-PNG-Transparent-Image.png"
          alt="logo area51"
        />
      </div>
      <div className="Login__form">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

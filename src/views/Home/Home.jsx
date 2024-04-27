import "./Home.scss";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
const Home = () => {
  return (
    <div className="Home">
      <div className="Home__title">
        <Title Title="Bienvenid@" />
      </div>
      <div className="Home__button">
        <Link to="/login">
          <button>Iniciar sesión</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

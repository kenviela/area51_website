import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../../useFetch";
import "./Inventory.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import Menu from "../../components/Menu/Index";
import Title from "../../components/Title/Title";
import NewMenu from "../../components/NewMenu";
import Table from "../../components/Table/index";
const products = ["Sillas", "Mesas", "Sonido", "Carpas", "Decoraciones"];
const Inventory = () => {
  const [filterData, setFilterData] = useState([]);
  const {
    data: products,
    error: errorGettingProducts,
    loading: loadingProducts,
    makeRequest: makeRequestProducts,
  } = useFetch("/products/new", []);
  console.log("productos", products);
  const navigate = useNavigate();

  const handleFilter = (partString) => {
    const coincidences = [];

    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const nameProduct = product.name.toLowerCase();

      if (nameProduct.includes(partString.toLowerCase())) {
        coincidences.push(product);
      }
    }

    return setFilterData(coincidences);
  };
  useEffect(() => {
    makeRequestProducts();
  }, []);
  return (
    <div className="Inventory">
      <div className="Inventory__menu">
        <NewMenu />
      </div>
      <div>
        <Title Title="Buscar producto" />
      </div>
      <div className="Inventory__product">
        <SearchBar handleFilter={handleFilter} />
      </div>
      <div className="Inventory__Table">
        {filterData.length > 0 ? (
          <Table filterData={filterData} />
        ) : (
          <div className="Inventory__button">
            <Link to="/new">
              <button className="Inventory__button__add">Agregar</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;

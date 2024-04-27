import { useState, useEffect } from "react";
import useFetch from "../../useFetch";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu/Index";
import "./Dashboard.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import NewMenu from "../../components/NewMenu";
import TableWithPopup from "../../components/TableWithPopup";
import Table from "../../components/Table";
import QuotationList from "../../components/QuotationList";
const Dashboard = () => {
  const [filterData, setFilterData] = useState([]);
  const {
    data: products,
    error: errorGettingProducts,
    loading: loadingProducts,
    makeRequest: makeRequestProducts,
  } = useFetch("/products/new", []);
  console.log("productos", products);
  const navigate = useNavigate();

  const { data, makeRequest } = useFetch("/dashboard", []);
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

  const handleProductAdded = (productData) => {
    console.log("producto agregado en dashboard", productData);
    const data = {
      productId: productData.productId,
      quantity: productData.quantity,
      totalPrice: productData.totalPrice,
    };
    console.log("data", data);
    makeRequest({ data, method: "POST" });
  };

  return (
    <div>
      <NewMenu />
      <SearchBar handleFilter={handleFilter} />
      <div className="Dashboard__table">
        <TableWithPopup
          filterData={filterData}
          onProductAdded={handleProductAdded}
        />
      </div>
      <QuotationList />
    </div>
  );
};

export default Dashboard;

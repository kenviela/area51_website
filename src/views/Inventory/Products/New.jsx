import { useState, useEffect } from "react";
import Category from "../../../components/Category";
import Input from "../../../components/Input";
import "./Products.scss";
import Menu from "../../../components/Menu/Index";
import useFetch from "../../../useFetch";
import { useNavigate } from "react-router-dom";
import NewMenu from "../../../components/NewMenu";
import Title from "../../../components/Title/Title";

const Swal = require("sweetalert2");
const FormProduct = () => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [unitPrice, setUnitePrice] = useState(0);
  const { data, error, loading, makeRequest } = useFetch("/products/new");
  const handleOnChangeCategory = (category) => setCategory(category);
  const handleOnChangeName = (event) => setName(event.target.value);
  const handleOnChangeAmount = (event) => setAmount(event.target.value);
  const handleOnChangeUnitPrice = (event) => setUnitePrice(event.target.value);
  const {
    data: categories,
    error: errorGettingCategories,
    loading: loadingCategories,
    makeRequest: makeRequestCategories,
  } = useFetch("/categories", []);
  console.log("categorias", categories);
  const navigate = useNavigate();
  useEffect(() => {
    if (data) {
      Swal.fire({
        title: "Genial",
        text: "se a guardado toda la información!",
        button: "ok",
      });
      setName("");
      setAmount(0);
      setCategory("");
      setUnitePrice(0);
      navigate("/inventory");
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "algo salio mal, intenta mas tarde",
      });
      console.log(error.message);
    }
  }, [error]);

  useEffect(() => {
    makeRequestCategories();
  }, []);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const data = {
      category,
      name,
      amount,
      unitPrice,
    };
    makeRequest({ data, method: "POST" });
    console.log(data);
  };

  return (
    <form className="FormProduct" onSubmit={handleOnSubmit}>
      <Input
        label="Nombre del producto"
        name="name"
        type="text"
        placeholder="Nombre del producto"
        onChange={handleOnChangeName}
        value={name}
      />
      <Input
        label="Cantidad"
        name="amount"
        type="number"
        placeholder="Cantidad"
        onChange={handleOnChangeAmount}
        value={amount}
      />
      <div className="FormProduct__category">
        <Category
          label="Selecciona una categoria"
          name="category"
          handleOnChangeCategory={handleOnChangeCategory}
          categories={categories}
        />
      </div>
      <Input
        label="Precio unitario"
        name="unitPrice"
        type="number"
        placeholder="Precio Unitario"
        onChange={handleOnChangeUnitPrice}
        value={unitPrice}
      />
      <input type="submit" value="Agregar" className="FormProduct__button" />
    </form>
  );
};

const New = () => {
  return (
    <div className="New">
      <NewMenu />
      <Title Title="Agregar elemento" />
      <FormProduct />
    </div>
  );
};

export default New;

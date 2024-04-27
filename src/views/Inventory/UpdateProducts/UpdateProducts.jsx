import Input from "../../../components/Input";
import Title from "../../../components/Title/Title";
import NewMenu from "../../../components/NewMenu";
import useFetch from "../../../useFetch";
import "./UpdateProducts.scss";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Swal = require("sweetalert2");

const FormUpdateProducts = (props) => {
  const [newProductQuantity, setNewProductQuantity] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const { data, error, loading, makeRequest } = useFetch(
    `/products/new/${props.productId}/${props.operation}`
  );
  const { makeRequest: updateQuantityProduct } = useFetch(
    `/products/new/${props.productId}`
  );
  const handleOnChangeQuantity = (event) =>
    setInputValue(Number(event.target.value));

  const navigate = useNavigate();

  useEffect(() => {
    updateQuantityProduct({ method: "POST" });
  }, []);
  useEffect(() => {
    if (data) {
      Swal.fire({
        title: "Genial",
        text: "se a guardado toda la información!",
        button: "ok",
      });
      setNewProductQuantity(0);
      setInputValue(0);
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

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const data = {
      newProductQuantity: inputValue,
      operation: props.operation,
      productId: props.productId,
    };
    console.log("URL de la solicitud:");
    makeRequest({ data, method: "POST" });
    console.log("data", data);
  };
  return (
    <form className="FormUpdateProducts" onSubmit={handleOnSubmit}>
      <Input
        label="Nueva cantidad"
        name="newProductQuantity"
        type="number"
        placeholder="Nueva Cantidad"
        className="FormUpdateProducts__input"
        onChange={handleOnChangeQuantity}
        value={inputValue}
      />
      <input
        type="submit"
        value="Actualizar"
        className="FormUpdateProducts__submit"
      />
    </form>
  );
};
const UpdateProducts = () => {
  const { productId, operation } = useParams();
  console.log("id", productId, operation);
  return (
    <div className="UpdateProducts">
      <div className="UpdateProducts__menu">
        <NewMenu />
      </div>
      <div className="UpdateProducts__title">
        <Title Title="Actualizar cantidad del producto" />
      </div>
      <div className="UpdateProducts__form">
        <FormUpdateProducts productId={productId} operation={operation} />
      </div>
    </div>
  );
};

export default UpdateProducts;

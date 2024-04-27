import { useEffect, useState } from "react";
import Input from "../../components/Input";
import Menu from "../../components/Menu/Index";
import "./Appointment.scss";
import useFetch from "../../useFetch";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import NewMenu from "../../components/NewMenu";
const Swal = require("sweetalert2");
const FormAppointment = () => {
  const { data, loading, error, makeRequest } = useFetch("/appointment");
  const [name, setName] = useState("");
  const [idClient, setIdClient] = useState(0);
  const [address, setAddress] = useState("");
  const [deposit, setDeposit] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (data) {
      Swal.fire({
        title: "Genial",
        text: "se a guardado toda la información!",
        button: "ok",
      });
      setName("");
      setIdClient(0);
      setAddress("");
      setDeposit(0);
      setPhoneNumber(0);
      setSelectedDate("");
      setQuantity(0);
      setPrice(0);
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

  const handleOnChangeName = (event) => setName(event.target.value);
  const handleOnChangeIdClient = (event) => setIdClient(event.target.value);
  const handleOnChangeAddress = (event) => setAddress(event.target.value);
  const handleOnChangeDeposit = (event) => setDeposit(event.target.value);
  const handleOnChangePhoneNumber = (event) =>
    setPhoneNumber(event.target.value);
  const handleOnChangeDate = (event) => setSelectedDate(event.target.value);
  const handleOnChangeQuantity = (event) => setQuantity(event.target.value);
  const handleOnChangeRentalPrice = (event) => setPrice(event.target.value);
  const handleOnClick = (event) => {
    event.preventDefault();
    const data = {
      name,
      idClient,
      address,
      deposit,
      phoneNumber,
      selectedDate,
      quantity,
      price,
    };
    console.log(data);
    return makeRequest({ data, method: "POST" });
  };
  return (
    <form className="FormAppointment" onSubmit={handleOnClick}>
      <Input
        label="Número de documento"
        name="idClient"
        type="number"
        placeholder="Número de documento"
        onChange={handleOnChangeIdClient}
        value={idClient}
      />
      <Input
        label="Nombre del cliente"
        name="name"
        type="text"
        placeholder="Nombre del cliente"
        onChange={handleOnChangeName}
        value={name}
      />
      <Input
        label="Dirección"
        name="address"
        type="text"
        placeholder="Dirección"
        onChange={handleOnChangeAddress}
        value={address}
      />
      <Input
        label="Deposito"
        name="deposit"
        type="number"
        placeholder="Deposito"
        onChange={handleOnChangeDeposit}
        value={deposit}
      />
      <Input
        label="Número de telefono"
        name="phoneNumber"
        type="number"
        placeholder="Número de telefono"
        onChange={handleOnChangePhoneNumber}
        value={phoneNumber}
      />
      <Input
        label="Fecha"
        name="date"
        type="date"
        placeholder="Fecha"
        onChange={handleOnChangeDate}
        value={selectedDate}
      />
      <Input
        label="Cantidad"
        name="quantity"
        type="number"
        placeholder="Cantidad"
        onChange={handleOnChangeQuantity}
        value={quantity}
      />
      <Input
        label="Valor del alquiler"
        name="rentalPrice"
        type="number"
        placeholder="Valor del alquiler"
        onChange={handleOnChangeRentalPrice}
        value={price}
        disabled
      />

      <input
        type="submit"
        value="Guardar"
        className="FormAppointment__submit"
      />
    </form>
  );
};
const Appointment = () => {
  return (
    <div>
      <NewMenu />
      <Title Title="Nueva cotización" />
      <FormAppointment />
    </div>
  );
};

export default Appointment;

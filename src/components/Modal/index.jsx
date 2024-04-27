import { useState } from "react";
import "./Modal.scss";
import { Button } from "reactstrap";
import Input from "../Input";
import Title from "../Title/Title";
import "bootstrap/dist/css/bootstrap.css";
const Modal = ({ isOpen, onClose, product, onAdd, unitPrice }) => {
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(product ? unitPrice : 0);

  const handleOnChangeQuantity = (event) => {
    let { value: newQuantity } = event.target;

    console.log("newQuantity", newQuantity);
    if (newQuantity === "" || newQuantity === undefined) {
      newQuantity = "0";
    }
    newQuantity = newQuantity.match(/\d+/g).join("");
    newQuantity = parseInt(newQuantity);
    setQuantity(newQuantity);
    let total = newQuantity * (product ? unitPrice : 0);
    setTotalPrice(
      " $" + total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
  };

  const handleCloseModal = () => {
    setQuantity(0);
    onClose();
  };
  const handleAddProduct = () => {
    onAdd({
      productId: product.id,
      quantity: parseInt(quantity),
      totalPrice,
    });
    handleCloseModal();
  };

  if (!isOpen) {
    return null;
  }
  return (
    <>
      {isOpen && (
        <div className="Modal">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Detalle del producto</h5>
              <Button
                color="light"
                type="button"
                className="close"
                onClick={handleCloseModal}
              >
                <span>&times;</span>
              </Button>
            </div>
            <div className="modal-body">
              <Title Title={product.name} />
              <p>Precio unitario: {unitPrice}</p>
              <Input
                label="Cantidad:"
                type="text"
                value={quantity}
                onChange={handleOnChangeQuantity}
              />
              <p>Total a pagar:{totalPrice}</p>
            </div>
            <div className="modal-footer">
              <Button
                type="button"
                color="success"
                className="btn btn-primary"
                onClick={handleAddProduct}
              >
                Agregar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

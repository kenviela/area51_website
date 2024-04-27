import { useState } from "react";
import { Link } from "react-router-dom";
import "./TableWithPopup.scss";
import Modal from "../Modal";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
const TableWithPopup = (props) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const HandleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const HandleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };
  // Función para manejar la adición del producto
  const handleAddProduct = (productData) => {
    console.log("Producto agregado:", productData);
    props.onProductAdded(productData);
    HandleCloseModal();
  };
  return (
    <div className="TableWithPopup">
      <table>
        <thead>
          <tr>
            <th>Nombre del producto</th>
            <th>Cantidad</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {props.filterData.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>
                  <Button
                    color="success"
                    onClick={() => HandleOpenModal(product)}
                  >
                    Detalles
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal
        isOpen={isModalOpen}
        onClose={HandleCloseModal}
        product={selectedProduct}
        onAdd={handleAddProduct}
        unitPrice={selectedProduct ? selectedProduct.unitPrice : 0}
      />
    </div>
  );
};
export default TableWithPopup;

import { Link } from "react-router-dom";
import "./Table.scss";
import { useState } from "react";
const Table = (props) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (product, operation) => {
    setSelectedProduct(product);
  };
  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            <th>Nombre del producto</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {props.filterData.map((product) => {
            return (
              <tr>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td className="Table__td">
                  <Link
                    to={`/updateProducts/${product.id}/${encodeURIComponent(
                      "sum"
                    )}`}
                    onClick={() => handleSelectProduct(product, "sum")}
                  >
                    <button className="Table__td__button">+</button>
                  </Link>
                  <Link
                    to={`/updateProducts/${product.id}/${encodeURIComponent(
                      "subtract"
                    )}`}
                    onClick={() => handleSelectProduct(product, "subtract")}
                  >
                    <button className="Table__td__button">-</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

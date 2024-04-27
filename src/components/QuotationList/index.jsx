import "./QuotationList.scss";
const QuotationList = () => {
  return (
    <div className="QuotationList">
      <div className="QuotationList__item">
        <div>Nombre</div>
        <div>Cantidad</div>
        <div>precio total</div>
      </div>
      <div className="QuotationList__button">
        <button>cancelar</button>
        <button>Confirmar</button>
      </div>
    </div>
  );
};

export default QuotationList;

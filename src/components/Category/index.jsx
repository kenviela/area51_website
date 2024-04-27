import { useEffect, useState } from "react";
import useFetch from "../../useFetch";
import "./Category.scss";

const Category = (props) => {
  const { categories = [] } = props;
  console.log("propsCategories", categories);
  const [option, setOption] = useState();

  const handleOnChange = (event) => {
    const category = event.target.value;
    setOption(category);
    props.handleOnChangeCategory(category);
  };
  console.log("Opciones de categorías:", props.categories);

  const options = categories.map((category, index) => {
    return (
      <option value={category.id} key={index.id}>
        {category.name}
      </option>
    );
  });

  return (
    <div className="Category">
      <label htmlFor={props.name} className="Category__label">
        {props.label}
      </label>
      <select
        name="category"
        className="Category__select"
        defaultValue=""
        onChange={handleOnChange}
      >
        <option disabled value="">
          Selecciona una categoria
        </option>
        {options}
      </select>
    </div>
  );
};

export default Category;

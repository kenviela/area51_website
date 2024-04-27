import { useState } from "react";
import Input from "../Input";
import "./SearchBar.scss";
const SearchBar = (props) => {
  const [search, setSearch] = useState();

  const handleOnChangeSearch = (event) => setSearch(event.target.value);

  const handleOnClick = (event) => {
    event.preventDefault();
    return props.handleFilter(search);
  };

  return (
    <form className="SearchBar">
      <Input
        name="search"
        type="text"
        placeholder="Buscar"
        onChange={handleOnChangeSearch}
        className="SearchBar__form"
      />
      <input
        type="submit"
        value="Buscar"
        className="SearchBar__submit"
        onClick={handleOnClick}
      />
    </form>
  );
};

export default SearchBar;

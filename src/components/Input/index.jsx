import "./Input.scss";

const Input = (props) => {
  //const { value } = props;
  return (
    <div className="Input">
      <label htmlFor={props.name} className="Input__label">
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className={`Input__input ${props.className}`}
        value={props.value}
        disabled={props.disabled}
      />
    </div>
  );
};

export default Input;

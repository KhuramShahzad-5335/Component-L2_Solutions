import propTypes from "prop-types";
const InputField = ({ type, name, value, onChange, placeholder }) => {
  const inputStyle = {
    borderTop: "2px solid transparent",
    borderLeft: "2px solid transparent",
    borderRight: "2px solid transparent",
    padding: "20px",
    borderRadius: "10px",
    width: "20%",
    margin: "10px",
    fontSize: "1rem",
  };

  return (
    <input
      style={inputStyle}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

InputField.propTypes = {
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string,
};

export default InputField;

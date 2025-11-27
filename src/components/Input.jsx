function Input({ label, name, id, type = "text", value, onChange }) {
  const inputId = id || name;

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;

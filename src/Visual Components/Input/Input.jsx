import styleModule from './Input.module.css';

export function Input({ type, value, placeholder, onChange, htmlFor }) {
  return (
    <label htmlFor={htmlFor}>
      <input
        className={styleModule.layout}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        step="any"
        required="required"
      />
    </label>
  );
}

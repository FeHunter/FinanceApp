import styleModule from './Input.module.css';

export function Input({ type, value, placeholder, onChange, style }) {
  return (
    <input
      className={styleModule.layout}
      style={style}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      step="any"
      required="required"
    />
  );
}

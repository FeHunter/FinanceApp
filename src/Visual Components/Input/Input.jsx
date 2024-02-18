import styleModule from './Input.module.css';

export function Input({ type, value, placeholder, onChange, title }) {
  return (
    <label>
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

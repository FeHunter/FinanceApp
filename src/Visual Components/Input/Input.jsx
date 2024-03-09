import styleModule from './Input.module.css';

export function Input({ type, value, placeholder, onChange, onBlur }) {
  return (
    <label>
      <input
        className={styleModule.layout}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        step="any"
        required="required"
      />
    </label>
  );
}

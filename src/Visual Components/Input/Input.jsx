import styleModule from './Input.module.css';

export function Input({ type, value, placeholder, id, onChange, onBlur }) {
  return (
    <label>
      <input
        id={id}
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

import styleModule from './TextArea.module.css';

export function TextArea({
  type,
  value,
  placeholder,
  cols,
  rows,
  onChange,
  style,
}) {
  return (
    <textarea
      className={styleModule.layout}
      style={style}
      type={type}
      value={value}
      placeholder={placeholder}
      cols={cols}
      rows={rows}
      onChange={onChange}
    />
  );
}

import style from './QuickViewContent.module.css';

export function QuickViewContent({ title, children }) {
  return <div className={style.content}>{children}</div>;
}

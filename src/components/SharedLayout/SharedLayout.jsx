import css from "./SharedLayout.module.css"

export default function SharedLayout({ children }) {
  return <div className={css.wrapper}>{children}</div>;
}

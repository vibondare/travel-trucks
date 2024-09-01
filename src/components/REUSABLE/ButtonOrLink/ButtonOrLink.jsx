import css from "./ButtonOrLink.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function ButtonOrLink({
  type,
  text,
  redirectTo,
  addClass,
  buttonType,
  buttonOnClick,
}) {
  return type === "link" ? (
    <Link className={clsx(css.button, addClass)} to={redirectTo}>
      {text}
    </Link>
  ) : (
    <button
      className={clsx(css.button, addClass)}
      type={buttonType ? buttonType : "button"}
      onClick={buttonOnClick}
    >
      {text}
    </button>
  );
}

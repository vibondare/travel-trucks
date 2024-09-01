import css from "./Header.module.css";
import clsx from "clsx";
import Navigation from "../Navigation/Navigation.jsx";
import sprite from "../../assets/sprite.svg";
import { Link } from "react-router-dom";

export default function Header({}) {
  return (
    <header className={css.header}>
      <Link to="/">
        <svg className={css.logo}>
          <use xlinkHref={`${sprite}#icon-logo`} />
        </svg>
      </Link>
      <Navigation />
    </header>
  );
}

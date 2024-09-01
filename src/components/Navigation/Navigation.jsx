import css from "./Navigation.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const buildNavLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.navLinkIsActive);
};

export default function Navigation({}) {
  return (
    <nav className={css.nav}>
      {/* <p>Navigation</p> */}
      <NavLink to="/" className={buildNavLinkClass}>
        Home
      </NavLink>
      <NavLink to="/campers" className={buildNavLinkClass}>
        Catalog
      </NavLink>
    </nav>
  );
}

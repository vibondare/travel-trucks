import { nanoid } from "nanoid";
import sprite from "../../assets/sprite.svg";
import css from "./CamperCardBenefits.module.css";

export default function CamperCardBenefits({ benefits }) {
  const [transmission, AC, bathroom, kitchen, radio, engine] = benefits;

  return (
    <ul className={css.list}>
      {transmission === "automatic" && (
        <li key={nanoid()} className={css.item}>
          <svg className={css.icon}>
            <use xlinkHref={`${sprite}#icon-automatic`} />
          </svg>
          <p className={css.text}>Automatic</p>
        </li>
      )}
      {AC && (
        <li key={nanoid()} className={css.item}>
          <svg className={css.icon}>
            <use xlinkHref={`${sprite}#icon-ac`} />
          </svg>
          <p className={css.text}>AC</p>
        </li>
      )}
      {bathroom && (
        <li key={nanoid()} className={css.item}>
          <svg className={css.icon}>
            <use xlinkHref={`${sprite}#icon-bathroom`} />
          </svg>
          <p className={css.text}>Bathroom</p>
        </li>
      )}
      {kitchen && (
        <li key={nanoid()} className={css.item}>
          <svg className={css.icon}>
            <use xlinkHref={`${sprite}#icon-kitchen`} />
          </svg>
          <p className={css.text}>Kitchen</p>
        </li>
      )}
      {engine === "petrol" && (
        <li key={nanoid()} className={css.item}>
          <svg className={css.icon}>
            <use xlinkHref={`${sprite}#icon-petrol`} />
          </svg>
          <p className={css.text}>Petrol</p>
        </li>
      )}
      {radio && (
        <li key={nanoid()} className={css.item}>
          <svg className={css.icon}>
            <use xlinkHref={`${sprite}#icon-radio`} />
          </svg>
          <p className={css.text}>Radio</p>
        </li>
      )}
    </ul>
  );
}

import css from "./CamperVehicleDetails.module.css";
import { nanoid } from "nanoid";

export default function CamperVehicleDetails({ vehicleDetails }) {
  const [form, length, width, height, tank, consumption] = vehicleDetails;

  let formToRender;

  if (form === "alcove") {
    formToRender = "Alcove";
  } else if (form === "fullyIntegrated") {
    formToRender = "Fully integrated";
  } else if (form === "panelTruck") {
    formToRender = "Panel truck";
  }

  return (
    <ul className={css.venicleDetailsList}>
      <li key={nanoid()} className={css.venicleDetailsItem}>
        <p className={css.venicleDetailsText}>Form</p>
        <p className={css.venicleDetailsText}>{formToRender}</p>
      </li>
      <li key={nanoid()} className={css.venicleDetailsItem}>
        <p className={css.venicleDetailsText}>Length</p>
        <p className={css.venicleDetailsText}>{parseFloat(length)} m</p>
      </li>
      <li key={nanoid()} className={css.venicleDetailsItem}>
        <p className={css.venicleDetailsText}>Width</p>
        <p className={css.venicleDetailsText}>{parseFloat(width)} m</p>
      </li>
      <li key={nanoid()} className={css.venicleDetailsItem}>
        <p className={css.venicleDetailsText}>Height</p>
        <p className={css.venicleDetailsText}>{parseFloat(height)} m</p>
      </li>
      <li key={nanoid()} className={css.venicleDetailsItem}>
        <p className={css.venicleDetailsText}>Tank</p>
        <p className={css.venicleDetailsText}>{parseFloat(tank)} l</p>
      </li>
      <li key={nanoid()} className={css.venicleDetailsItem}>
        <p className={css.venicleDetailsText}>Consumption</p>
        <p className={css.venicleDetailsText}>{consumption}</p>
      </li>
    </ul>
  );
}

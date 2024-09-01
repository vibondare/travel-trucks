import css from "./SearchingForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import ButtonOrLink from "../REUSABLE/ButtonOrLink/ButtonOrLink.jsx";
import sprite from "../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeFilters } from "../../redux/filters/slice.js";
import { selectFilteredCampers } from "../../redux/campers/selectors.js";
import { selectFilters } from "../../redux/filters/selectors.js";

export default function SearchingForm() {
  const locationId = useId();
  const equipmentACId = useId();
  const equipmentAutomaticId = useId();
  const equipmentKitchenId = useId();
  const equipmentTVId = useId();
  const equipmentBathroomId = useId();
  const typeVanId = useId();
  const typeFullyIntegratedId = useId();
  const typeAlcoveId = useId();

  const dispatch = useDispatch();

  const initialValues = {
    location: "Ukraine, Kyiv",
    vehicleEquipment: {
      AC: false,
      automatic: false,
      kitchen: false,
      TV: false,
      bathroom: false,
    },
    form: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, action) => {
        console.log(values);
        dispatch(changeFilters(values));
        action.resetForm();
      }}
    >
      {({ values }) => (
        <Form className={css.form}>
          <label htmlFor={locationId} className={css.locationLabel}>
            Location
          </label>
          <Field
            type="text"
            name="location"
            id={locationId}
            className={css.locationInput}
            placeholder="City"
          />
          <svg className={css.locationIcon}>
            <use xlinkHref={`${sprite}#icon-location`} />
          </svg>
          <p className={css.filtersText}>Filters</p>
          <p className={css.filterNameText}>Vehicle equipment</p>
          <div role="group" className={css.group}>
            <Field
              type="checkbox"
              name="vehicleEquipment.AC"
              value="AC"
              id={equipmentACId}
              className={css.optionInput}
              checked={values.vehicleEquipment.AC}
            />
            <label htmlFor={equipmentACId} className={css.optionLabel}>
              <span className={css.optionSpan}>
                <svg className={css.optionIcon}>
                  <use xlinkHref={`${sprite}#icon-ac`} />
                </svg>
                <p>AC</p>
              </span>
            </label>

            <Field
              type="checkbox"
              name="vehicleEquipment.automatic"
              value="automatic"
              id={equipmentAutomaticId}
              className={css.optionInput}
              checked={values.vehicleEquipment.automatic}
            />
            <label htmlFor={equipmentAutomaticId} className={css.optionLabel}>
              <span className={css.optionSpan}>
                <svg className={css.optionIcon}>
                  <use xlinkHref={`${sprite}#icon-automatic`} />
                </svg>
                <p>Automatic</p>
              </span>
            </label>

            <Field
              type="checkbox"
              name="vehicleEquipment.kitchen"
              value="kitchen"
              id={equipmentKitchenId}
              className={css.optionInput}
              checked={values.vehicleEquipment.kitchen}
            />
            <label htmlFor={equipmentKitchenId} className={css.optionLabel}>
              <span className={css.optionSpan}>
                <svg className={css.optionIcon}>
                  <use xlinkHref={`${sprite}#icon-kitchen`} />
                </svg>
                <p>Kitchen</p>
              </span>
            </label>

            <Field
              type="checkbox"
              name="vehicleEquipment.TV"
              value="TV"
              id={equipmentTVId}
              className={css.optionInput}
              checked={values.vehicleEquipment.TV}
            />
            <label htmlFor={equipmentTVId} className={css.optionLabel}>
              <span className={css.optionSpan}>
                <svg className={css.optionIcon}>
                  <use xlinkHref={`${sprite}#icon-tv`} />
                </svg>
                <p>TV</p>
              </span>
            </label>

            <Field
              type="checkbox"
              name="vehicleEquipment.bathroom"
              value="bathroom"
              id={equipmentBathroomId}
              className={css.optionInput}
              checked={values.vehicleEquipment.bathroom}
            />
            <label htmlFor={equipmentBathroomId} className={css.optionLabel}>
              <span className={css.optionSpan}>
                <svg className={css.optionIcon}>
                  <use xlinkHref={`${sprite}#icon-bathroom`} />
                </svg>
                <p>Bathroom</p>
              </span>
            </label>
          </div>

          <p className={css.filterNameText}>Vehicle type</p>
          <div role="group" className={css.group}>
            <Field
              type="radio"
              name="form"
              value="panelTruck"
              id={typeVanId}
              className={css.optionInput}
            />
            <label htmlFor={typeVanId} className={css.optionLabel}>
              <span className={css.optionSpan}>
                <svg className={css.optionIcon}>
                  <use xlinkHref={`${sprite}#icon-van`} />
                </svg>
                <p>Van</p>
              </span>
            </label>

            <Field
              type="radio"
              name="form"
              value="fullyIntegrated"
              id={typeFullyIntegratedId}
              className={css.optionInput}
            />
            <label htmlFor={typeFullyIntegratedId} className={css.optionLabel}>
              <span className={css.optionSpan}>
                <svg className={css.optionIcon}>
                  <use xlinkHref={`${sprite}#icon-fully-integrated`} />
                </svg>
                <p className={css.optionText}>Fully Integrated</p>
              </span>
            </label>

            <Field
              type="radio"
              name="form"
              value="alcove"
              id={typeAlcoveId}
              className={css.optionInput}
            />
            <label htmlFor={typeAlcoveId} className={css.optionLabel}>
              <span className={css.optionSpan}>
                <svg className={css.optionIcon}>
                  <use xlinkHref={`${sprite}#icon-alcove`} />
                </svg>
                <p>Alcove</p>
              </span>
            </label>
          </div>
          <ButtonOrLink
            text="Search"
            addClass={css.button}
            buttonType={"submit"}
          />
        </Form>
      )}
    </Formik>
  );
}

import CamperCardBenefits from "../CamperCardBenefits/CamperCardBenefits.jsx";
import css from "./CamperFeatures.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllCampers } from "../../redux/campers/selectors.js";
import CamperVehicleDetails from "../CamperVehicleDetails/CamperVehicleDetails.jsx";

export default function CamperFeatures() {
  const { camperId } = useParams();

  const campers = useSelector(selectAllCampers);

  const camperWithId = campers.find((camper) => camper.id === camperId);

  const { transmission, AC, bathroom, kitchen, radio, engine, form, length, width, height, tank, consumption } = camperWithId;

  return (
    <div className={css.featuresContainer}>
      <CamperCardBenefits
        benefits={[transmission, AC, bathroom, kitchen, radio, engine]}
      />
      <p className={css.vehicleDetailsText}>Vehicle details</p>
      <CamperVehicleDetails vehicleDetails={[form, length, width, height, tank, consumption]} />
    </div>
  );
}

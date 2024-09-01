import css from "./CamperPage.module.css";
import Header from "../../components/Header/Header.jsx";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAllCampers } from "../../redux/campers/selectors.js";
import MainCamperInfo from "../../components/MainCamperInfo/MainCamperInfo.jsx";
import {
  selectCurrentPage,
  selectLimit,
  selectIsLoading,
  selectError,
} from "../../redux/campers/selectors.js";
import { fetchAllCampers } from "../../redux/campers/operations.js";
import { useEffect } from "react";
import DetailedCamperInfo from "../../components/DetailedCamperInfo/DetailedCamperInfo.jsx";
// import { useEffect } from "react";

export default function CamperPage() {
    const { camperId } = useParams();
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const campers = useSelector(selectAllCampers);

  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch]);

  const camper = campers.find((camper) => camper.id === camperId);

  return (
    <>
      <Header />
      {error && <p>An error occurred, please try to reload page</p>}
      {isLoading && <p>Loading, please wait...</p>}
      {!isLoading && camper && <MainCamperInfo />}
      {!isLoading && camper && <DetailedCamperInfo />}
    </>
  );
}

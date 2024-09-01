import Header from "../../components/Header/Header.jsx";
import SearchingForm from "../../components/SearchingForm/SearchingForm.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampers } from "../../redux/campers/operations.js";
import CampersList from "../../components/CampersList/CampersList.jsx";
import css from "./CatalogPage.module.css";
import {
  selectAllCampers,
  selectCurrentPage,
  selectLimit,
  selectTotalCount,
  selectIsLoading,
  selectError,
} from "../../redux/campers/selectors.js";
import { useEffect } from "react";

export default function CatalogPage() {
  const dispatch = useDispatch();

  const page = useSelector(selectCurrentPage);
  const limit = useSelector(selectLimit);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllCampers({ page, limit }));
  }, [dispatch, page, limit]);

  return (
    <>
      <Header />
      <h2 className={css.hiddenTitle}>Campers Catalog</h2>
      <section className={css.catalogSection}>
        <SearchingForm />
        {error && <p>An error occurred, please try to reload page</p>}
        {isLoading && <p>Loading, please wait...</p>}
        {!isLoading && <CampersList />}
      </section>
    </>
  );
}

import css from "./CampersList.module.css";
import {
  selectCurrentPage,
  selectFilteredCampers,
  selectIsLoading,
  selectLimit,
  selectTotalCount,
} from "../../redux/campers/selectors.js";
import { useSelector } from "react-redux";
import CamperCard from "../CamperCard/CamperCard.jsx";
import { useDispatch } from "react-redux";
import ButtonOrLink from "../REUSABLE/ButtonOrLink/ButtonOrLink.jsx";
import { setPage } from "../../redux/campers/slice.js";

export default function CampersList() {
  const campers = useSelector(selectFilteredCampers);

  const page = useSelector(selectCurrentPage);
  const limit = useSelector(selectLimit);
  const totalCount = useSelector(selectTotalCount);

  const totalPages = Math.ceil(totalCount / limit);

  const dispatch = useDispatch();

  const handleLoadMore = () => {
    if (page < totalPages) {
      dispatch(setPage(page + 1));
    }
  };

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {campers &&
          campers.map((camper) => {
            return (
              <li key={camper.id}>
                <CamperCard camper={camper} />
              </li>
            );
          })}
      </ul>
      <ButtonOrLink
        text={"Load more"}
        addClass={css.loadMoreButton}
        buttonOnClick={handleLoadMore}
      />
    </div>
  );
}

import css from "./CamperReviews.module.css";
import sprite from "../../assets/sprite.svg";
import clsx from "clsx";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllCampers } from "../../redux/campers/selectors.js";
import { nanoid } from "nanoid";

export default function CamperReviews() {
  const { camperId } = useParams();

  const campers = useSelector(selectAllCampers);

  const camperWithId = campers.find((camper) => camper.id === camperId);

  const { reviews } = camperWithId;

  return (
    <ul className={css.reviewsList}>
      {reviews.map((review) => {
        return (
          <li key={nanoid()}>
            <div className={css.userPart}>
              <div className={css.avatar}>
                {review.reviewer_name.slice(0, 1)}
              </div>
              <div className={css.nameAndStarsContainer}>
                <p className={css.reviewerNameText}>{review.reviewer_name}</p>
                <ul className={css.starsList}>
                  <li key={nanoid()}>
                    <svg className={clsx(css.iconStar, css.iconFilledStar)}>
                      <use xlinkHref={`${sprite}#icon-star`} />
                    </svg>
                  </li>
                  <li key={nanoid()}>
                    <svg
                      className={clsx(
                        css.iconStar,
                        review.reviewer_rating > 1 && css.iconFilledStar
                      )}
                    >
                      <use xlinkHref={`${sprite}#icon-star`} />
                    </svg>
                  </li>
                  <li key={nanoid()}>
                    <svg
                      className={clsx(
                        css.iconStar,
                        review.reviewer_rating > 2 && css.iconFilledStar
                      )}
                    >
                      <use xlinkHref={`${sprite}#icon-star`} />
                    </svg>
                  </li>
                  <li key={nanoid()}>
                    <svg
                      className={clsx(
                        css.iconStar,
                        review.reviewer_rating > 3 && css.iconFilledStar
                      )}
                    >
                      <use xlinkHref={`${sprite}#icon-star`} />
                    </svg>
                  </li>
                  <li key={nanoid()}>
                    <svg
                      className={clsx(
                        css.iconStar,
                        review.reviewer_rating > 4 && css.iconFilledStar
                      )}
                    >
                      <use xlinkHref={`${sprite}#icon-star`} />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <p className={css.commentText}>{review.comment}</p>
          </li>
        );
      })}
    </ul>
  );
}

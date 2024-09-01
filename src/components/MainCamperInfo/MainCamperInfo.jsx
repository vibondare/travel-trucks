import css from "./MainCamperInfo.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllCampers } from "../../redux/campers/selectors.js";
import sprite from "../../assets/sprite.svg";
import { nanoid } from "nanoid";

export default function MainCamperInfo() {
  const { camperId } = useParams();

  const campers = useSelector(selectAllCampers);

  const camperWithId = campers.find((camper) => camper.id === camperId);

  const { name, price, location, rating, reviews, gallery, description } = camperWithId;

  const amountOfReviews = reviews.length;

  return (
    <>
        <div>
          <h2 className={css.nameText}>{name}</h2>
          <div className={css.ratingAndLocationContainer}>
            <div className={css.ratingContainer}>
              <svg className={css.iconStar}>
                <use xlinkHref={`${sprite}#icon-star`} />
              </svg>
              <p
                className={css.ratingText}
              >{`${rating}(${amountOfReviews} Reviews)`}</p>
            </div>
            <div className={css.locationContainer}>
              <svg className={css.iconLocation}>
                <use xlinkHref={`${sprite}#icon-location`} />
              </svg>
              <p className={css.locationText}>{location}</p>
            </div>
          </div>
          <p className={css.priceText}>&#8364;{price}</p>
          <ul className={css.imagesList}>
            {gallery.map((linksToTheImage) => {
              return (
                <li key={nanoid()} className={css.imageItem}>
                  <img
                    src={`${linksToTheImage.original}`}
                    alt="camperPhoto"
                    className={css.image}
                  />
                </li>
              );
            })}
          </ul>
          <p className={css.descriptionText}>{description}</p>
        </div>
    </>
  );
}

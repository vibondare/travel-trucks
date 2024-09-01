import css from "./CamperCard.module.css";
import sprite from "../../assets/sprite.svg";
import ButtonOrLink from "../REUSABLE/ButtonOrLink/ButtonOrLink.jsx";
import CamperCardBenefits from "../CamperCardBenefits/CamperCardBenefits.jsx";
import clsx from "clsx";
import { useState } from "react";
import { useEffect } from "react";

export default function CamperCard({ camper }) {
  const {
    id,
    name,
    description,
    rating,
    price,
    location,
    gallery,
    reviews,
    transmission,
    AC,
    bathroom,
    kitchen,
    radio,
    engine,
  } = camper;

  const [_, setUpdate] = useState(false);

    const forceUpdate = () => {
        setUpdate(prev => !prev);
    };

  const amountOfReviews = reviews.length;
  const croppedDescription =
    description.length > 61 ? `${description.slice(0, 60)}...` : description;

    const addFavCamper = (camperId) => {
      let favCampers = JSON.parse(localStorage.getItem('favCampers')) || {};
      favCampers[camperId] = camper;
      localStorage.setItem('favCampers', JSON.stringify(favCampers));
  }
  
  const removeFavCamper = (camperId) => {
      let favCampers = JSON.parse(localStorage.getItem('favCampers')) || {};
      delete favCampers[camperId];
      localStorage.setItem('favCampers', JSON.stringify(favCampers));
  }
  
  const isCamperFavorite = (camperId) => {
      const favCampers = JSON.parse(localStorage.getItem('favCampers')) || {};
      return !!favCampers[camperId];
  }
  
  const toggleFavCamper = (id) => {
      if (isCamperFavorite(id)) {
          removeFavCamper(id);
          forceUpdate();
      } else {
          addFavCamper(id);
          forceUpdate();
      }
  }

  return (
    <div className={css.container}>
      <div className={css.imagePartContainer}>
        <img
          src={gallery[0].original}
          alt="camperPhoto"
          className={css.camperImage}
        />
      </div>

      <div className={css.rightCardPartContainer}>
        <div className={css.nameAndPriceAndFavContainer}>
          <p className={css.nameText}>{name}</p>
          <div className={css.priceAndFavContainer}>
            <p className={css.priceText}>&#8364;{price}</p>
            <button
              className={css.isFavButton}
              onClick={() => toggleFavCamper(id)}
            >
              <svg
                className={clsx(css.iconFav, isCamperFavorite(id) && css.isFav)}
              >
                <use xlinkHref={`${sprite}#icon-fav`} />
              </svg>
            </button>
          </div>
        </div>
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
        <p className={css.descriptionText}>{croppedDescription}</p>
        <CamperCardBenefits
          benefits={[transmission, AC, bathroom, kitchen, radio, engine]}
        />
        <ButtonOrLink
          type="link"
          redirectTo={`/campers/${id}`}
          text={"Show more"}
          addClass={css.showMoreLink}
        />
      </div>
    </div>
  );
}

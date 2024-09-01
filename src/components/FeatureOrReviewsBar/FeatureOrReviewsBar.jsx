import css from "./FeatureOrReviewsBar.module.css";
import clsx from "clsx";

export default function FeatureOrReviewsBar({ sectionState, switchSection }) {
  return (
    <div className={css.barContainer}>
      <button className={clsx(css.button, sectionState === "features" && css.currentButton)} onClick={() => switchSection("features")}>
        Features
      </button>
      <button className={clsx(css.button, sectionState === "reviews" && css.currentButton)} onClick={() => switchSection("reviews")}>
        Reviews
      </button>
    </div>
  );
}

import BookCamper from "../BookCamper/BookCamper.jsx";
import CamperFeatures from "../CamperFeatures/CamperFeatures.jsx";
import CamperReviews from "../CamperReviews/CamperReviews.jsx";
import FeatureOrReviewsBar from "../FeatureOrReviewsBar/FeatureOrReviewsBar.jsx";
import css from "./DetailedCamperInfo.module.css";
import { useState } from "react";

export default function DetailedCamperInfo() {
  const [sectionToRender, setSectionToRender] = useState("features");

  const switchSectionToRender = (sectionName) => {
    setSectionToRender(sectionName);
  };

  return (
    <>
      <FeatureOrReviewsBar
        switchSection={switchSectionToRender}
        sectionState={sectionToRender}
      />
      <div className={css.infoAndFormContainer}>
        {sectionToRender === "features" ? (
          <CamperFeatures />
        ) : (
          <CamperReviews />
        )}
        <BookCamper />
      </div>
    </>
  );
}

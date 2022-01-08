import "./Head.css";
import React from "react";
import LocalizedStrings from "react-localization";
import { Link } from "react-router-dom";

let strings = new LocalizedStrings({
  en: {
    anthem: "The school anthem",
    vision: "Schooles' Vision",
    gallery: "Photos' Gallery",
    agenda: "Photos' Gallery",
  },
  he: {
    anthem: "המנון בית הספר",
    vision: "חזון בית הספר",
    gallery: "גלריית תמונות",
    agenda: "מערכת שעות",
  },
});
strings.setLanguage("he");

const Head = () => {
  return (
    <div className="head_div">
      <div className="head_Buttons">
        <a href="#schools_agenda">{strings.agenda}</a>
        <Link to="/schools_gallery">{strings.gallery}</Link>
        <Link to="/schools_anthem">{strings.anthem}</Link>
        <a href="#schools_vision">{strings.vision}</a>
      </div>
    </div>
  );
};

export default Head;

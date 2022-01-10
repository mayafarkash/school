import "./Vision.css";
import React from "react";
import LocalizedStrings from "react-localization";
import vision from "../../img/vision.jpeg";

let strings = new LocalizedStrings({
  en: {
    vision: "School's Vision",
  },
  he: {
    vision: "חזון בית הספר",
  },
});
strings.setLanguage("he");

const Vision = () => {
  return (
    <div className="Vision_div">
      <h3>{strings.vision}</h3>
      <img src={vision} alt="Vision_lyrics" className="lyrics" />
    </div>
  );
};

export default Vision;

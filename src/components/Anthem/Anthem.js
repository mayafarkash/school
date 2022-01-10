import "./Anthem.css";
import React from "react";
import LocalizedStrings from "react-localization";
import anthem from "../../img/anthem.jpeg";
import piano from "../../img/kid_piano.jpeg";

let strings = new LocalizedStrings({
  en: {
    anthem: "School's Anthem",
    writer: "Lea Goldberg",
  },
  he: {
    anthem: "המנון בית הספר",
    writer: "תפילה/ לאה גולדברג",
  },
});
strings.setLanguage("he");

const Anthem = () => {
  return (
    <div className="anthem_div">
      <h3>{strings.anthem}</h3>
      <h4 className="writer">{strings.writer}</h4>
      <img src={piano} alt="anthem_pic" className="piano" />
      <img src={anthem} alt="anthem_lyrics" className="lyrics" />
    </div>
  );
};

export default Anthem;

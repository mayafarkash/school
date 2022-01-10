import "./Agenda.css";
import React from "react";
import LocalizedStrings from "react-localization";
import schedule from "../../img/schedule.jpeg";

let strings = new LocalizedStrings({
  en: {
    schedule: "School's schedule",
  },
  he: {
    schedule: "מערכת שעות",
  },
});
strings.setLanguage("he");

const Agenda = () => {
  return (
    <div className="schedule_div">
      <h3>{strings.schedule}</h3>
      <img src={schedule} alt="schedule_lyrics" className="lyrics" />
    </div>
  );
};

export default Agenda;

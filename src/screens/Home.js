import React from "react";
import bg from "../img/pencilsBg.jpeg";
import black from "../img/black_kid.jpeg";
import white from "../img/white_kid.jpeg";
import school_name from "../img/school_name.png";
import LocalizedStrings from "react-localization";

let strings = new LocalizedStrings({
  en: {
    welcome: "Welcom to [name]",
  },
  he: {
    welcome: "ברוכים.ות הבאים.ות לבית הספר",
  },
});
strings.setLanguage("he");
export const Home = () => {
  return (
    <div className="home_div">
      <img src={black} alt="anthem_pic" className="black" />
      <img src={white} alt="anthem_pic" className="white" />
      <img src={bg} alt="anthem_pic" className="bg_img" />
      <div className="title">
        <h1>{strings.welcome}</h1>
        <img src={school_name} alt="school_name" className="home_logo" />
      </div>
    </div>
  );
};

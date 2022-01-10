import React, { useState } from "react";
import "./Gallery.css";
import LocalizedStrings from "react-localization";
import i0 from "../../img/0.jpeg";
import i1 from "../../img/1.jpeg";
import i2 from "../../img/2.jpeg";
import i3 from "../../img/3.jpeg";
import i4 from "../../img/4.jpeg";
import i5 from "../../img/5.jpeg";
import i6 from "../../img/6.jpeg";
import i7 from "../../img/7.jpeg";
import i8 from "../../img/8.jpeg";
import i9 from "../../img/9.jpeg";
import i10 from "../../img/10.jpeg";
import i11 from "../../img/11.jpeg";
import i12 from "../../img/12.jpeg";
import i13 from "../../img/13.jpeg";
import { IoIosArrowForward } from "react-icons/io";

let strings = new LocalizedStrings({
  en: {
    gallery: "School's Gallery",
  },
  he: {
    gallery: "גלריית בית הספר",
  },
});
strings.setLanguage("he");

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const imgs = [i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i13];
  const addIndex = () => {
    if (index + 1 === imgs.length) setIndex(0);
    else setIndex((prev) => prev + 1);
  };
  const reduceIndex = () => {
    if (index - 1 < 0) setIndex(imgs.length - 1);
    else setIndex((prev) => prev - 1);
  };

  return (
    <div className="gallery_div">
      <h3>{strings.gallery}</h3>
      <div className="imgs_area">
        <IoIosArrowForward onClick={reduceIndex} className="left" />
        <div className="flip-box">
          <img
            src={imgs[(index + 1) % imgs.length]}
            alt="gallery_pic"
            key={index}
            className="photo "
          />
        </div>
        <IoIosArrowForward onClick={addIndex} className="right" />
      </div>
    </div>
  );
};

export default Gallery;

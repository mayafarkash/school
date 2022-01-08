import React from "react";
import bg from "../../img/pencilsBg.jpeg";
import school_name from "../../img/school_name.png";
import { useNavigate } from "react-router-dom";
import "./Body.css";

const Body = ({ children }) => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/school");
  };
  return (
    <div className="body_div">
      <img
        onClick={backHome}
        src={school_name}
        alt="school_name"
        className="logo"
      />
      <img src={bg} alt="pic" className="bg_img" />
      {children}
    </div>
  );
};

export default Body;

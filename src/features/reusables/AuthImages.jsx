import React from "react";
// import img from "../../assests/images/timeandattendance.png";
import classes from "../../features/reusables/authImage.module.css"
import semiImage from "../../assests/images/semi.png"

const AuthImage = ()=> {
    return (
      <div className={classes.image}>
        <div className={classes.flexLogoText}>
          <div className={classes.logo}>
            {/* <h2>{semiImage}</h2> */}
            <img src={semiImage} alt="Semicolon image" />
          </div>
          <h1>SEMICOLON</h1>
        </div>
      </div>
    );
};

export default AuthImage;
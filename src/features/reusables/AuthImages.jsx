import React from "react";
// import img from "../../assests/images/timeandattendance.png";
import classes from "../../features/reusables/authImage.module.css"
import semiImage from "../../assests/images/semocolonLogo-removebg-preview.png"

const AuthImage = ()=> {
    return (
      <div className={classes.image}>
        <div className={classes.flexLogoText}>
          <div className={classes.logo}>
            {/* <h2>{semiImage}</h2> */}
            <img src={semiImage} alt="Semicolon image" />
          </div>
         
        </div>
      </div>
    );
};

export default AuthImage;
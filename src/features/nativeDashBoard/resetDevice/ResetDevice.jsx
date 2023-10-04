import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./resetDevice.module.css";
import NativeSideBar from "../nativeSideBar/nativeSideBar";

const ResetDeviceForm = () => {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassWord, setAdminPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [ok, setOk] = useState("");

  const validateEmail = (email) => {
    return email != null;
  };
  const validatePassword = (password) => {
    return password != null;
  };

    const [screenWidth, setScreenWidth] = useState(0);
    const [screenHeight, setScreenHeight] = useState(0);

    useEffect(() => {
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;

      setScreenWidth(screenWidth);
      setScreenHeight(screenHeight);
    }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const semicolonEmail = sessionStorage.getItem("semicolonEmail");

    const userDetails = {
        adminSemicolonEmail: adminEmail,
        adminPassword: adminPassWord,
        nativeSemicolonEmail: semicolonEmail,
        screenWidth: screenWidth,
        screenHeight: screenHeight
    }

    const isValidEmail = validateEmail(adminEmail);
    const isValidPassword = validatePassword(adminPassWord);

    if (!isValidEmail) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Admin email Required",
      }));
    }
    if (!isValidPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Admin password Required",
      }));
    }
    if (isValidEmail && isValidPassword) {
      try {
      const response = await axios.post(
        "https://elitestracker-production.up.railway.app/api/v1/natives/resetDevice",
        userDetails
      );

      setMessage(response.data)

    } catch (error) {
      setErrors(error.response.data.data);
      console.log(error.response.data.data);
    }
    }
  };

  return (
    <div className={classes.main}>
      <NativeSideBar />
      <div className={classes.myFormBox}>
        <h1>Reset Device</h1>
        <form onSubmit={handleSubmit}>
          <div className={classes.divToFlex}>
            <label htmlFor="">Email <span>*</span></label>
            <div className={classes.input}>
              <input
                className="admin-email"
                placeholder="Admin semicolon email"
                type="text"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
              />
              {errors.adminEmail && <p>{errors.adminEmail}</p>}
              {ok && <p>{ok}</p>}
            </div>
            <label htmlFor="">Password <span>*</span></label>
            <div className={classes.input}>
              <input
                //   className="admin-password"
                placeholder="Admin password"
                type="text"
                value={adminPassWord}
                onChange={(e) => setAdminPassword(e.target.value)}
              />
              {errors.adminPassWord && <p>{errors.adminPassWord}</p>}
              {ok && <p>{ok}</p>}
            </div>
          </div>
          <button type="submit" className={classes.submit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetDeviceForm;

import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./resetDevice.module.css";
import NativeSideBar from "../nativeSideBar/nativeSideBar";

const ResetDeviceForm = () => {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassWord, setAdminPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [message, setMessage] = useState("");
  // const [ok, setOk] = useState("");

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
    // setErrors({});

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

    console.log(userDetails)

    // if (!isValidEmail) {
    //   setErrors((prevErrors) => ({
    //     ...prevErrors,
    //     email: "Admin email Required",
    //   }));
    // }
    // if (!isValidPassword) {
    //   setErrors((prevErrors) => ({
    //     ...prevErrors,
    //     password: "Admin password Required",
    //   }));
    // }
    if (isValidEmail && isValidPassword) {
      try {
        const response = await axios.patch(
        "https://elitestracker-production.up.railway.app/api/v1/natives/resetDevice",
        userDetails
     )
     
      console.log("Data sent successfully:", response);

      if (response) {
        console.log("Data sent successfully:", response);

        console.log("Data sent successfully:", response.data);
        console.log("response", response.status);

        setMessage(response.data.message);
        
        setTimeout(() => {   
          setMessage("");       
        }, 5000);
      } else {
        throw new Error("Network Error");
      }
      // setMessage(response.data)

      } catch (error) {
        // setErrors(error.response.data.data);
        // console.log(error.response.data.data);
        if (error.message === "Network Error") {
          // setMessage(error.message);
          setErrors(error.message);
        } else {
          // setMessage(error.response.data.data);
          setErrors(error.response.data.data);
        }
      }
    }
  };

  return (
    <div className={classes.main}>
      <NativeSideBar />
      <div className={classes.myFormBox}>
        <h1>Reset Device</h1>
        <form onSubmit={handleSubmit}>
          {message && <p className={classes.message}>{message}</p>}
          {errors && <p className={classes.message}>{errors}</p>}
          <div className={classes.divToFlex}>
            <label htmlFor="">
              Email <span>*</span>
            </label>
            <div className={classes.input}>
              <input
                placeholder="Admin semicolon email"
                type="text"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
              />
              {errors.adminEmail && <p>{errors.adminEmail}</p>}
              {/* {ok && <p>{ok}</p>} */}
            </div>
            <label htmlFor="">
              Password <span>*</span>
            </label>
            <div className={classes.input}>
              <input
                placeholder="Admin password"
                type="password"
                value={adminPassWord}
                onChange={(e) => setAdminPassword(e.target.value)}
              />
              {errors.adminPassWord && <p>{errors.adminPassWord}</p>}
              {/* {ok && <p>{ok}</p>} */}
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

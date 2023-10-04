import React, { useState } from "react";
import axios from "axios";
import classes from "./removeNative.module.css"
import SideBar from "../../sideBar/SideBar";

const RemoveNative = () => {
  const [semicolonEmail, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [ok, setOk] = useState("");

  const validateEmail = (semicolonEmail) => {
    return semicolonEmail != null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    const isValidEmail = validateEmail(semicolonEmail);

    if (!isValidEmail) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Semicolon Email Required",
      }));
    }

    if (isValidEmail) {
      axios
        .post("api/v1/", {
          semicolonEmail,
        })
        .then((response) => {
          setOk(response.data);
          console.log("Server response:", response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className={classes.main}>
        <SideBar/>
        <div className={classes["form-box"]}>
      <h2>Remove Native</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Semicolon Email:</label>
          <input
            type="text"
            value={semicolonEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.semicolonEmail && <p>{errors.semicolonEmail}</p>}
          {ok && <p>{ok}</p>}
        </div>
        <button type="submit" className={classes.submit}>
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default RemoveNative;

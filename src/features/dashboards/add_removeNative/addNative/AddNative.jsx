import React, { useState } from "react";
import axios from "axios";
import classes from "./addNative.module.css";
import SideBar from "../../sideBar/SideBar";

const AddNative = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [semicolonEmail, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [ok, setOk] = useState("");

  const validateFirstName = (firstName) => {
    return firstName != null;
  };
  const validateLastName = (lastName) => {
    return lastName != null;
  };
  const validateEmail = (semicolonEmail) => {
    return semicolonEmail != null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    const isValidFirstName = validateFirstName(firstName);
    const isValidLastName = validateLastName(lastName);
    const isValidEmail = validateEmail(semicolonEmail);

    if (!isValidFirstName) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "First Name Required",
      }));
    }
    if (!isValidLastName) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "Last Name Required",
      }));
    }
    if (!isValidEmail) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Semicolon Email Required",
      }));
    }

    if (isValidFirstName && isValidLastName && isValidEmail) {
      axios
        .post("api/v1/", {
          firstName,
          lastName,
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
      <SideBar />
      <div className={classes["form-box"]}>
        <h2>Add Native</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
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

export default AddNative;

import Button from "../../UI/button/Button";
import AuthImage from "../../reusables/AuthImages";
import classes from "./forgottenPassword.module.css"
import semiImage from "../../../assests/images/semi.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const ForgottenPassword = () =>{

  const [userEmail, setUserEmail] = useState("")
  const [error, setError] = useState(null);
  const [successfulMessage, setSuccessfulMessage] = useState("")
  const navigate = useNavigate()

  const changleHandler = (e) =>{
    setUserEmail(e.target.value)
  }

  const submitHandler = async (e) =>{
    e.preventDefault();

    const inputtedEmail = {
      semicolonEmail: userEmail,
    };

    console.log(inputtedEmail);

    try {
      const response = await axios.post(
        "https://elitestracker-production.up.railway.app/api/v1/user/emailForPasswordReset",
        inputtedEmail
      );

      if(response.status === 200){
        sessionStorage.setItem("email", userEmail)
        setSuccessfulMessage(response.data.message);
        
        setTimeout(() => {
        navigate("/confirmationCode");
        }, 1600);
      } else {
        throw new Error("Network Error");
      }
      } catch (error) {
        console.log(error)
         setTimeout(() => {
            if (error.message === "Network Error") {
              setError(error.message);
            } else {
              setError(error.response.data.data);
            }
         }, 1500);
      }
  };

  return (
    <div className={classes.mainContainer}>
      <AuthImage />
      <div className={classes.formContainer}>
        <p>Enter your Email Address</p>
        <p className={classes.error}>{error}</p>
        <p className={classes.error}>{successfulMessage}</p>
        <form action="" onSubmit={submitHandler}>
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <div>
            <input
              placeholder="Semicolon email"
              type="email"
              name="email"
              onChange={changleHandler}
              // value={data.email}
              required
            />
          </div>
          <Button className={classes.btn}>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default ForgottenPassword;
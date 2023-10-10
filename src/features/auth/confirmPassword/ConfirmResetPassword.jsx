import { useState } from "react";
import AuthImage from "../../reusables/AuthImages";
import classes from "../confirmPassword/confirmPassword.module.css"
import Button from "../../UI/button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ConfirmResetPassword = () => {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("")
  const [successfulMessage, setSuccessfulMessage] = useState("");

  const navigate = useNavigate();

 
  const submitHandler = async (e) =>{
    e.preventDefault();

    const inputtedCode = sessionStorage.getItem("code");
    console.log(typeof inputtedCode)

    if (password === confirmPassword) {
      setConfirmPassword(confirmPassword);
    } else {
      setError("Your password doesn't match");
      return;
    }

    const userNewPassword = {
      newPassword: confirmPassword,
      token : inputtedCode
    };

    console.log(userNewPassword);

    try {
      const response = await axios.patch(
        "https://elitestracker-production.up.railway.app/api/v1/user/resetPassword",
        userNewPassword
      );
      console.log(response)
      const myEmail = sessionStorage.getItem("email")
      console.log("my Email is", myEmail)
      if(response.status === 200){
        if (myEmail.includes("native")) {
          setSuccessfulMessage(response.data.message);         
           setTimeout(() => {
            navigate("/");
           }, 1800);
        } else {
          navigate("/adminHome");
        }
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
         }, 1800);      
      }
  }

  return (
    <div className={classes.mainContainer}>
      <AuthImage />
      <div className={classes.formContainer}>
        <p>Reset Password</p>
        <form action="" onSubmit={submitHandler}>
          <p className={classes.error}>{error}</p>
          <p className={classes.error}>{successfulMessage}</p>
          <label htmlFor="">Your new password</label> <span>*</span>
          <div className={classes.form}>
            <input
              type="password"
              placeholder=""
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className={classes.input}
              required
            />
          </div>
          <label htmlFor="">Confirm new password</label> <span>*</span>
          <div className={classes.form}>
            <input
              type="password"
              placeholder=""
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={classes.input}
              required
            />
          </div>
          <Button className={classes.button}>Confirm password</Button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmResetPassword;
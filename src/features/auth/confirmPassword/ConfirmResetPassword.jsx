import { useState } from "react";
import AuthImage from "../../reusables/AuthImages";
import classes from "../confirmPassword/confirmPassword.module.css"
import Button from "../../UI/button/Button";

const ConfirmResetPassword = () => {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("")

 
  const submitHandler = async (e) =>{
    e.preventDefault();

    if (password === confirmPassword) {
      setConfirmPassword(confirmPassword);
    } else {
      setError("Your password doesn't match");
      return;
    }

    const userNewPassword = {
      newPassword: confirmPassword,
    };

    console.log(userNewPassword);

    // try {
    //   const response = await axios.post(
    //     // "https://elitestracker-production.up.railway.app/api/v1/user/confirmResetPassword",
    //     userNewPassword
    //   );
    //   console.log(response)
    //   if(response.status === 200){
    // if (response.data.semicolonEmail.includes("native")) {
    //   console.log("I am here");
    //   navigate("/resetPassword");
    // } else {
    //   navigate("/adminHome");
    // }
    //   } else {
    //     throw new Error("Network Error");
    //   }
    //   } catch (error) {
    //     console.log(error)

    //     if(error.message === "Network Error"){
    //       setError(error.message);
    //     }else{
    //       setError(error.response.data.data);
    //     }
    //   }
  }

  return (
    <div className={classes.mainContainer}>
      <AuthImage />
      <div className={classes.formContainer}>
        <p>Reset Password</p>
        <form action="" onSubmit={submitHandler}>
          <p className={classes.error}>{error}</p>
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
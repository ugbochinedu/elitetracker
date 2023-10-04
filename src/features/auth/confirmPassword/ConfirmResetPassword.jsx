import { useState } from "react";
import AuthImage from "../../reusables/AuthImages";
import classes from "../confirmPassword/confirmPassword.module.css"
import Button from "../../UI/button/Button";

const ConfirmResetPassword = () => {

  const initialValue = {
    password: "",
    confirmPassword: "",
  };

  const [data, setData] = useState(initialValue);

  const onChangleHandler =(e) =>{
    setData((prev)=>({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className={classes.mainContainer}>
      <AuthImage />
      <div className={classes.formContainer}>
        <p>Reset Password</p>
        <form action="">
          <label htmlFor="">Your new password</label> <span>*</span>
          <div className={classes.form}>
            <input
              type="password"
              placeholder=""
              name="password"
              onChange={onChangleHandler}
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
              onChange={onChangleHandler}
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
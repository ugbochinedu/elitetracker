import Button from "../../UI/button/Button";
import AuthImage from "../../reusables/AuthImages";
import classes from './confirmationCode.module.css';
import semiImage from '../../../assests/images/semi.png'
import { useNavigate } from "react-router-dom";

const ConfirmForgottenPasswordCode = () => {


  const navigate = useNavigate();

  const submitHandler = () =>{
    navigate("/resetPassword");
  }

  return (
    <div className={classes.mainContainer}>
      <AuthImage/>
      <div className={classes.formContainer}>
        {/* <div className={classes.flexLogoText}>
          <div className={classes.logo}>
            <h2>{semiImage}</h2>
            <img src={semiImage} alt="Semicolon image" />
          </div>
          <h1>SEMICOLON</h1>
        </div> */}
        <p>Confirmation Code</p>
        <form action="" onSubmit={submitHandler}>
          <div className={classes.form}>
            <input type="text" maxlength="1" required />
            <input type="text" maxlength="1" required />
            <input type="text" maxlength="1" required />
            <input type="text" maxlength="1" required />
          </div>
          <Button className={classes.Btn}>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmForgottenPasswordCode;

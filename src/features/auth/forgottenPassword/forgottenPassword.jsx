import Button from "../../UI/button/Button";
import AuthImage from "../../reusables/AuthImages";
import classes from "./forgottenPassword.module.css"
import semiImage from "../../../assests/images/semi.png"

const ForgottenPassword = () =>{
    return (
      <div className={classes.mainContainer}>
        <AuthImage />
        <div className={classes.formContainer}>
          {/* <div className={classes.flexLogoText}>
            <div className={classes.logo}>
              <h2>{semiImage}</h2>
              <img src={semiImage} alt="Semicolon image" />
            </div>
            <h1>SEMICOLON</h1>
          </div> */}
          <p>Enter your Email Address</p>
          <form action="">
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <div>
              <input
                placeholder="Semicolon's email"
                type="email"
                name="email"
                // onChange={onChangleHandler}
                // value={data.email}
                required
              />
            </div>
            {/* <div class="input">
              <input type="text" maxlength="1" required />
              <input type="text" maxlength="1" required />
              <input type="text" maxlength="1" required />
              <input type="text" maxlength="1" required />
            </div> */}
            <Button className={classes.btn}>Submit</Button>
          </form>
        </div>
      </div>
    );
};

export default ForgottenPassword;
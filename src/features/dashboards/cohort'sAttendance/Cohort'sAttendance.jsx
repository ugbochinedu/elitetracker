import SideBar from "../sideBar/SideBar";
import classes from "./cohortAttendance.module.css"
import Button from "../../UI/button/Button";

const EnableDisableCohortsAttendance = () => {
  return (
    <div className={classes.main}>
      <SideBar />
      <div className={classes.innerContainer}>
        <h1> Cohort's Attendance Status</h1>

       <form action="">
         <div className={classes.radioBtnContainer}>
          {/* <select
          //    value={selectedOption} onChange={handleChange}
          >
            <option value="">Cohort</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select> */}
          <input className={classes.inputText} type="text" />

          <div className={classes.check}>
            <input type="radio" name="check" id="" />
            <p>Enable</p>
          </div>
          <div className={classes.check}>
            <input type="radio" name="check" id="" />
            <p>Disable</p>
          </div>
        </div>
        <div className={classes.flexBtn}>
          <Button className={classes.button}>Submit</Button>
          <Button className={classes.button}>Cancel</Button>
        </div>
       </form>
      </div>
    </div>
  );
};

export default EnableDisableCohortsAttendance;

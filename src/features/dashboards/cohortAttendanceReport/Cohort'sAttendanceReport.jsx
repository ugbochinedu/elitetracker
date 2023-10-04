import React, { useState } from "react";
import SideBar from "../sideBar/SideBar";
import classes from "./cohortAttendanceReport.module.css";
import Button from "../../UI/button/Button";

const CohortAttendanceReport = () => {
  //    const [selectedOption, setSelectedOption] = useState('');

  //   const handleChange = (e) => {
  //     setSelectedOption(e.target.value);
  //   };

  return (
    <div className={classes.main}>
      <SideBar />
      {/* <h1>Option List Example</h1> */}
      <div className={classes.innerContainer}>
        <p>Generate Cohort's Attendance Report</p>
        {/* value={selectedOption} onChange={handleChange} */}
        <form action="" className={classes.formInput}>
          <input
            placeholder="cohort"
            className={classes.inputText}
            type="text"
          />
          {/* {selectedOption && <p>You selected: {selectedOption}</p>} */}
          <input className={classes.input} type="date" name="" id="" />
          <input className={classes.input} type="date" name="" id="" />
          <Button className={classes.btn}> Generate</Button>
        </form>
      </div>
    </div>
  );
};

export default CohortAttendanceReport;

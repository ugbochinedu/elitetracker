import SideBar from "../sideBar/SideBar";
import classes from "./setTime.module.css"
import Button from "../../UI/button/Button";
import { useState } from "react";

const SetTime = ()=> {
  const [startHour, setStartHour] = useState("")
  const [startMinute, setStartMinute] = useState("")
  const [endHour, setEndHour] = useState("")
  const [endMinute, setEndMinute] = useState("")
  const [message, setMessage] = useState("")

    const startTimeHandler = (e)=> {
      parseStartTime(e.target.value.toString());
    }

   const endTimeHandler = (e) => {
     parseEndTime(e.target.value.toString());
   };

    function parseStartTime(timeString) {
      let hour = 0;
      let minute = 0;
      const timeParts = timeString.split(":");

      if (timeParts.length === 2) {
        const hourStr = timeParts[0];
        const minuteStr = timeParts[1];
        hour = parseInt(hourStr, 10);
        minute = parseInt(minuteStr, 10);

        if (hourStr.length > 0 && hourStr.charAt(0) === "0") {
          hour = parseInt(hourStr.substring(1), 10);
          setStartHour(hour)
        }
        if (
          minuteStr.length > 1 &&
          minuteStr.charAt(0) === "0" &&
          minuteStr.charAt(1) > "8"
        ) {
          minute = parseInt(minuteStr.charAt(1), 10);
          setStartMinute(minute)
        }
      }
    }

      function parseEndTime(timeString) {
      let hour = 0;
      let minute = 0;
      const timeParts = timeString.split(":");

      if (timeParts.length === 2) {
        const hourStr = timeParts[0];
        const minuteStr = timeParts[1];
        hour = parseInt(hourStr, 10);
        minute = parseInt(minuteStr, 10);

        if (hourStr.length > 0 && hourStr.charAt(0) === "0") {
          hour = parseInt(hourStr.substring(1), 10);
          setEndHour(hour)
        }
        if (
          minuteStr.length > 1 &&
          minuteStr.charAt(0) === "0" &&
          minuteStr.charAt(1) > "8"
        ) {
          minute = parseInt(minuteStr.charAt(1), 10);
          setEndMinute(minute)
        }
      }
    }

    const submitHandler = async (e)=>{
      e.preventDefault()

      const details ={
        startHour: startHour,
        startMinute: startMinute,
        endHour: endHour,
        endMinute: endMinute
      };

      try {
        const response = await axios.post(
          " https://elitestracker-production.up.railway.app/api/v1/admin/setTimeFrame",
          details
        );

        console.log("Data sent successfully:", response.data);
        console.log("response", response.status)
        setMessage(response.data.data)

      } catch (error) {
      setError(error.response.data.data);
      console.log(error.response.data.data);
      }
    }

    return (
      <div className={classes.main}>
        <SideBar />
        <div className={classes.innerContainer}>
          <h1>Set Attendance Time</h1>
          <h2>Hi Admin,</h2>
          <form action="" onSubmit={submitHandler}>
            <div className={classes["time-input"]}>
              <div>
                <p>Start</p>
                <input type="time" onChange={startTimeHandler} name="time" id="" />
              </div>
              <div>
                <p>End</p>
                <input type="time" onChange={endTimeHandler} name="time" id="" />
              </div>
            </div>
            <div className={classes.flexBtn}>
              <Button className={classes.button}>Submit</Button>
              <Button className={classes.button}>Cancel</Button>
            </div>
          </form>
          {message && <h1 className={classes.message}>{message}</h1>}
        </div>
      </div>
    );
};

export default SetTime;
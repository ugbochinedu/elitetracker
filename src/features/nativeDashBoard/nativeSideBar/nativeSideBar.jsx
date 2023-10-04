import { Link } from "react-router-dom";
import semiImage from "../../../assests/images/semi.png";
import classes from './nativeSideBar.module.css'
import {faUserCheck, faClockRotateLeft, faRightFromBracket, faChartSimple, faComputer} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NativeSideBar = () => {

  return (
    <div className={classes.sideBar}>
      <div className={classes.logo}>
        <img src={semiImage} alt="Semicolon image" />
        <h1>SEMICOLON</h1>
      </div>
      <div className={classes.sideBarItems}>
        <div className={classes.linkContainer}>
          <Link to={"/native/takeAttendance"} className={classes.Link}>
            <FontAwesomeIcon icon={faUserCheck} />
            <p>Take Attendance</p>
          </Link>
        </div>
        <div className={classes.linkContainer}>
          <Link to={"/generateNativeAttendance"} className={classes.Link}>
            <FontAwesomeIcon icon={faClockRotateLeft} />
            <p>Generate Attendance Log</p>
          </Link>
        </div>
        <div className={classes.linkContainer}>
          <Link to={"/attendanceInGraph"} className={classes.Link}>
            <FontAwesomeIcon icon={faChartSimple} />
            <p>Check Attendance History</p>
          </Link>
        </div>
        <div className={classes.linkContainer}>
          <Link to={"/resetDevice"} className={classes.Link}>
            <FontAwesomeIcon icon={faComputer} />
            <p>Reset Device</p>
          </Link>
        </div>
        <div className={classes.linkContainer}>
          <div className={classes.LinkLogoutContain}>
            <Link to={"/"} className={classes.LinkLogout}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <p>Logout</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NativeSideBar;

import classes from "./SideBar.module.css"
import { Link } from "react-router-dom";  
import semiImage from "../../../assests/images/semi.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from "@fortawesome/free-solid-svg-icons/faHouse";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {faUserMinus} from "@fortawesome/free-solid-svg-icons";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {faChartSimple} from "@fortawesome/free-solid-svg-icons";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {faUserPen} from "@fortawesome/free-solid-svg-icons";


const SideBar = () =>{
    return (
      <div className={classes.sideBar}>
        <div className={classes.logo}>
          {/* <h2>{semiImage}</h2> */}
          <img src={semiImage} alt="Semicolon image"/>
          <h1>SEMICOLON</h1>
        </div>
        <div className={classes.sideBarItems}>
          <div className={classes.linkContainer}>
              <Link to={"/adminHome"} className={classes.Link}>
              <FontAwesomeIcon icon={faHouse} /><p>Home</p>
              </Link>
          </div>
          <div className={classes.linkContainer}>
              <Link to={"/addAdmin"} className={classes.Link} >
              <FontAwesomeIcon icon={faUserPlus} /><p>Add Admin</p>
              </Link>
          </div>
          <div className={classes.linkContainer}>
              <Link to={"/removeAdmin"} className={classes.Link} >
              <FontAwesomeIcon icon={faUserMinus} /><p>Remove Admin</p>
          </Link>
          </div>
          <div className={classes.linkContainer}>
              <Link to={"/addCohort"} className={classes.Link} >
              <FontAwesomeIcon icon={faCirclePlus} /><p>Add Cohort</p>
              </Link>
          </div>
          <div className={classes.linkContainer}>
              <Link to={"/removeCohort"} className={classes.Link} >
              <FontAwesomeIcon icon={faCircleXmark} /><p>Remove Cohort</p>
              </Link>
          </div>
          <div className={classes.linkContainer}>
              <Link to={"/cohortAttendance"} className={classes.Link} >
              <FontAwesomeIcon icon={faChartSimple} /><p>Cohort's Attendance Status</p>
              </Link>
          </div>
          <div className={classes.linkContainer}>
              <Link to={"/nativeAttendance"} className={classes.Link} >
              <FontAwesomeIcon icon={faCircleUser} /><p>Native's Attendance Status</p>
              </Link>
          </div>
          <div className={classes.linkContainer}>
              <Link to={"/editAttendanceStatus"} className={classes.Link} >
              <FontAwesomeIcon icon={faPenToSquare} /><p>Edit Attendance Status</p>
              </Link>
          </div>
          <div className={classes.linkContainer}>
              <Link to={'/generateNativeAttendanceReport'} className={classes.Link} >
              <FontAwesomeIcon icon={faUserPen} /><p>Generate Native's Attendance Report</p>
              </Link>
          </div>
          <div className={classes.linkContainer}>
              <Link to={"/generateCohortAttendanceReport"} className={classes.Link} >
              <FontAwesomeIcon icon={faUsers} /><p>Generate Cohort's Attendance Report</p>
              </Link>
          </div>
          <div className={classes.linkContainer}>
              <Link to={"/setAttendanceTime"} className={classes.Link} >
              <FontAwesomeIcon icon={faClock} /><p>Set Attendance Time</p>
              </Link>
          </div>
          <div className={classes.linkContainer}>
              <Link to={"/"} className={classes.Link} >
              <FontAwesomeIcon icon={faArrowRightFromBracket} /><p>Logout</p>
              </Link>
          </div>
        </div>
      </div>
    );
};

export default SideBar;
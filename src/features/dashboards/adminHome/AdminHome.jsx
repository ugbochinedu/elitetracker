import SideBar from "../sideBar/SideBar";
import classes from "./adminHome.module.css";

const AdminHome = () => {
  return (
    <div className={classes.main}>
      <SideBar />
      <div className={classes.image}></div>
    </div>
  );
};

export default AdminHome;

import React, { useEffect, useState } from "react";
import AuthImage from "../../reusables/AuthImages";
import Button from "../../UI/button/Button";
import axios from "axios";
import classes from "./styles/signUp.module.css";
import { useNavigate } from "react-router-dom";
import Card from "../../UI/card/Card";
import semiImage from "../../../assests/images/semi.png";
import { getIpAddress} from "../../../utils";


const SignUp = () => {
  // const initialValue = {
  //   email: "",
  //   scv: "",
  //   password: "",
  //   confirmPassword: "",
  // };

  // const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [scv, setScv] = useState("");
  const [detail, setDetail] = useState("");
  const [successfulMessage, setSuccessfulMessage] = useState("")

  const navigate = useNavigate();

  async function apiCall() {
    const ipAddress = await getIpAddress();
    console.log("Ip addrress -> ", ipAddress);
  }

  apiCall();

  //  function uniqueUUID() {
  //    const uniqueCode = UUID();
  //    console.log("unique addrress -> ", uniqueCode);
  //  }

  //  uniqueUUID();

  // const getUserIpAddress = () => {
  //   fetch(
  //     "https://geolocation-db.com/json/fd18cb60-5f5a-11ee-87d3-bd3f0d7c4f89"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setDetail(data));
  // };

  // getUserIpAddress();

    const getUserIpAddress = () => {
    fetch("https://api.ipify.org")
      .then((response) => response.text())
      .then((response) => console.log("new response", response))
      .then((ip) => setDetail("first ip", ip))
      .then((ip) => console.log("new Ip", ip))
      .catch((err) => console.log(err));
  };

  getUserIpAddress();



  console.log(detail);
  // console.log("new Ip", detail.IPv4);

  // async function callApi() {
  //   const userIp = await getUserIpAddress();
  //   console.log("New Ip addrress -> ", userIp);
  // }

  // callApi();

  // console.log("hfdjhsfdhjshg");
  

  // const getUserIp = async () =>{
  //   const ip = await axios.get("https://ipapi.co/json")
  //   console.log("new ip",ip.data)
  //   console.log("new ip", ip.data.ip);
  // }

  // getUserIp()

  // const validatePassword = () =>{
  //   if(confirmPassword === password){
  //     setVerifyPassword(confirmPassword)
  //   }else{
  //     setPasswordError("Your password doesn't match")
  //   }
  // }

  // const onChangleHandler = (e) => {
  //   setData((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    // console.log("Width", screenWidth)
    // console.log("height", screenHeight);

    setScreenWidth(screenWidth);
    setScreenHeight(screenHeight);
    
  }, []);

  const onSumbitHandler = async (e) => {
    e.preventDefault();

    if (confirmPassword === password) {
      setConfirmPassword(confirmPassword);
      // console.log(password)
      // console.log("final pass",confirmPassword)
      // console.log(verifiedPassword)    
    } else {
      setPasswordError("Your password doesn't match");
      return;
    }

    const userDetails = {
      semicolonEmail: email,
      scv: scv,
      // password: verifiedPassword,
      password: confirmPassword,
      screenWidth: screenWidth,
      screenHeight: screenHeight,
    };

    // console.log(userDetails.semicolonEmail.includes("native"));
    // console.log(userDetails)

    try {
      const response = await axios.post(
        // "https://foodapp-3a5aa-default-rtdb.firebaseio.com/orders.json",
        "https://elitestracker-production.up.railway.app/api/v1/user/register",
        userDetails
      );
      // console.log(userDetails)

      console.log("Data sent successfully:", response.data);
      setSuccessfulMessage(response.data.message);
      // console.log("response", response.status);

      if(response.status === 200){
        console.log(userDetails);
         if (userDetails.semicolonEmail.includes("native")) {
           setTimeout(() => {
             navigate("/");
            }, 1800);
           
         } else {
          setTimeout(() => {
            navigate("/adminHome");
          }, 1800);          
         } 
      } else {
         throw new Error("Network Error");
       }
    } catch (error) {
      // console.log(error.response.data.data);
      // console.log(error.response);
      // console.log(error.message);
      // setError(error.response);
      // setError(error.message)
      // setError(error.response.data.data);
      if (error.message === "Network Error") {
        setError(error.message);
      } else {
        setError(error.response.data.data);
      }
      
    }

    // setData("");

    // e.preventDefault();
    //  if (data.password !== confirmPassword) {
    //    setPasswordError("Your password doesn't match");

    //    return;
    //  }
    // const userDetails = {
    //   semicolonEmail: data.email,
    //   scv: data.scv,
    //   password: data.password,
    //   screenWidth: screenWidth,
    //   screenHeight: screenHeight,
    // };

    // console.log(userDetails.semicolonEmail.includes("native"));

    // await axios.post("https://foodapp-3a5aa-default-rtdb.firebaseio.com/orders.json",
    //     userDetails
    //   )
    //   .then((response) => {
    //     console.log("Data sent successfully:", response.data);
    //     if(userDetails.semicolonEmail.includes("native")){
    //       navigate("/takeAttendance");
    //     }else{
    //       navigate("/adminHome");
    //     }
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       setError(`Response Error: ${error.response.status}`);
    //     }
    //   });
    //   setData("");
  };
  return (
    <Card>
      <div className={classes.mainContainer}>
        <div>
          <AuthImage />
        </div>
        <div className={classes.formContainer}>
          {/* <div className={classes.flexLogoText}>
            <div className={classes.logo}>
              <img src={semiImage} alt="Semicolon image" />
            </div>
            <h1>SEMICOLON</h1>
          </div> */}
          <p className={classes.register}>REGISTER</p>
          <form action="" className={classes.form} onSubmit={onSumbitHandler}>
            {successfulMessage && <h2 className={classes.message}>{successfulMessage}</h2>}
            {error && <h2 className={classes.error}>{error}</h2>}
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <div>
              <input
                placeholder="semicolon email"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                // value={data.email}
                required
              />
            </div>
            <label htmlFor="scv">
              SCV
              {/* <span>*</span> */}
            </label>
            <div>
              <input
                placeholder="Natives only"
                type="text"
                name="scv"
                onChange={(e) => setScv(e.target.value)}
                // value={data.scv}
                // required
              />
            </div>
            {passwordError && <p className={classes.error}>{passwordError}</p>}
            <label htmlFor="password">
              Password <span>*</span>
            </label>
            <div>
              <input
                // placeholder="password"

                placeholder=""
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                // value={data.password}
                required
              />
            </div>
            <label htmlFor="password">
              Confirm password <span>*</span>
            </label>
            <div>
              <input
                type="password"
                // value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder=""
                required
              />
            </div>
            <Button className={classes.button}>Sign up</Button>
          </form>
          <div>
            <Button
              className={classes.loginBtn}
              onClick={() => {
                navigate("/");
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SignUp;

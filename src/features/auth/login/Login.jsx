// import React, {useState } from 'react';
// import classes from "./styles/login.module.css"
// import AuthImage from "../../reusables/AuthImages";
// import Card from '../../UI/card/Card';
// import Button from '../../UI/button/Button';
// import { useNavigate, Link } from 'react-router-dom';
// import semiImage from '../../../assests/images/semi.png'

// const Login =() => {
//   const initialValue = {
//     email: "",
//     password: "",
//   };

//   const [data, setData] = useState(initialValue);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const onChangleHandler = (e) => {
//     setData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const onSumbitHandler = async (e) => {
//     e.preventDefault();
//     const userDetails = {
//       email: data.email,
//       password: data.password,
//     };

//     fetch("http://localhost:8092/api/v1/user/register", userDetails)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Response data:", data);
//         if (data.semicolonEmail.includes("native")) {
//           console.log("i am here");
//           navigate("/takeAttendance");
//         } else {
//           navigate("/adminHome");
//         }
//       })
//       .catch((error) => {
//         setError(error);
//       });
//   };

//   const onClickHandler = () => {
//     navigate("/Signup");
//   };

//   return (
//     <Card>
//       <div className={classes.mainContainer}>
//         <div>
//           <AuthImage />
//         </div>
//         <div className={classes.formContainer}>
//           <div className={classes.flexLogoText}>
//             <div className={classes.logo}>
//               {/* <h2>{semiImage}</h2> */}
//               <img src={semiImage} alt="Semicolon image" />
//             </div>
//             <h1>SEMICOLON</h1>
//           </div>
//           <p className={classes.loginText}>LOGIN</p>
//           <form action="" onSubmit={onSumbitHandler} className={classes.form}>
//             {error && <p className={classes.error}>{error.message}</p>}
//             <label htmlFor="">
//               Email <span>*</span>
//             </label>
//             <br></br>
//             <input
//               type="text"
//               name="email"
//               placeholder="Semicolon email"
//               className={classes.input}
//               onChange={onChangleHandler}
//               required
//             />
//             <br></br>

//             <label htmlFor="">
//               Password <span>*</span>
//             </label>
//             <br></br>
//             <input
//               type="password"
//               placeholder=""
//               name="password"
//               onChange={onChangleHandler}
//               className={classes.input}
//               required
//             />
//             <br></br>
//             <br></br>
//             <Button className={classes.button}>Login</Button>
//           </form>
//           <div className={classes.flexBtn}>
//             <Button className={classes.registerBtn} onClick={onClickHandler}>
//               Register
//             </Button>
//             {/* <Button className={classes.registerBtn} onClick={onClickHandler}> */}
//             <Link className={classes.registerBtn} to={"/forgottenPassword"}>
//               forgotten password
//             </Link>
//             {/* </Button> */}
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// }


// export default Login;

import React, { useState } from "react";
import classes from "./styles/login.module.css";
import AuthImage from "../../reusables/AuthImages";
import Card from "../../UI/card/Card";
import Button from "../../UI/button/Button";
import { useNavigate, Link } from "react-router-dom";
// import semiImage from "../../../assests/images/semi.png";
import axios from "axios";

const Login = (props) => {
  const initialValue = {
    email: "",
    password: "",
  };

  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [networkError, setNetworkError] = useState("");
  const navigate = useNavigate();

  const onChangleHandler = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    const userDetails = {
      semicolonEmail: data.email,
      password: data.password,
    };

    console.log(userDetails)

    try {
      const response = await axios.post(
        "https://elitestracker-production.up.railway.app/api/v1/user/loginUser",
        userDetails
      );
      console.log(response)
      console.log( JSON.stringify(response));
      if(response.status === 200){
        const jwtToken = JSON.stringify(response.data.jwtToken);
        console.log(jwtToken)
        sessionStorage.setItem("jwtToken", jwtToken);
        sessionStorage.setItem('firstName', JSON.stringify(response.data.firstName));
        sessionStorage.setItem('semicolconEmail', JSON.stringify(response.data.semicolonEmail));
        sessionStorage.setItem('isLoggedIn', JSON.stringify(response.data.loggedIn));
        
        if (response.data.semicolonEmail.includes("native")) {
          console.log("I am here");
          navigate("/native/takeAttendance");
        } else {
          navigate("/adminHome");
        }
      } else {
         throw new Error("Network Error");
       }
    } catch (error) {
      console.log(error)
      
      if(error.message === "Network Error"){
        setNetworkError(error.message);
      }else{
        setError(error.response.data.data);
      }
    }
     
    //  console.log(typeof email);
    //  console.log(email.length);

  };

 

  const onClickHandler = () => {
    navigate("/Signup");
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
              <h2>{semiImage}</h2>
              <img src={semiImage} alt="Semicolon image" />
            </div>
            <h1>SEMICOLON</h1>
          </div> */}
          <p className={classes.loginText}>LOGIN</p>
          <form action="" onSubmit={onSubmitHandler} className={classes.form}>
            {error && <p className={classes.error}>{error}</p>}
            {networkError && <p className={classes.error}>{networkError}</p>}
            <label htmlFor="">
              Email <span>*</span>
            </label>
            <br></br>
            <input
              type="text"
              name="email"
              placeholder="Semicolon email"
              className={classes.input}
              onChange={onChangleHandler}
              required
            />
            <br></br>

            <label htmlFor="">
              Password <span>*</span>
            </label>
            <br></br>
            <input
              type="password"
              placeholder=""
              name="password"
              onChange={onChangleHandler}
              className={classes.input}
              required
            />
            <br></br>
            <br></br>
            <Button className={classes.button}>Login</Button>
          </form>
          <div className={classes.flexBtn}>
            <Button className={classes.registerBtn} onClick={onClickHandler}>
              Register
            </Button>
            {/* <Button className={classes.registerBtn} onClick={onClickHandler}> */}
            <Link className={classes.registerBtn} to={"/forgottenPassword"}>
              forgotten password
            </Link>
            {/* </Button> */}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Login;
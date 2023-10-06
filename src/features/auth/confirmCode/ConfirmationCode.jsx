import Button from "../../UI/button/Button";
import AuthImage from "../../reusables/AuthImages";
import classes from './confirmationCode.module.css';
import semiImage from '../../../assests/images/semi.png'
import { useNavigate } from "react-router-dom";
import { useRef} from "react";

const ConfirmForgottenPasswordCode = () => {

  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

//   const [firstInput, setFirstInput] = useState("")
//   const [secondInput, setSecondInput] = useState("");
//   const [thirdInput, setThirdInput] = useState("");
//   const [fourthInput, setFourthInput] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) =>{
    e.preventDefault()

    // const inputRefs = (firstInput + secondInput + thirdInput + fourthInput)
    console.log(inputRefs)
    console.log(typeof inputRefs)

    const confirmationCode = {
      code: inputRefs
    }

    console.log(confirmationCode)

    try {
      const response = await axios.post(
        // "https://elitestracker-production.up.railway.app/api/v1/user/confirmationCode",
        confirmationCode
      );
      console.log(response)
      if(response.status === 200){
        navigate("/");
      } else {
        throw new Error("Network Error");
      }
      } catch (error) {
        console.log(error)

        if(error.message === "Network Error"){
          setError(error.message);
        }else{
          setError(error.response.data.data);
        }
      }
    navigate("/resetPassword");
  }

 

 return (
   <div className={classes.mainContainer}>
     <AuthImage />
     <div className={classes.formContainer}>
       <p>Confirmation Code</p>
       <form action="" className={classes.form} onSubmit={submitHandler}>
         {[0, 1, 2, 3].map((index) => (
           <input
             key={index}
             type="text"
             maxLength="1"
             ref={inputRefs[index]}
             onChange={(e) => handleChange(e, index)}
           />
         ))}
         <Button className={classes.Btn}>Submit</Button>
       </form>
     </div>
   </div>
 );

//   return (
//     <div className={classes.mainContainer}>
//       <AuthImage/>
//       <div className={classes.formContainer}>
//         <p>Confirmation Code</p>
//         <form action="" onSubmit={submitHandler}>
//           <div className={classes.form}>
//             <input type="number" maxlength="1" onChange={(e) => setFirstInput(e.target.value)}  required />
//             <input type="number" maxlength="1" onChange={(e) => setSecondInput(e.target.value)} required />
//             <input type="number" maxlength="1" onChange={(e) => setThirdInput(e.target.value)} required />
//             <input type="number" maxlength="1" onChange={(e) => setFourthInput(e.target.value)} required />
//           </div>
//           <Button className={classes.Btn}>Submit</Button>
//         </form>
//       </div>
//     </div>
//   );
};

export default ConfirmForgottenPasswordCode;

// import React, { useRef } from "react";

// const ConfirmationCodeInput = () => {
 

 
// };

// export default ConfirmationCodeInput;

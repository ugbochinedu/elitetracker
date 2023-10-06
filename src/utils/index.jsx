import axios from "axios";

export const getIpAddress = async () => {
  try {
    const response = await axios.get("https://api.ipify.org?format=json");
    console.log("ip adddd ", response.data.ip);
    return response.data.ip;
  } catch (error) {
    console.error("Error fetching IP address:", error);
    return null;
  }
};

// export const getUserIpAddress = () =>{
//   fetch("https://geolocation-db.com/json/fd18cb60-5f5a-11ee-87d3-bd3f0d7c4f89")
//   .then(response => response.json())
//   .then (data => (data))
//   return data.IPv4
// }

// import React, { useEffect } from "react";


// export function UUID() {

//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Check if the UUID exists in local storage
//     const storedUUID = localStorage.getItem("uuid");
//     const userIp = getIpAddress();

//     if (storedUUID) {
//       // If the UUID is already in local storage, send it to the server
//       const uniqueCode = userIp + storedUUID;
//       console.log(uniqueCode)
//       sendUUIDToServer(uniqueCode);
//     } else {
//       // If the UUID doesn't exist, generate a new one
//       const newUUID = uidv4();

//       // Store the new UUID in local storage
//       localStorage.setItem("uuid", newUUID);
//       const uniqueCode = userIp + storedUUID;
//       console.log(uniqueCode);
//       // Send the new UUID to the server
//       sendUUIDToServer(uniqueCode);
//     }
//   }, []);

//   const sendUUIDToServer = (uuid) => {
//     // Replace this with your server communication logic 
//     fetch("your-server-endpoint", {
//       method: "POST",
//          headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ uuid }),
//     })

//       .then((response) => {
//         if (response.ok) {
//           console.log("UUID sent successfully")
//         } else {
//           throw new Error("Network Error");
//         }
//       })
//       .catch((error) => {
//          console.log(error);

//          if (error.message === "Network Error") {
//            setError(error.message);
//          } else {
//            setError(error.response.data.data);
//          }
//       });
//   };

//   // return <div className="App">{/* Your React application content */}</div>;
// }

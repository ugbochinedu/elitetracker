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

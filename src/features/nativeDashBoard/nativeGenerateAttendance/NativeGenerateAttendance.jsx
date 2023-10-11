import React, { useState } from "react";
// import SideBar from "../nativeSideBar/nativeSideBar";
import NativeSideBar from "../nativeSideBar/nativeSideBar";
import classes from "./nativeGenerateAttendance.module.css";
import Button from "../../UI/button/Button";

const NativeGenerateAttendanceReport = () => {
 
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState("")

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = responseData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(responseData.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  const startDateHandler = (e) => {
    setStartDate(e.target.value);
    console.log(startDate);
  };

  console.log(startDate);
  const endDateHandler = (e) => {
    setEndDate(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submitted")

    const semicolonEmail = sessionStorage.getItem("semicolonEmail");

    const dateDetails = {
      startDate:startDate,
      endDate: endDate,
      nativeSemicolonEmail: semicolonEmail,
      // adminSemicolonEmail: "",
      // cohort: "",
    };

    console.log(dateDetails)

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https:elitestracker-production.up.railway.app/api/v1/natives/generateReportForSelf",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dateDetails),
          }
        );
        const data = await response.json();
        console.log(data)

        if (response.status === 200) {
          setResponseData(data);
        } else {
          throw new Error("Network Error");
        }
      } catch (error) {
        if (error.message === "Network Error") {
          setError(error.message);
        } else {
          setError(error.response.data.data);
        }
      }
    };
    fetchData();
  };

  return (
    <div className={classes.main}>
      <NativeSideBar />
      <div className={classes.innerContainer}>
        <p>Generate Native's Attendance Report</p>
        {error && <p className={classes.error}>{error}</p>}
        <form action="" onSubmit={submitHandler} className={classes.formInput}>
          <input
            className={classes.input}
            onChange={startDateHandler}
            type="date"
            name=""
            id=""
          />
          <input
            className={classes.input}
            onChange={endDateHandler}
            type="date"
            name=""
            id=""
          />
          <Button className={classes.btn}> Generate</Button>
        </form>
        <table className={classes.viewTable}>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Date & Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* {responseData.map((data) => {
              const { serialNumber , firstName, lastName, cohort, date, attendanceStatus} = responseData;
            })} */}

             {
                records.map((data) => {
                  return (
                    <tr key={data.serialNumber}>
                      <td>{data.serialNumber}</td>
                      <td>{data.date}</td>
                      <td>{data.attendanceStatus}</td>
                    </tr>
                  );
                })
              }
          </tbody>
        </table>
        <nav>
          <ul className={classes.flexPagenation}>
            <li>
              <a href="#" className={classes.prePage} onClick={prePage}>
                Prev
              </a>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`pageItems $(currentPage === n ? 'active' : '')`}
                key={i}
              >
                <a
                  href="#"
                  className={classes.pages}
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </a>
              </li>
            ))}
            <li>
              <a href="#" className={classes.prePage} onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NativeGenerateAttendanceReport;
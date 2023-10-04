import React, { useState } from "react";
// import SideBar from "../nativeSideBar/nativeSideBar";
import NativeSideBar from "../nativeSideBar/nativeSideBar";
import classes from "./nativeGenerateAttendance.module.css";
import Button from "../../UI/button/Button";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const NativeGenerateAttendanceReport = () => {
 
  const attendanceReport = [
    {
      serialNumber: "1",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "2",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "1",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "3",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "4",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "5",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "6",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "7",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "1",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "8",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "9",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "10",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "11",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "12",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "13",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "14",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "15",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "16",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "17",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "18",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "19",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "1",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "1",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "1",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "1",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "1",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "1",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "1",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "1",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "1",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "1",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "1",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "1",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "1",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "1",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "1",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "1",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "1",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "1",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
    {
      serialNumber: "1",
      firstName: "chinedu",
      lastName: "ugbo",
      cohort: "13",
      date: "22/12/2023",
      attendanceStatus: "P",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = attendanceReport.slice(firstIndex, lastIndex);
  const npage = Math.ceil(attendanceReport.length / recordsPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [responseData, setResponseData] = useState("");

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

  const startDateHandler = (e)=>{
    setStartDate(e.target.value)
    console.log(startDate);
  }

  console.log(startDate);
    const endDateHandler = (e) => {
      setEndDate(e.target.value);
    };

    const submitHandler = async (e) =>{
      e.preventDefault()

      const semicolonEmail = sessionStorage.getItem("semicolonEmail");

      dateDetails = {
        startDate: startDate,
        endDate: endDate,
        semicolonEmail: semicolonEmail,
      }

       try {
      const response = await axios.post(
        "https://elitestracker-production.up.railway.app/api/v1/natives/generateReportForSelf",
        dateDetails
      );
      console.log(response.data)
      setResponseData(response.data)
    } catch (error) {
      setError(error.response.data.data);
      console.log(error.response.data.data)
    }
    }

    // const { serialNumber , firstName, lastName, cohort, date, attendanceStatus} = responseData;

  return (
    <div className={classes.main}>
      <NativeSideBar />
      <div className={classes.innerContainer}>
        <p>Generate Native's Attendance Report</p>
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
            <th>S/N</th>
            <th>Name</th>
            <th>Date</th>
          </thead>
          <tbody>
            {records.map((report, i) => (
              <tr key={i}>
                <td>{report.serialNumber}</td>
                <td>
                  {report.firstName} {report.lastName}
                </td>
                <td>{report.attendanceStatus}</td>
              </tr>
            ))}
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
                <a href="#" className={classes.pages} onClick={() => changeCPage(n)}>
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

      {/* <table className="view-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {viewlog.map((viewlog, index) => (
            <tr key={index}>
              <td>{viewlog.Date}</td>
              <td>{viewlog.Name}</td>
              <td>{viewlog.Result}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default NativeGenerateAttendanceReport;
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// function NativeGenerateAttendanceReport() {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     console.log(date);
//   };

//   return (
//     <div>
//       <h2>Calendar Input</h2>
//       <DatePicker
//         selected={selectedDate}
//         onChange={handleDateChange}
//         dateFormat="dd/MM/yyyy"
//         placeholderText="dd/mm/yyyy"
//       />
//       {selectedDate && (
//         <p>Selected Date: {selectedDate.toLocaleDateString("en-GB")}</p>
//       )}
//     </div>
//   );
// }

// export default NativeGenerateAttendanceReport;
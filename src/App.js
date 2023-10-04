import SignUp from "./features/auth/register/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./features/auth/login/Login";
import AdminHome from "./features/dashboards/adminHome/AdminHome";
// import SideBar from "./features/dashboards/sideBar/SideBar";
import SetTime from "./features/dashboards/attendanceTime/SetTime";
import GenerateNativeAttendance from "./features/dashboards/native'sAttendanceReport/NativesAttendanceReport"
import GenerateCohortAttendance from "./features/dashboards/cohortAttendanceReport/Cohort'sAttendanceReport"
import DisableNativesAttendance from "./features/dashboards/cohort'sAttendance/Cohort'sAttendance";
import EnableNativesAttendance from "./features/dashboards/native'sAttendance/native'sAttendance";
import ForgottenPassword from "./features/auth/forgottenPassword/forgottenPassword";
import ConfirmForgottenPasswordCode from "./features/auth/confirmCode/ConfirmationCode";
import AttendanceInGraph from "./features/nativeDashBoard/attendanceInGraph/AttendanceInGraph";
// import NativeSideBar from "./features/nativeDashBoard/nativeSideBar/nativeSideBar";
import TakeAttendance from "./features/nativeDashBoard/takeAttendance/TakeAttendance";
// import NativeAttendanceReport from "./features/nativeDashBoard/nativeGenerateAttendance/NativeGenerateAttendance";
import NativeGenerateAttendanceReport from "./features/nativeDashBoard/nativeGenerateAttendance/NativeGenerateAttendance";
import CreateAdminForm from "./features/dashboards/add_removeAdmin/addAdmin/AddAdmin";
import AddNative from "./features/dashboards/add_removeNative/addNative/AddNative";
import RemoveNative from "./features/dashboards/add_removeNative/removeNative/RemoveNative";
import ResetDeviceForm from "./features/nativeDashBoard/resetDevice/ResetDevice";
import ConfirmResetPassword  from "./features/auth/confirmPassword/ConfirmResetPassword";
import PrivateRoute from "./utils/PrivateRoute";


function App() {

  return (
    <Router>
      <Routes>
        <Route  element={<PrivateRoute/>}>
          <Route path="/addAdmin" element={<CreateAdminForm/>} />
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/setAttendanceTime" element={<SetTime />} />          
          <Route path="/addNative" element={< AddNative/>} />
          <Route path="/generateNativeAttendanceReport" element={<GenerateNativeAttendance/>}/>
          <Route path="/generateCohortAttendanceReport" element={<GenerateCohortAttendance/>}/>
          <Route path="/cohortAttendance" element={<DisableNativesAttendance/>}/>
          <Route path="/nativeAttendance" element={<EnableNativesAttendance/>}/>          
          <Route path ="/confirmationCode" element ={<ConfirmForgottenPasswordCode/>}/>
          <Route path="/removeNative" element={<RemoveNative/>} />
          <Route path="/native/takeAttendance" element={<TakeAttendance/>} />
          <Route path="/generateNativeAttendance" element={<NativeGenerateAttendanceReport/>} />
          <Route path="/resetDevice" element={<ResetDeviceForm/>} />   
          <Route path= "/attendanceInGraph" element={<AttendanceInGraph/>} />
        </Route>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgottenPassword" element={<ForgottenPassword/>}/>   
        <Route path="/resetPassword" element={<ConfirmResetPassword/>}/>
      </Routes>
    </Router>
  );
}

export default App;

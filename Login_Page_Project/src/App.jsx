import Login from "./components/Login/Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import OtpPage from "./components/otppage/OtpPage.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import AddUser from "./components/AddUser/AddUser.jsx";

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route exact path="/otppage" element={<OtpPage/>}/>
            <Route exact path="/signup" element={<Signup/>} />
            <Route exact path="/dashboard" element={<Dashboard/>} />
            <Route exact path="/adduser" element={<AddUser/>}/>
          </Routes>
        </Router>
    </>
  );
}

export default App;

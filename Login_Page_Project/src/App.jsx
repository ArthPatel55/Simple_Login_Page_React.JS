import Login from "./components/Login/Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Welcome from "./components/Welcome/Welcome.jsx";
import OtpPage from "./components/otppage/OtpPage.jsx";
import Signup from "./components/Signup/Signup.jsx";

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route exact path="/otppage" element={<OtpPage/>}/>
            <Route exact path="/signup" element={<Signup/>} />
            <Route exact path="/welcome" element={<Welcome/>} />
          </Routes>
        </Router>
    </>
  );
}

export default App;

import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome.jsx";
import OtpPage from "./components/otppage/OtpPage.jsx";
import Singup from "./components/Signup/Singup.jsx";

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/otppage" element={<OtpPage/>}/>
            <Route path="/singup" element={<Singup/>}/>
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;

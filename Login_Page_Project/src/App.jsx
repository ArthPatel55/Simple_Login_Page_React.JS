import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome.jsx";
import OtpPage from "./components/otppage/OtpPage.jsx";

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/otppage" element={<OtpPage/>}/>
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;

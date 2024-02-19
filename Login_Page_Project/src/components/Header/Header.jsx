import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const handlelogout = async () => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken)
    const response = await fetch(
      "http://192.168.1.28:4000/api/v1/user/logout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `Bearer ${accessToken}`,
        },
      }
    );
    console.log("Res-> ", response);
    if (response.ok) {
      localStorage.removeItem("accessToken");
      navigate("/");
    }
  };
  return (
    <>
      <div className="header">
        <h1 className="title_ds">Dashboard Header</h1>
        <div className="logout_btn_body">
          <button className="logout_btn" onClick={handlelogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Side_Panel from "../Side_Panel/Side_Panel";
import "./EditPage.css";
const EditPage = () => {
  const navigate = useNavigate();
  const { data } = useParams();
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [userName, setUserName] = useState("");
  const [editData, setEditData] = useState(null);
  const fetchData = async (id) => {
    try {
      const apiUrl = `http://192.168.1.28:3000/api/customers/getById/${id}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setEditData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (editData) {
      setUserName(editData.name || "");
      setUserEmail(editData.email || "");
      setUserPhone(editData.phone || "");
      setIsValid(editData.isValid || false);
    }
  }, [editData]);

  useEffect(() => {
    fetchData(data);
  }, [data]);

  const handleUpdateData = async (id, e) => {
    e.preventDefault();
    try {
      console.log("Data updated ");
      const response = await fetch(
        `http://192.168.1.28:3000/api/customers/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: userName,
            email: userEmail,
            phone: userPhone,
            isValid: isValid,
          }),
        }
      );
      console.log("res", response);
      if (response.ok) {
        const responseData = await response.json();
        console.log("Response Data:", responseData);
        navigate("/dashboard");
        console.log("Data updated successfully!");
      } else {
        console.error("Error updating data. Server returned status:", response.status);
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleInputChange = (e, field) => {
    if (field === "name") {
      setUserName(e.target.value);
    } else if (field === "email") {
      setUserEmail(e.target.value);
    } else if (field === "phone") {
      setUserPhone(e.target.value);
    } else if (field === "isValid") {
      setIsValid(e.target.value);
    }
  };
  return (
    <>
      <div className="contener">
        <Header />
        <div className="content-container">
          <Side_Panel />
          <main className="main_content">
            <form>
              <label htmlFor="username">Name</label>
              <input
                type="text"
                className="username"
                value={userName}
                onChange={(e) => handleInputChange(e, "name")}
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="email"
                value={userEmail}
                onChange={(e) => handleInputChange(e, "email")}
              />
              <label htmlFor="phone">Phone no.</label>
              <input
                type="number"
                className="phone"
                value={userPhone}
                onChange={(e) => handleInputChange(e, "phone")}
              />
              <div className="radio_btn">
                <label htmlFor="valid_customer" className="valid_customer">
                  Valid Customer
                </label>
                <input
                  type="radio"
                  className="valid"
                  name="valid_customer1"
                  value={true}
                  checked={isValid === true}
                  onChange={() => setIsValid(true)}
                />
                <label htmlFor="valid" className="radio_label">
                  Valid
                </label>
                <input
                  type="radio"
                  className="in_valid"
                  name="valid_customer1"
                  value={false}
                  checked={isValid === false}
                  onChange={() => setIsValid(false)}
                />
                <label htmlFor="in_valid" className="radio_label">
                  In-Valid
                </label>
              </div>
              <button
                onClick={(e) => handleUpdateData(data, e)}
                className="edit_btn"
              >
                Update
              </button>
            </form>
          </main>
        </div>
      </div>
    </>
  );
};

export default EditPage;

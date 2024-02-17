import React, { useState } from "react";
import "./AddUser.css";
import Header from "../Header/Header";
import Side_Panel from "../Side_Panel/Side_Panel";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    isvalid: false,
    phone: "",
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setIsvalid] = useState(false);
  const [phone, setPhone] = useState('');
  //   const handleInputChange = (fieldName, value) => {
  //     setNumberObject((prevData) => ({
  //         ...prevData,
  //         [fieldName]: value,
  //     }));
  // };

//   const handleChange = (fieldName, value) => {
//     // console.log(e, ' :  this is e')
//     console.log("fieldName-> ", fieldName);
    
//     // const inputValue = type === "checkbox" ? checked : value;
//     // console.log("input-> ", inputValue);
   
   
// };

const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      "name": name,
      "email": email,
      "isValid": isValid,
      "phone": phone
    };
  
    console.log("Request Data:", data);
  
    try {
      const response = await fetch("http://192.168.1.67:3000/api/customers/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      console.log("Response:", response.status, response.statusText);
  
      if (response.ok) {
        const responseData = await response.json();
        console.log("API Response:", responseData);
      } else {
        const errorData = await response.json();
        console.error("Error sending data to API:", errorData);
      }
    } catch (error) {
      console.error("Error sending data to API:", error.message);
    }
  };
  
  return (
    <>
      <div className="dashboard">
        <Header />
        <div className="content-container">
          <Side_Panel />
          <main className="main-content">
            <form className="Add_user_form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                className="name"
                onChange={e => setName(e.target.value)}
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                className="email"
                onChange={e => setEmail(e.target.value)}
                required
              />

              <label htmlFor="isvalid">Is Valid:</label>
              <input
                id="isvalid"
                type="checkbox"
                checked={isValid}
                onChange={e => setIsvalid(e.target.value ? true :false)}
                className="isvalid"
              />

              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                className="phone"
                onChange={e => setPhone(e.target.value)}
                pattern="[6-9]{1}[0-9]{9}"
                required
              />

              <button className="submit" type="submit">
                Submit
              </button>
            </form>
          </main>
        </div>
      </div>
    </>
  );
};

export default AddUser;

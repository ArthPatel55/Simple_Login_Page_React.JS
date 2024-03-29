import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Error from "../Error/Error.jsx";
import Header from "../Header/Header.jsx";
import Side_Panel from "../Side_Panel/Side_Panel.jsx";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      navigate('/');
    }
  }, [history]);

  const [userDatas, setUserDatas] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [foundError, setError] = useState(null);
  const searchInput = (e) => {
    setSearchItem(e.target.value);
  };
  const handleSearch = async () => {
    try {
      if(searchItem===''){
        setError(null)
        fatchData();
      }
      const apiUrl = `http://192.168.1.28:3000/api/customers/${searchItem}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setSearchResult(data);
      
    } catch (error) {
      setError(error.message);
    }
  };

  const handleAddUser=()=>{
    navigate('/adduser')
  }  

  const handleEdit=(data)=>{
    // console.log(data);
    navigate(`/edit/${data}`)
  }
 
    const fatchData = async () => {
      try {
        const response = await fetch("http://192.168.1.28:3000/api/customers/");
        const result = await response.json();
        setUserDatas(result);
      } catch (error) {
        setError(error.message);
      }
    };
    useEffect(() => {
      fatchData();
    }, []);
  const handleDelete=async(id)=>{
    try {
      const response = await fetch(`http://192.168.1.28:3000/api/customers/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Customer deleted successfully.');
        fatchData();
      } else {
        const errorData = await response.json();
        console.log(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error during delete operation:', error);
    }
  }
  let a = 1;
  return (
    <div className="dashboard">
      <Header />
      <div className="content-container">
        <Side_Panel />
        <main className="main-content">
          <div className="search_container">
            <button className="btn_add" onClick={handleAddUser} >➕Add</button>
            <div className="search_box">
              <input
                className="search_input"
                placeholder="Search..."
                value={searchItem}
                onChange={searchInput}
              />
              <i className="icon_search" onClick={handleSearch}>
                🔍
              </i>
            </div>
          </div>
          {!foundError ? (
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>ID no.</th>
                  <th>Name</th>
                  <th>Phone No.</th>
                  <th>Valid Customer</th>
                  <th>Email Id</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {/* {console.log(searchResult)} */}
                {searchResult
                  ? searchResult.map((userData) => (
                      <tr className="alert" role="alert" key={userData._id}>
                        <th scope="row">{a++}</th>
                        <td>{userData.name}</td>
                        <td>{userData.phone}</td>
                        <td>{userData.isValid ? "Valid" : "IN-Valid"}</td>
                        <td>{userData.email}</td>
                        <td>
                          <button className="btn_delete">Delete</button>
                          <button className="btn_edit">Edit</button>
                        </td>
                      </tr>
                    ))
                  : userDatas.map((userData) => (
                      <tr className="alert" role="alert" key={userData._id}>
                        <th scope="row">{a++}</th>
                        <td>{userData.name}</td>
                        <td>{userData.phone}</td>
                        <td>{userData.isValid ? "Valid" : "IN-Valid"}</td>
                        <td>{userData.email}</td>
                        <td>
                          <button className="btn_delete"  onClick={()=>handleDelete(userData._id)}>Delete</button>
                          <button className="btn_edit" onClick={()=>handleEdit(userData._id)} >Edit</button>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          ) : (
            <Error
              title="Failed to fetch data"
              message="In-Valid User is Found."
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

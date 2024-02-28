import React, { useState } from "react";

function AddUser() {
  const [userData, setUserData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    contactNumber: "",
    role: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5272/api/User/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User added successfully:", data);
        alert("User Created Successfully")
        // You can add any additional logic here, such as showing a success message or redirecting to another page
      })
      .catch((error) => console.error("Error adding user:", error));
      setUserData({
        username: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        email: "",
        contactNumber: "",
        password: "",
        role: "", 
      });
  };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title mt-5">Add User</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form>
              <div className="row formtype">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                      value={userData.username}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="firstName"
                      value={userData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="lastName"
                      value={userData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      name="dateOfBirth"
                      value={userData.dateOfBirth}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={userData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Contact Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="contactNumber"
                      value={userData.contactNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                <div className="form-group">
                 <label>Role</label>
                   <select
                     className="form-control"
                     name="role"
                     value={userData.role}
                     onChange={handleChange}
                    >
                    <option value=""></option>
                    <option value="HotelOwner">HotelOwner</option>
                    <option value="Guest">Guest</option>
                   </select>
                </div>
                </div>

              </div>
            </form>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary buttonedit1"
          onClick={handleSubmit}
        >
          Create User
        </button>
      </div>
    </div>
  );
}

export default AddUser;

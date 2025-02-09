import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../Style/register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    date: "",
    phoneNumber: "",
    address: "",
    email: "",
    password: "",
    aCard: "",
    pCard: "",
    pinCode: "",
  });

 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Use name instead of id
    });
  };

  const validate = () =>{
    if(!formData.userName){
      toast.error("UserName is required!");
      return false;
    }
    if(!formData.date){
      toast.error("Date of Birth is required!");
      return false;
    }

    if (!formData.phoneNumber || formData.phoneNumber.length !== 10) {
      toast.error("Enter a valid 10-digit phone number!");
      return false;
    }
    if (!formData.address) {
      toast.error("Address cannot be empty!");
      return false;
    }
    if (!formData.email.includes("@")) {
      toast.error("Enter a valid email address!");
      return false;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return false;
    }
    if (!formData.aCard || formData.aCard.length !== 12) {
      toast.error("Enter a valid 12-digit Aadhaar Card number!");
      return false;
    }
    if (!formData.pCard || formData.pCard.length !== 10) {
      toast.error("Enter a valid 10-character PAN Card number!");
      return false;
    }
    if (!formData.pinCode || formData.pinCode.length !== 6) {
      toast.error("Enter a valid 6-digit Pin Code!");
      return false;
    }
    return true;
  }

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data in JSON Format:", JSON.stringify(formData, null, 2));

    if(!validate()) 
       return;

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => { 
        toast.success("Registration successful!")
        console.log("Response from API:", data) })
      .catch((error) => {
        toast.error("Error in submitting form!")
        console.error("Error:", error)});

        navigate("/dashboard", { state: { user: formData } });

  };

  

  return (
    <div className="registration-page">
      <div className="container1 d-flex justify-content-center">
        <div className="card p-4 w-100">
          <div>⚠️ Please ensure all details are accurate before submitting." </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="container h-100 d-flex justify-content-center align-items-center">
        <div className="card p-4 w-100">
          <h3 className="text-center mb-4">Register</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="userName">User Name</label>
              <input
                type="text"
                className="form-control"
                id="userName"
                name="userName"  // Added name attribute
                value={formData.userName}
                onChange={handleChange}
                placeholder="Enter user name"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Date Of Birth</label>
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"  // Added name attribute
                value={formData.date}
                onChange={handleChange}
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="number"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"  // Added name attribute
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"  // Added name attribute
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"  // Added name attribute
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"  // Added name attribute
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="aCard">Aadhar Card</label>
              <input
                type="number"
                className="form-control"
                id="aCard"
                name="aCard"  // Added name attribute
                value={formData.aCard}
                onChange={handleChange}
                placeholder="Enter your Aadhar card number"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="pCard">PAN Card</label>
              <input
                type="text"
                className="form-control"
                id="pCard"
                name="pCard"  // Added name attribute
                value={formData.pCard}
                onChange={handleChange}
                placeholder="Enter your PAN card number"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="pinCode">Pin Code</label>
              <input
                type="number"
                className="form-control"
                id="pinCode"
                name="pinCode"  // Added name attribute
                value={formData.pinCode}
                onChange={handleChange}
                placeholder="Enter your pin code"
                
              />
            </div>

           
            <button type="submit" className="btn btn-primary btn-block">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

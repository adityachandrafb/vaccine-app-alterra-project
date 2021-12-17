import React from "react";
import "../style/user.css";
// import Logo from "../style/logo.svg";

const UserRegister = () => {
  return (
    <div className="user-bg-login">
      <div className="loginbox">
        <div className="grid-container-admin">
          <div className="login-header">
            <h1>Register</h1>
          </div>
          <div className="login-logo">
            {/* <img src={Logo} alt="logo" /> */}
          </div>
          <div className="login-form">
            <form>
              <div className="inputbox">
                <input type="text" required />
                <label>Email</label>
              </div>
              <div className="inputbox">
                <input type="text" required />
                <label>NIK</label>
              </div>
              <div className="inputbox">
                <input type="text" required />
                <label>Fullname</label>
              </div>
              <div className="inputbox">
                <input type="text" required />
                <label>Phone Number</label>
              </div>
              <div className="inputbox">
                <input type="password" required />
                <label>Password</label>
              </div>
              <div className="inputbox">
                <input type="password" required />
                <label>Confirm Password</label>
              </div>
            </form>
            <button type="submit" className="submit-button"> Continue </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;

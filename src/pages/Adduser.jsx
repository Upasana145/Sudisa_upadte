import React, { useState } from "react";
// import { postAPI } from "../utils/fetchapi";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const AddDept = () => {
  const [user, setUser] = useState({
    user_name: "",
    email: "",
    password: "",
    role: "staff",
  });
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/user");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // console.log(`User input - ${name}: ${value}`);
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data:", user);
    navigate("/user", { state: user });
  };

  return (
    <div>
      <div className="main">
        <div className="con_sm_form">
          <div className="close_depts">
            <span className="close-button" onClick={handleClose}>
              <FaTimes />
            </span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="dept_name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="user_name"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                name="password"
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="role" className="form-label">
                Role
              </label>
              <select
                className="form-control"
                name="role"
                onChange={handleInputChange}
              >
                <option value="staff">Staff</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ backgroundColor: "#e45626", border: "none" }}
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDept;

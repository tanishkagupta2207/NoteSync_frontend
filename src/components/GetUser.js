import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GetUser = (props) => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    name: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_HOST_URL}api/auth/getUser`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      const res = await response.json();
      if (res.success !== true) {
        props.showAlert(res.msg, "danger");
      }
      else{
        setUser(res.user);
      }
    };
    if (localStorage.getItem("token")) {
      fetchUser();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const containerStyle = {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "rgba(114, 113, 113, 0.15)",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    marginTop: "160px",
    color: "rgb(0, 0, 0)",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#291a40",
    marginBottom: "20px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const labelStyle = {
    marginBottom: "8px",
    color: "#333",
  };

  const inputStyle = {
    marginBottom: "16px",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

return (
    <div style={containerStyle}>
        <h1 style={headingStyle}>Your Account</h1>
        <form style={formStyle}>
            <label style={labelStyle}>Name:</label>
            <input
                type="text"
                value={user.name}
                readOnly
                style={inputStyle}
            />
            <label style={labelStyle}>Email:</label>
            <input
                type="email"
                value={user.email}
                readOnly
                style={inputStyle}
            />
        </form>
    </div>
);
};

export default GetUser;

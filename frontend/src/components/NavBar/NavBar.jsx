import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap" rel="stylesheet" />
    </head>
    <body>
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <p className="title">Costa Rica </p><p className="title bottom">Live Water Properties</p>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Log out</button>
          ) : (
            <button onClick={() => navigate("/login")}>Log in</button>
          )}
        </li>
      </ul>
    </div>      
    </body>
    </html>

  );
};

export default Navbar;

import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <p className="title">COSTA RICA </p><p className="title">LIVE WATER PROPERTIES</p>
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
  );
};

export default Navbar;

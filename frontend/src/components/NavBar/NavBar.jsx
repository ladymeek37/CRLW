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
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
    </head>
    </head>
    <body>
    <div className="navBar">
        <li className="brand">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <div className="title-container">
                    <p className="title">CRLW</p>
                    <p className="little-title"> Costa Rica Live Water Properties</p>
                    
                </div>
            </Link>
        </li>
        <li className="nav-button"> {/* Separate list item for the button */}
            {user ? (
                <button onClick={logoutUser}>Log out</button>
            ) : (
                <button onClick={() => navigate("/login")}>Log in</button>
            )}
        </li>
</div>
   
    </body>
    </html>

  );
};

export default Navbar;

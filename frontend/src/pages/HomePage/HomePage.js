import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage

  const [user, token] = useAuth();  
  const [properties, setProperties] = useState([]);   



  useEffect(() => {
    const fetchProperties = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/properties/all/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setProperties(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchProperties();
  }, [token]);


 

  return (
    <div className="container">
    {properties &&
      properties.map((property) => (
        <div key={property.id}>
          <img src={`http://127.0.0.1:8000${property.thumbnail}`} alt={property.name} width="400" height="300" />          
          <p>
            {property.name} {property.location}
          </p>
        </div>
      ))}
  </div>
);
}

export default HomePage;

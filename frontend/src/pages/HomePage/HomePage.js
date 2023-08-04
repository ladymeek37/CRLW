import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link} from "react-router-dom";
import "./HomePage.css"
import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage

  const [user, token] = useAuth();  
  const [properties, setProperties] = useState([]);   
  const navigate = useNavigate();



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


 

//   return (
//     <div className="container">
//     {properties &&
//       properties.map((property) => (
//         <div className = "ppchild" key={property.id}>
//           <img src={`http://127.0.0.1:8000${property.thumbnail}`} alt={property.name} width="400" height="300" />
//           <p>
//             <a href={`/property/${property.id}`} key={property.id}>
//             {property.name} {property.location}
//             </a>
//             </p>          

//         </div>
//       ))}
//   </div>
// );
return (
  <html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap" rel="stylesheet" />
    </head>
    <body>
  <div className="hpcontainer">
      {properties &&
        properties.map((property) => (
          <div className = "hpchild" > 
          <Link to ={property.name} style = {{ color: 'black', textDecoration: 'none' }}>
            <div  key={property.id}>
              <img src={`http://127.0.0.1:8000${property.thumbnail}`} alt={property.name} width="500" height="300" />
              <div className="titlecontainer">
                <p className = "hptitle titlechild">{property.description_text}</p>
                <p className = "hplocation titlechild">{property.location}</p>                  
              </div>
            </div>
          </Link>
          </div>
        ))}      
</div>       
    </body>
   
  </html>

);
}

export default HomePage;

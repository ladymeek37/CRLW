import React from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link} from "react-router-dom";
import "./HomePage.css"
// import axios from "axios";

//Thumbnail Imports
import MonkeyRanchThumbnail from "./HomePageAssets/MonkeyRanchThumbnail.jpg"
import LaOndaThumbnail from "./HomePageAssets/LaOndaThumbnail.jpg"
import BuenosAiresThumbnail from "./HomePageAssets/BuenosAiresThumbnail.JPG"
import HermosaLotThumbnail from "./HomePageAssets/HermosaLotThumbnail.jpg"
import RockHouseThumbnail from "./HomePageAssets/RockHouseThumbnail.jpg"
import DomiFarmThumbnail from "./HomePageAssets/DomiFarmThumbnail.jpeg"

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage

  const [user, token] = useAuth();  
  const [properties, setProperties] = useState([]);   
  const navigate = useNavigate();



  // useEffect(() => {
  //   const fetchProperties = async () => {
  //     try {
  //       let response = await axios.get("http://127.0.0.1:800/api/properties/all/", {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       });
  //       setProperties(response.data);
  //     } catch (error) {
  //       console.log(error.response.data);
  //     }
  //   };
  //   fetchProperties();
  // }, [token]);


 

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
  <link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
</head>
  <body>

    {/* Monkey Ranch */}
    <div className="hpcontainer">
            <div className = "hpchild" > 
            <Link to ='/monkeyranch' style = {{ color: 'black', textDecoration: 'none' }}>
              <div >
                <img className = "thumbnailimage" src={MonkeyRanchThumbnail} alt= {"Monkey Ranch Thumbnail"}/>
                <div className="titlecontainer">
                  <p className = "hptitle titlechild">Monkey Ranch</p>
                  <p className = "hplocation titlechild">Dominicalito, Costa Rica</p>                  
                </div>
              </div>
            </Link>
            </div> 
    {/* La Onda */}
            <div className = "hpchild" > 
            <Link to ='/laonda' style = {{ color: 'black', textDecoration: 'none' }}>
              <div >
                <img className = "thumbnailimage" src={LaOndaThumbnail} alt={"La Onda Thumbnail"} />
                <div className="titlecontainer">
                  <p className = "hptitle titlechild">La Onda</p>
                  <p className = "hplocation titlechild">Playa Pavones, Costa Rica</p>                  
                </div>
              </div>
            </Link>
            </div> 
    {/* Buenos Aires */}
            <div className = "hpchild" > 
            <Link to ='/buenosaires' style = {{ color: 'black', textDecoration: 'none' }}>
              <div >
                <img className = "thumbnailimage" src={BuenosAiresThumbnail} alt={"Buenos Aires Thumbnail"} />
                <div className="titlecontainer">
                  <p className = "hptitle titlechild">Buenos Aires</p>
                  <p className = "hplocation titlechild">San Isidro, Costa Rica</p>                  
                </div>
              </div>
            </Link>
            </div>   
    {/* Hermosa Lot */}
            <div className = "hpchild" > 
            <Link to ='/hermosalot' style = {{ color: 'black', textDecoration: 'none' }}>
              <div >
                <img className = "thumbnailimage" src={HermosaLotThumbnail} alt={"Hermosa Lot Thumbnail"} />
                <div className="titlecontainer">
                  <p className = "hptitle titlechild">Hermosa Lot</p>
                  <p className = "hplocation titlechild">Playa Hermosa, Costa Rica</p>                  
                </div>
              </div>
            </Link>
            </div>
    {/* Rock House */}
            <div className = "hpchild" > 
            <Link to ='/rockhouse' style = {{ color: 'black', textDecoration: 'none' }}>
              <div >
                <img className = "thumbnailimage" src={RockHouseThumbnail} alt={"Rock House Thumbnail"} />
                <div className="titlecontainer">
                  <p className = "hptitle titlechild">Rock House</p>
                  <p className = "hplocation titlechild">San Isidro, Costa Rica</p>                  
                </div>
              </div>
            </Link>
            </div>
    {/* Domi Farm */}
    <div className = "hpchild" > 
            <Link to ='/domifarm' style = {{ color: 'black', textDecoration: 'none' }}>
              <div >
                <img className = "thumbnailimage" src={DomiFarmThumbnail} alt={"Domi Farm Thumbnail"} />
                <div className="titlecontainer">
                  <p className = "hptitle titlechild">Domi Farm</p>
                  <p className = "hplocation titlechild">Dominical, Costa Rica</p>                  
                </div>
              </div>
            </Link>
            </div>
                  
    </div>        
  </body>
 
</html>

);
}

export default HomePage;

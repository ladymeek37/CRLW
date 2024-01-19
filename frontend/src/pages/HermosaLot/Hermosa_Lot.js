import Hermosa_Lot from "./Hermosa_Lot.jpg"
import "../PropertyPage.css"
const HermosaLotPage = () => {
    return ( 
        <div className = "ppcontainer">
            <div className="ppchild propertynameandloc">
                <h1 className = "decorated-title">Hermosa Lot</h1>
            </div>

            <h2> Location Map </h2>
                <div className="ppchild">
                <iframe className= "googlemap" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d8492.612320561888!2d-83.7741!3d9.190253!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMTEnMjQuOSJOIDgzwrA0NicxNy41Ilc!5e1!3m2!1sen!2sus!4v1703610437352!5m2!1sen!2sus" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                
                </div>

        </div>
     );
}
 
export default HermosaLotPage;
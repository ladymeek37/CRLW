import "../PropertyPage.css"
import Domi_Farm from "./Domi_Farm.jpeg"
const DomiFarmPage = () => {
    return ( 
        
        <div className = "ppcontainer">
            <div className="ppchild propertynameandloc">
                <h1 className = "decorated-title">Domi Farm</h1>
            </div>

            <h2> Location Map </h2>
                <div className="ppchild">
                    <iframe className= "googlemap" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4112.203715634624!2d-83.85806692497835!3d9.255831590814852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMTUnMjEuMCJOIDgzwrA1MScxOS44Ilc!5e1!3m2!1sen!2sus!4v1705698663849!5m2!1sen!2sus" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            {/* <img className = "ppchild" src={Domi_Farm} width="900" height="700"/>  */}
            {/* <p className = "ppchild">Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica.</p>            */}
        </div>
     );
}
 
export default DomiFarmPage;
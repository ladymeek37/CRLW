import "../PropertyPage.css"
import Rock_House from "./Rock_House.JPG"
import ImageGallery from "react-image-gallery";

//Rock House Survey Imports 
import RHSurvey1 from "./RockHouseMaps/RHSurvey1.png"
import RHSurvey2 from "./RockHouseMaps/RHSurvey2.png"


const RockHousePage = () => {

    const rockhousemaps = [
        {
            original: RHSurvey2,
            thumbnail: RHSurvey2, 
        },        
        {
            original: RHSurvey1,
            thumbnail: RHSurvey1, 
        },

    ];
    return (
        <div className = "ppcontainer">
            <div className="ppchild propertynameandloc">
                <h1 className = "decorated-title">Rock House</h1>
                <p>San Isidro, Costa Rica</p>
                <p>8.2 Hectares</p>
            </div>
            <h2> Property Video </h2>            
                <div className = "videocontainer ppchild" >
                    <iframe className="vcchild"
                        src={`https://www.youtube.com/embed/SqgTmEt-3r8`}
                        frameborder="0" allowFullScreen
                        width="600" height="350"
                        >
                    </iframe>  
                </div>
                <div>
                <h2> About </h2>
                    <div className="ppchild">
                        <div className="ppchild">
                            <p>This beautiful live water property is located approximately 20 minutes from San Isidro or 30 minutes from Dominical. The property has been well cared for and maintained. This is a great location for a sustainable farm with plenty of room for gardens. Multiple varieties of fruit trees can be found on the property. The property is surrounded by larger neighbors and is a very peaceful and quiet setting.</p>
                            <br/>
                            <p>The main feature on the property is a beautiful, year round creek fed by pure spring water. The creek has multiple cascades, a nice water fall, and multiple deep swimming pools.  The creek would be an ideal setting for a hydro electrical system to be installed.</p>
                            <br/>
                            <p>There is a nice cabin on the property built a few years ago by the owner for a weekend retreat. The cabin could be used for a permanent residence or guest house if the new owner desired to build a new home. There are multiple building sites on the property with a great view of the cascading live water.</p>
                        </div>                    
                    </div>
                </div>

            <h2> Location Map </h2>
                <div className="ppchild">
                    <iframe className= "googlemap" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4255.194275109196!2d-83.72352092497776!3d9.303431890769257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMTgnMTIuNCJOIDgzwrA0MycxNS40Ilc!5e1!3m2!1sen!2sus!4v1710784307213!5m2!1sen!2sus" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            <h2>  Surverys & Maps  </h2>            
                <div className="ppchild">
                    <ImageGallery items={rockhousemaps}
                    showPlayButton = {false}
                    showFullscreenButton = {true}
                    style={{ width: '200px', height: 'auto' }}/> 
                </div>
            {/* <img className = "ppchild" src={Rock_House} width="900" height="700"/>  */}
            {/* <p className = "ppchild">Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica.</p>            */}
        </div>
    );
}
 
export default RockHousePage;
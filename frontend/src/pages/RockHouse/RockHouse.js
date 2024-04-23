import "../PropertyPage.css"
import Rock_House from "./Rock_House.JPG"
import ImageGallery from "react-image-gallery";

//Rock House Survey Imports 
import RHSurvey1 from "./RockHouseMaps/RHSurvey1.png"
import RHSurvey2 from "./RockHouseMaps/RHSurvey2.png"

//Rock House Image Imports
import RHCabin1 from "./RockHouseImages/RHCabin1.jpg"
import RHCabin2 from "./RockHouseImages/RHCabin2.jpg"
import RHCabin3 from "./RockHouseImages/RHCabin3.jpg"
import RHCabin4 from "./RockHouseImages/RHCabin4.jpg"
import RHCabin5 from "./RockHouseImages/RHCabin5.jpg"
import RHCabin6 from "./RockHouseImages/RHCabin6.jpg"
import RHCabin7 from "./RockHouseImages/RhCabin7.jpg"
import RHCabin8 from "./RockHouseImages/RHCabin8.jpg"
import RHCabin9 from "./RockHouseImages/RHCabin9.jpg"
import RHPatio from "./RockHouseImages/RHPatio.jpg"
import RHPorch2 from "./RockHouseImages/RHPorch2.jpg"
import RHRoom1 from "./RockHouseImages/RHRoom1.jpg"
import RHRoom2 from "./RockHouseImages/RHRoom2.jpg"
import RHRoom3 from "./RockHouseImages/RHRoom3.jpg"
import RHWoodPost from "./RockHouseImages/RHWoodPost.jpg"



const RockHousePage = () => {

    const rockhouseimages = [
        {
            original: RHCabin9,
            thumbnail: RHCabin9,
        },
        {
            original: RHCabin1,
            thumbnail: RHCabin1,
        },
        {
            original: RHCabin2,
            thumbnail: RHCabin2,
        },
        {
            original: RHCabin3,
            thumbnail: RHCabin3,
        },
        {
            original: RHCabin4,
            thumbnail: RHCabin4,
        },
        {
            original: RHCabin5,
            thumbnail: RHCabin5,
        },
        {
            original: RHCabin6,
            thumbnail: RHCabin6,
        },
        {
            original: RHCabin7,
            thumbnail: RHCabin7,
        },
        {
            original: RHCabin8,
            thumbnail: RHCabin8,
        },
        {
            original: RHPatio,
            thumbnail: RHPatio,
        },
        {
            original: RHPorch2,
            thumbnail: RHPorch2,
        },
        {
            original: RHRoom1,
            thumbnail: RHRoom1,
        },
        {
            original: RHRoom2,
            thumbnail: RHRoom2,
        },
        {
            original: RHRoom3,
            thumbnail: RHRoom3,
        },
        {
            original: RHWoodPost,
            thumbnail: RHWoodPost,
        },
    ]

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
                <p>2.5 Hectares</p>
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
                <div>
                <h2> Photo Gallery </h2>
                <div className="ppchild">
                    {/* <h3 className="imagechild"> Image Gallery </h3> */}
                    <ImageGallery items={rockhouseimages}
                    showPlayButton = {false}
                    showFullscreenButton = {true}/> 
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
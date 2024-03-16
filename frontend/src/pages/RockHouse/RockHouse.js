import "../PropertyPage.css"
import Rock_House from "./Rock_House.JPG"
import ImageGallery from "react-image-gallery";

//Rock House Survey Imports 
import RHSurvey1 from "./RockHouseMaps/RHSurvey1.png"
import RHSurvey2 from "./RockHouseMaps/RHSurvey2.png"


const RockHousePage = () => {

    const rockhousemaps = [
        {
            original: RHSurvey1,
            thumbnail: RHSurvey1, 
        },
        {
            original: RHSurvey2,
            thumbnail: RHSurvey2, 
        },
    ];
    return (
        <div className = "ppcontainer">
            <div className="ppchild propertynameandloc">
                <h1 className = "decorated-title">Rock House</h1>
            </div>
            <h2> Property Video </h2>            
                <div className = "videocontainer ppchild" >
                    <iframe className="vcchild"
                        src={`https://www.youtube.com/embed/wMGQ4jIS-ZA`}
                        frameborder="0" allowFullScreen
                        width="600" height="350"
                        >
                    </iframe>  
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
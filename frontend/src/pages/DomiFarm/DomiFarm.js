import "../PropertyPage.css"
import Domi_Farm from "./Domi_Farm.jpeg"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

//survey import
import DomiFarmSurvey from "./DomiFarmMaps/DomiFarmSurvey.png"

const DomiFarmPage = () => {

    const maps = [
        {
            original: DomiFarmSurvey,
            thumbnail: DomiFarmSurvey,
        }
    ]


    return ( 
        
        <div className = "ppcontainer">
            <div className="ppchild propertynameandloc">
                <h1 className = "decorated-title">Domi Farm</h1>
            </div>

            <h2> About Domi Farm </h2>
                <div className="ppchild">
                    <div className="ppchild">
                        <p>This farm is 65 hectares (160 acres). The farm is located just a couple of minutes from the town of Dominical. This property has premium development potential for multiple ocean view building sites. The current owner is working on a master plan for 15 luxury building sites that would average 4 hectares each.  </p>                
                    </div>
                    <div>
                        <p>There is fast access to the pavement and local beaches. The property is very private and ready for full scale development. There is a good internal road system to access most areas of the property. There are multiple springs and creeks with live water running through the property year round.</p>                
                    </div>                      
                </div>

            <h2> Location Map </h2>
                <div className="ppchild">
                    <iframe className= "googlemap" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4112.203715634624!2d-83.85806692497835!3d9.255831590814852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMTUnMjEuMCJOIDgzwrA1MScxOS44Ilc!5e1!3m2!1sen!2sus!4v1705698663849!5m2!1sen!2sus" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            <h2>  Surverys & Maps  </h2>            
                <div className="ppchild">
                    <ImageGallery items={maps}
                        //   renderLeftNav={(onClick, disabled) => <CustomLeftNavButton onClick={onClick} />}
                        //   renderRightNav={(onClick, disabled) => <CustomRightNavButton onClick={onClick} />}
                    showPlayButton = {false}
                    showFullscreenButton = {true}
                    style={{ width: '200px', height: 'auto' }}/> 
                </div>
            {/* <img className = "ppchild" src={Domi_Farm} width="900" height="700"/>  */}
            {/* <p className = "ppchild">Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica.</p>            */}
        </div>
     );
}
 
export default DomiFarmPage;
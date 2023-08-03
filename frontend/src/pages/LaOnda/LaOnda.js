import La_Onda from "./La_Onda.jpg"
import "../PropertyPage.css"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"

//Photo Imports:
import BigTreeLO from "./BestofLaOnda/BigTreeLO.jpg"
import FenceBarnLO from "./BestofLaOnda/FenceBarnLO.jpg"
import PeopleHikingLO from "./BestofLaOnda/PeopleHikingLO.jpg"
import SawmillsViewLO from "./BestofLaOnda/SawmillsViewLO.jpg"
import BeachViewLO from "./BestofLaOnda/BeachViewLO.jpg"
import BridgeCoupleLO from "./BestofLaOnda/BridgeCoupleLO.jpg"
import LadySurfingLO from "./BestofLaOnda/LadySurfingLO.jpg"
import SmallBarrelLO from "./BestofLaOnda/SmallBarrelLO.jpg"
import SurferSilhouetteLO from "./BestofLaOnda/SurferSilhouetteLO.jpg"
import SurfersWalkingLO from "./BestofLaOnda/SurfersWalkingLO.jpg"
import SurfersWalkingPointLO from "./BestofLaOnda/SurfersWalkingPointLO.jpg"
import WatchingWavesLO from "./BestofLaOnda/WatchingWavesLO.jpg"
import WaveLO from "./BestofLaOnda/WaveLO.jpg"

//Map Imports:
import Map1 from "./PropertyMaps/Map1.jpg"
import Map2 from "./PropertyMaps/Map2.jpg"
import Map3 from "./PropertyMaps/Map3.jpg"


// image gallery package and info = https://www.npmjs.com/package/react-image-gallery
// youtube tutorial = https://www.youtube.com/watch?v=AnG7LMcX_z8

const LaOndaPage = () => {

    const maps = [
        {
            original: Map1,
            thumbnail: Map1,
        },
        {
            original: Map2,
            thumbnail: Map2,
        },
        {
            original: Map3,
            thumbnail: Map3,
        },
    ]

    const images = [
        {
          original: BigTreeLO,
          thumbnail: BigTreeLO,
        },
        {
          original: FenceBarnLO,
          thumbnail: FenceBarnLO,
        },
        {
          original: PeopleHikingLO,
          thumbnail: PeopleHikingLO,
        },
        {
            original: SawmillsViewLO,
            thumbnail: SawmillsViewLO,
        },
        {
            original: BeachViewLO,
            thumbnail: BeachViewLO, 
        },
        {
            original: SurfersWalkingPointLO,
            thumbnail: SurfersWalkingPointLO,
        },
        {
            original: SurfersWalkingLO,
            thumbnail: SurfersWalkingLO, 
        },
        {
            original: WatchingWavesLO,
            thumbnail: WatchingWavesLO, 
        },
        {
            original: SmallBarrelLO,
            thumbnail: SmallBarrelLO, 
        },
        {
            original: WaveLO,
            thumbnail: WaveLO,
        },
        {
            original: LadySurfingLO,
            thumbnail: LadySurfingLO, 
        },
        {
            original: SurferSilhouetteLO,
            thumbnail: SurferSilhouetteLO,
        },
        {
            original: BridgeCoupleLO,
            thumbnail: BridgeCoupleLO,
        },
        


      ];
      
    return ( 
        <div className = "ppcontainer">
            <div className="ppchild">
                <h1 >LA ONDA</h1>
                <p> Located in Playa Pavones, Costa Rica</p>
            </div>
            {/* <img className = "ppchild" src={La_Onda} width="900" height="700"/> */}
            <div className = "videocontainer">
                <iframe className="vcchild"
                    src={`https://www.youtube.com/embed/q4qaDL_m-AY`}
                    frameborder="0" allowFullScreen
                    width="600" height="350">
                </iframe>
                <iframe className="vcchild"
                    src={`https://www.youtube.com/embed/s5iiFgPZ7LY`}
                    frameborder="0" allowFullScreen
                    width="600" height="350">
                </iframe>
                <iframe className="vcchild"
                    src={`https://www.youtube.com/embed/OWr-YSZ97-E`}
                    frameborder="0" allowFullScreen
                    width="600" height="350">
                </iframe>                
            </div>

            <div className="ppchild">
                <h2>About Playa Pavones:</h2>
                <p>Playa Pavones is home to one of the longest left-hand point breaks in the world. People travel from all over the world to get to surf this legendary wave. With a good swell, you can expect up to a mile long ride on a single wave. This quaint surf town has a few local restaurants featuring typical style meals and other cuisine, a soccerfield, a surfshop, a variety of rental cabinas and houses, and more. This southern area of Costa Rica is known for it's beautiful nature, beaches and wildlife. Scarelt macaws, howler monkeys, toucans, iguanas, wild horses and sloths are easily seen daily in this zone, just to name a few. Pavones is also known for it's year round fishing oppourtunites. This town is a naturally beautiful paradise.   </p>                
            </div>
            <div className="ppchild">
                <h2>About the La Onda Property:</h2>
                <p>The property is 84 acres made up of rolling pasture fields with several ocean view ridgelines. A beautiful river runs through the property, with the river mouth entering the ocean on the south border of the property. The property runs along both sides of the main road into Pavones and is filled with many building sites of different sizes, all overlooking the ocean. You can find exciting hiking trails, swimming holes, wildlife, and beautiful views overlooking Pavones, Matapalo and Playa Zancudo. Along the beach is the La Onda surf break, a fun left-hand point break… one of the many surf spots in the area. La Onda is a one of a kind property with so much to offer!</p>                
            </div>

            <div className="ppchild">
                <h3 className="imagechild"> Image Gallery </h3>
                <ImageGallery items={images}
                showPlayButton = {false}
                showFullscreenButton = {false}/> 
            </div>
            <div className="ppchild">
                <h3 className="imagechild"> Property Maps </h3>
                <ImageGallery items={maps}
                showPlayButton = {false}
                showFullscreenButton = {false}/> 
            </div>
        </div>

     );
}
 
export default LaOndaPage;

// id="ytplayer" type="text/html" width="1015" height="653"

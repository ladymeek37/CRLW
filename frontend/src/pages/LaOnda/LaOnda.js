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
import BeachRiverMouthLO from "./BestofLaOnda/BeachRiverMouthLO.jpg"
import BeachView2LO from "./BestofLaOnda/BeachView2LO.jpg"
import HillTop from "./BestofLaOnda/HillTop.jpg"
import OceanView2LO from "./BestofLaOnda/OceanView2LO.jpg"
import OceanViewLO from "./BestofLaOnda/OceanViewLO.jpg"
import OceanView3LO from "./BestofLaOnda/OceanView3LO.jpg"
import PapaTree from "./BestofLaOnda/PapaTree.jpg"
import TreeRoots from "./BestofLaOnda/TreeRoots.jpg"
import TreeView2LO from "./BestofLaOnda/TreeView2LO.jpg"
import TreeViewLO from "./BestofLaOnda/TreeViewLO.jpg"



//Map Imports:
import Map1 from "./PropertyMaps/Map1.jpg"
import Map2 from "./PropertyMaps/Map2.jpg"
import Map3 from "./PropertyMaps/Map3.jpg"

//Nav Button Imports
import { CustomLeftNavButton, CustomRightNavButton } from '../../components/NavButtons'


// image gallery package and info = https://www.npmjs.com/package/react-image-gallery
// youtube tutorial = https://www.youtube.com/watch?v=AnG7LMcX_z8

const LaOndaPage = () => {

    const maps = [
        {
            original: Map2,
            thumbnail: Map2,
        },
        {
            original: Map1,
            thumbnail: Map1,
        },
        {
            original: Map3,
            thumbnail: Map3,
        },
    ]

    const images = [
        {
            original: OceanView2LO,
            thumbnail: OceanView2LO,
        },
        {
            original: BeachViewLO,
            thumbnail: BeachViewLO, 
        },
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
        {
            original: BeachRiverMouthLO,
            thumbnail: BeachRiverMouthLO,
        },
        {
            original: BeachView2LO,
            thumbnail: BeachView2LO,
        },
        {
            original: HillTop,
            thumbnail: HillTop,
        },
        {
            original: OceanView3LO,
            thumbnail: OceanView3LO,
        },
        {
            original: OceanViewLO,
            thumbnail: OceanViewLO,
        },
        {
            original: PapaTree,
            thumbnail: PapaTree,
        },
        {
            original: TreeRoots,
            thumbnail: TreeRoots,
        },
        {
            original: TreeView2LO,
            thumbnail: TreeView2LO,
        },
        {
            original: TreeViewLO,
            thumbnail: TreeViewLO,
        },


      ];
      
    return ( 
        <html>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap" rel="stylesheet" />
        </head>
        <body>
        <div className = "ppcontainer">

            <div className="ppchild propertynameandloc">
                <h1 class="decorated-title">La Onda</h1>
                <p>Playa Pavones, Costa Rica</p>
            </div>
            <h2> Photo Gallery </h2>
            <div className="ppchild">
                {/* <h3 className="imagechild"> Image Gallery </h3> */}
                <ImageGallery items={images}
                showPlayButton = {false}
                showFullscreenButton = {true}/> 
            </div>
            {/* <img className = "ppchild" src={La_Onda} width="900" height="700"/> */}
                <h2> Video Gallery </h2>            
            <div className = "videocontainer ppchild" >

                <iframe className="vcchild"
                    src={`https://www.youtube.com/embed/q4qaDL_m-AY`}
                    frameborder="0" allowFullScreen
                    width="600" height="350"
                    >
                </iframe>
                <iframe className="vcchild"
                    src={`https://www.youtube.com/embed/s5iiFgPZ7LY`}
                    frameborder="0" allowFullScreen
                    width="600" height="350"
                    >
                </iframe>
                <iframe className="vcchild"
                    src={`https://www.youtube.com/embed/OWr-YSZ97-E`}
                    frameborder="0" allowFullScreen
                    width="600" height="350"
                    >
                </iframe>                
            </div>
            <div>
                <h2> About La Onda </h2>
                <div className="ppchild">
                    <div className="ppchild">
                        <h3>Playa Pavones:</h3>
                        <p>Playa Pavones is home to one of the longest left-hand point breaks in the world. People travel from all over the world to get to surf this legendary wave. With a good swell, you can expect up to a mile long ride on a single wave. This quaint surf town has a few local restaurants featuring typical style meals and other cuisine, a soccerfield, a surfshop, a variety of rental cabinas and houses, and more. This southern area of Costa Rica is known for it's beautiful nature, beaches and wildlife. Scarelt macaws, howler monkeys, toucans, iguanas, wild horses and sloths are easily seen daily in this zone, just to name a few. Pavones is also known for it's year round fishing oppourtunites. This town is a naturally beautiful paradise.   </p>                
                    </div>
                    <div>
                        <h3 >The Property:</h3>
                        <p>The property is 84 acres made up of rolling pasture fields with several ocean view ridgelines. A beautiful river runs through the property, with the river mouth entering the ocean on the south border of the property. The property runs along both sides of the main road into Pavones and is filled with many building sites of different sizes, all overlooking the ocean. You can find exciting hiking trails, swimming holes, wildlife, and beautiful views overlooking Pavones, Matapalo and Playa Zancudo. Along the beach is the La Onda surf break, a fun left-hand point break… one of the many surf spots in the area. La Onda is a one of a kind property with so much to offer!</p>                
                    </div>                      
                </div>
              
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
            </div>
        </body>
        </html>


     );
}
 
export default LaOndaPage;

// id="ytplayer" type="text/html" width="1015" height="653"

import "../PropertyPage.css"
import Monkey_Ranch from "./Monkey_Ranch.jpg"
import ImageGallery from "react-image-gallery";

//Monkey Ranch Photo Imports
import BackPorch2MR from "./NewBestofMonkeyRanch/BackPorch2MREdited.jpg"
import BackPorch3MR from "./NewBestofMonkeyRanch/BackPorch3MREdited.jpg"
import BackPorchView from "./NewBestofMonkeyRanch/BackPorchViewMREdited.jpg"
import Balcony from "./NewBestofMonkeyRanch/BalconyMREdited.jpg"
import Dominicalito from "./NewBestofMonkeyRanch/DominicalitoMREdited.jpg"
import Driveway1 from "./NewBestofMonkeyRanch/DrivewayMREdited.jpg"
import Driveway2 from "./NewBestofMonkeyRanch/DrivewayView1MREdited.jpg"
import Driveway3 from "./NewBestofMonkeyRanch/DrivewayView3MREdited.jpg"
import Drone1 from "./NewBestofMonkeyRanch/DroneMR4Edited.jpg"
import Drone2 from "./NewBestofMonkeyRanch/DroneMR7Edited.jpg"
import Drone3 from "./NewBestofMonkeyRanch/DroneMR9Edited.jpg"
import Drone4 from "./NewBestofMonkeyRanch/DroneMR10Edited.jpg"
import Drone5 from "./NewBestofMonkeyRanch/MonkeyRanchDrone5.jpg"
import KitchenLight from "./NewBestofMonkeyRanch/KitchenLightMREdited.jpg"
import LivingRoom from "./NewBestofMonkeyRanch/LivingroomPoolViewKarolMR.jpg"
import KitchenView from "./NewBestofMonkeyRanch/MonkeyRanchKitchenView.jpg"
import Mural from "./NewBestofMonkeyRanch/MuralMREdited.jpg"
import NightLightHouse from "./NewBestofMonkeyRanch/NightLightKarolMR.jpg"
import OceanView1 from "./NewBestofMonkeyRanch/OceanViewFromPalapa2MREdited.jpg"
import Pool1 from "./NewBestofMonkeyRanch/Pool3MREdited.jpg"
import Pool2 from "./NewBestofMonkeyRanch/Pool5MREdited.jpg"
import Pool3 from "./NewBestofMonkeyRanch/Pool7MREdited.jpg"
import Pool4 from "./NewBestofMonkeyRanch/Pool9MREdited.jpg"
import PoolSunset from "./NewBestofMonkeyRanch/PoolAtSunsetKarolMR.jpg"
import PoolOceanView from "./NewBestofMonkeyRanch/PoolOceanViewMR2Edited.jpg"
import PoolRock from "./NewBestofMonkeyRanch/PoolRockMREdited.jpg"
import QueposView from "./NewBestofMonkeyRanch/QueposViewMREdited.jpg"
import RockPath from "./NewBestofMonkeyRanch/RockPathMREdited.jpg"
import RockPillar from "./NewBestofMonkeyRanch/RockPillarMREdited.jpg"
import Roof from "./NewBestofMonkeyRanch/RoofMREdited.jpg"
import SmoothieBar1 from "./NewBestofMonkeyRanch/SmoothieBar1MREdited.jpg"
import SmoothieBar3 from "./NewBestofMonkeyRanch/SmoothieBar3MREdited.jpg"
import Sunset1 from "./NewBestofMonkeyRanch/SunsetMR1.jpeg"
import Sunset2 from "./NewBestofMonkeyRanch/SunsetMR2.jpeg"
import Table from "./NewBestofMonkeyRanch/TableMREdited.jpg"
import UpperTerrace from "./NewBestofMonkeyRanch/UpperTerraceKarolMR.jpg"
import UpperView from "./NewBestofMonkeyRanch/UpperViewKarolMR.jpg"
import UpstairsMasterView1 from "./NewBestofMonkeyRanch/UpstairsMasterView1MREdited.jpg"
import UpstairsMasterView2 from "./NewBestofMonkeyRanch/UpstairsMasterView2MREdited.jpg"
import UpstairsMasterView3 from "./NewBestofMonkeyRanch/UpstairsMasterView4MREdited.jpg"
import WallArt from "./NewBestofMonkeyRanch/WallArt2MREdited.jpg"
import Waterfall1 from "./NewBestofMonkeyRanch/WaterFallMR1Edited.jpg"
import Waterfall2 from "./NewBestofMonkeyRanch/WaterfallMR2Edited.jpg"
import Waterfall3 from "./NewBestofMonkeyRanch/WaterFallMR3Edited.jpg"
import Waterfall4 from "./NewBestofMonkeyRanch/WaterfallMR4Edited.jpg"
import WaterFountain from "./NewBestofMonkeyRanch/WaterFountainMREdited.jpg"
import WoodenStairs from "./NewBestofMonkeyRanch/WoodenStairsMREdited.jpg"




// Jungle House Photo Imports
import JungleHouse1 from "./BestofJungleHouse/JungleHouse1.JPG"
import BalconyJH1 from "./BestofJungleHouse/BalconyJH1.jpg"
import BathroomJH2 from "./BestofJungleHouse/BathroomJH2.jpg"
import BathroomJH3 from "./BestofJungleHouse/BathroomJH3.jpg"
import BedroomJH2 from "./BestofJungleHouse/BedroomJH2.jpg"
import BedroomJH3 from "./BestofJungleHouse/BedroomJH3.jpg"
import BedroomJH4 from "./BestofJungleHouse/BedroomJH4.jpg"
import BedroomJH6 from "./BestofJungleHouse/BedroomJH6.jpg"
import BridgeJH2 from "./BestofJungleHouse/BridgeJH2.jpg"
import CouchJH1 from "./BestofJungleHouse/CouchJH1.jpg"
import DiningRoomJH1 from "./BestofJungleHouse/DiningRoomJH1.jpg"
import EntranceRoomJH1 from "./BestofJungleHouse/EntranceRoomJH1.jpg"
import GateJH1 from "./BestofJungleHouse/GateJH1.jpg"
import HouseJH1 from "./BestofJungleHouse/HouseJH1.jpg"
import HouseJH2 from "./BestofJungleHouse/HouseJH2.jpg"
import HouseJH3 from "./BestofJungleHouse/HouseJH3.jpg"
import HouseJH4 from "./BestofJungleHouse/HouseJH4.jpg"
import KitchenJH1 from "./BestofJungleHouse/KitchenJH1.jpg"
import KitchenJH2 from "./BestofJungleHouse/KitchenJH2.jpg"
import KitchenJH4 from "./BestofJungleHouse/KitchenJH4.jpg"
import LivingRoomJH2 from "./BestofJungleHouse/LivingRoomJH2.jpg"
import LivingRoomJH3 from "./BestofJungleHouse/LivingRoomJH3.jpg"
import MasterBalconyJH1 from "./BestofJungleHouse/MasterBalconyJH1.jpg"
import MasterBathJH1 from "./BestofJungleHouse/MasterBathJH1.jpg"
import MasterBedroomJH1 from "./BestofJungleHouse/MasterBedroomJH1.jpg"
import OutsideJH1 from "./BestofJungleHouse/OutsideJH1.jpg"
import PoolJH1 from "./BestofJungleHouse/PoolJH1.jpg"
import StairsJH2 from "./BestofJungleHouse/StairsJH2.jpg"
import UpstairsHallJH1 from "./BestofJungleHouse/UpstairsHallJH1.jpg"
import ViewJH1 from "./BestofJungleHouse/ViewJH1.jpg"

//Survey Imports
import Plano1 from "./MonkeyRanchMaps/Plano1.jpeg"
import Plano2 from "./MonkeyRanchMaps/Plano2.png"




const MonkeyRanchPage = () => {

    const images = [
        {
            original: Drone4,
            thumbnail: Drone4, 
        },
        {
            original: Drone1,
            thumbnail: Drone1, 
        },
        {
            original: Drone2,
            thumbnail: Drone2, 
        },
        {
            original: Drone5,
            thumbnail: Drone5, 
        },
        {
            original: NightLightHouse,
            thumbnail: NightLightHouse, 
        },
        {
            original: PoolSunset,
            thumbnail: PoolSunset, 
        },
        {
            original: Pool1,
            thumbnail: Pool1, 
        },
        {
            original: Pool2,
            thumbnail: Pool2, 
        },
        {
            original: BackPorchView,
            thumbnail: BackPorchView, 
        },
        {
            original: PoolRock,
            thumbnail: PoolRock, 
        },
        {
            original: Pool3,
            thumbnail: Pool3, 
        },
        {
            original: Pool4,
            thumbnail: Pool4, 
        },
        {
            original: PoolOceanView,
            thumbnail: PoolOceanView, 
        },
        {
            original: BackPorch2MR,
            thumbnail: BackPorch2MR, 
        },
        {
            original: Table,
            thumbnail: Table, 
        },
        {
            original: BackPorch3MR,
            thumbnail: BackPorch3MR, 
        },
        {
            original: UpstairsMasterView1,
            thumbnail: UpstairsMasterView1, 
        },
        {
            original: UpstairsMasterView2,
            thumbnail: UpstairsMasterView2, 
        },
        {
            original: UpstairsMasterView3,
            thumbnail: UpstairsMasterView3, 
        },
        {
            original: UpperView,
            thumbnail: UpperView, 
        },
        {
            original: Balcony,
            thumbnail: Balcony, 
        },
        {
            original: Roof,
            thumbnail: Roof, 
        },
        {
            original: UpperTerrace,
            thumbnail: UpperTerrace, 
        },
        {
            original: Drone3,
            thumbnail: Drone3, 
        },
        {
            original: Dominicalito,
            thumbnail: Dominicalito, 
        },
        {
            original: QueposView,
            thumbnail: QueposView, 
        },
        {
            original: OceanView1,
            thumbnail: OceanView1, 
        },
        {
            original: KitchenView,
            thumbnail: KitchenView, 
        },
        {
            original: Mural,
            thumbnail: Mural, 
        },
        {
            original: KitchenLight,
            thumbnail: KitchenLight, 
        },
        {
            original: LivingRoom,
            thumbnail: LivingRoom, 
        },
        {
            original: WallArt,
            thumbnail: WallArt, 
        },
        {
            original: WoodenStairs,
            thumbnail: WoodenStairs, 
        },
        {
            original: Driveway2,
            thumbnail: Driveway2, 
        },
        {
            original: Driveway3,
            thumbnail: Driveway3, 
        },
        {
            original: Driveway1,
            thumbnail: Driveway1, 
        },
        {
            original: RockPath,
            thumbnail: RockPath, 
        },
        {
            original: SmoothieBar1,
            thumbnail: SmoothieBar1, 
        },
        {
            original: SmoothieBar3,
            thumbnail: SmoothieBar3, 
        },
        {
            original: RockPillar,
            thumbnail: RockPillar, 
        },
        {
            original: WaterFountain,
            thumbnail: WaterFountain, 
        },

        {
            original: Sunset1,
            thumbnail: Sunset1, 
        },
        {
            original: Sunset2,
            thumbnail: Sunset2, 
        },
        {
            original: Waterfall1,
            thumbnail: Waterfall1, 
        },
        {
            original: Waterfall2,
            thumbnail: Waterfall2, 
        },
        {
            original: Waterfall3,
            thumbnail: Waterfall3, 
        },


    ];
    const junglehouseimages = [
        {
            original: HouseJH2,
            thumbnail: HouseJH2, 
        },
        {
            original: JungleHouse1,
            thumbnail: JungleHouse1, 
        },
        {
            original: HouseJH1,
            thumbnail: HouseJH1, 
        },
        {
            original: OutsideJH1,
            thumbnail: OutsideJH1, 
        },
        {
            original: BridgeJH2,
            thumbnail: BridgeJH2, 
        },
        {
            original: ViewJH1,
            thumbnail: ViewJH1, 
        },
        {
            original: GateJH1,
            thumbnail: GateJH1, 
        },
        {
            original: PoolJH1,
            thumbnail: PoolJH1, 
        },
        {
            original: LivingRoomJH3,
            thumbnail: LivingRoomJH3, 
        },
        {
            original: LivingRoomJH2,
            thumbnail: LivingRoomJH2, 
        },
        {
            original: DiningRoomJH1,
            thumbnail: DiningRoomJH1, 
        },
        {
            original: EntranceRoomJH1,
            thumbnail: EntranceRoomJH1, 
        },
        {
            original: KitchenJH1,
            thumbnail: KitchenJH1, 
        },
        {
            original: KitchenJH2,
            thumbnail: KitchenJH2, 
        },
        {
            original: KitchenJH4,
            thumbnail: KitchenJH4, 
        },
        {
            original: StairsJH2,
            thumbnail: StairsJH2, 
        },
        {
            original: UpstairsHallJH1,
            thumbnail: UpstairsHallJH1, 
        },
        {
            original: MasterBedroomJH1,
            thumbnail: MasterBedroomJH1, 
        },
        {
            original: MasterBathJH1,
            thumbnail: MasterBathJH1, 
        },
        {
            original: MasterBalconyJH1,
            thumbnail: MasterBalconyJH1, 
        },
        {
            original: CouchJH1,
            thumbnail: CouchJH1, 
        },
        {
            original: BedroomJH2,
            thumbnail: BedroomJH2, 
        },
        {
            original: BedroomJH3,
            thumbnail: BedroomJH3, 
        },
        {
            original: BedroomJH4,
            thumbnail: BedroomJH4, 
        },
        {
            original: BedroomJH6,
            thumbnail: BedroomJH6, 
        },
        {
            original: BathroomJH2,
            thumbnail: BathroomJH2, 
        },
        {
            original: BathroomJH3,
            thumbnail: BathroomJH3, 
        },
        {
            original: BalconyJH1,
            thumbnail: BalconyJH1, 
        },
    ];
    const maps = [
        {
            original: Plano2,
            thumbnail: Plano2, 
        },
        {
            original: Plano1,
            thumbnail: Plano1, 
        },
    ]



    return ( 
            <html>
                <head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
                </head>
            <body>
                <div>
                    <div className="ppchild mrpropertynameandloc mrthumbnail" >
                    <h1 class="p-name">Monkey Ranch</h1>
                    <p class="p-location">Dominicalito, Costa Rica</p>
                    {/* <p>35 Acres</p> */}
                    </div>
                </div>

            <div className = "ppcontainer">

                <div>
                    <h2> About </h2>
                    <div className="ppchild">
                        <div className="ppchild">
                            {/* <h3>Playa Pavones:</h3> */}
                            <p>Perched in the prestigious Escaleras neighborhood, high above the serene Dominicalito Bay, The Monkey Ranch presents a truly rare offering: a breathtaking 35-acre estate blending untouched natural splendor with refined luxury. Enveloped by pristine jungle, the property showcases stunning ocean views, peaceful creeks, and an awe-inspiring 40-foot waterfall that flows into private swimming holes, all creating a tranquil escape. At an elevation of 1,100 feet, the property enjoys cooling ocean breezes and a perfect year-round climate—setting the stage for an opulent Costa Rican lifestyle.</p>                             
                            <br/>
                            <br/>
                            <p>This estate features two expansive luxury residences with a total of 12 bedrooms, along with a dedicated caretaker’s house. The Monkey Ranch grounds boast an extraordinary landscape, inviting guests to enjoy natural pools, a spring-fed tilapia pond, and lush jungle trails. The estate is home to abundant fruit trees and gardens, offering a bounty of tropical favorites such as banana, papaya, coconut, starfruit, pineapple, orange, and grapefruit. </p>
                            <br/>
                            <br/>
                            <p>Completed in 2016, the primary residence spans over 8,000 square feet of exquisite design, with 5 bedrooms including three master suites. A vast infinity pool wraps around 80% of the home, inviting residents to relax amidst breathtaking ocean vistas. Crafted with durable, rainforest-friendly materials, the home’s interior features soaring 30-foot cathedral ceilings, teak decks, and hand-carved wooden accents that celebrate Costa Rican wildlife. The open-concept layout seamlessly connects indoor and outdoor living, with expansive teak decks, covered lounge areas, a grill station, pool bar, and a yoga platform with sweeping Pacific views.</p>
                            <br/>
                    </div>                    
                    </div>
                </div>


                <h2> Photo Gallery </h2>
                <div className="ppchild">
                    {/* <h3 className="imagechild"> Image Gallery </h3> */}
                    <ImageGallery items={images}
                    showPlayButton = {false}
                    showFullscreenButton = {true}/> 
                </div> 


                <div>
                    <h2> "Nature Lover's Dream" </h2>
                    <div className="ppchild">
                        <div className="ppchild">
                            <p>The estate’s crown jewel is a 40-foot waterfall, cascading into natural pools that wind through the lush rainforest. Explore the extensive private trails, cross walking bridges, or enjoy fishing in the stocked tilapia pond. With multiple ocean-view building sites available for future development, the property offers boundless potential for expansion. Located just 15-20 minutes from the vibrant town of Dominical, The Monkey Ranch offers convenient access to the area’s organic markets, regional grocery stores, and an array of dining options. Adventure seekers will relish proximity to world-class deep-sea fishing, whale watching at Marino Ballena National Park, and the marina at nearby Quepos. For those who desire a unique and luxurious retreat on Costa Rica’s South Pacific coast, the Monkey Ranch is a testament to both opulence and natural beauty. This exclusive estate must be experienced in person to fully appreciate its grandeur. Welcome to The Monkey Ranch , where the untamed splendor of the rainforest meets sophisticated living. --- This refined version highlights the property’s natural assets while emphasizing luxury, exclusivity, and potential for future development.</p>
                        </div>                    
                    </div>
                </div>

                <h2> Location Map </h2>
                <div className="ppchild">
                    <iframe className= "googlemap" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1061.4487667047285!2d-83.82168873041323!3d9.232779999427308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMTMnNTguMCJOIDgzwrA0OScxNS44Ilc!5e1!3m2!1sen!2sus!4v1703205205656!5m2!1sen!2sus" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                {/* width="900" height="600"*/}

                {/* <img className = "ppchild" src={La_Onda} width="900" height="700"/> */}
                    <h2> Video Gallery </h2>            
                <div className = "videocontainer ppchild" >
                    <iframe className="vcchild"
                        src={`https://www.youtube.com/embed/diGzI4BCFD0`}
                        frameborder="0" allowFullScreen
                        width="600" height="350"
                        >
                    </iframe>  

                    <iframe className="vcchild"
                        src={`https://www.youtube.com/embed/FVJ1hiRSxgk`}
                        frameborder="0" allowFullScreen
                        width="600" height="350"
                        >
                    </iframe>
              
                </div>

                {/* <h2>  Surverys & Maps  </h2>            
                <div className="ppchild">
                    <ImageGallery items={maps}
                    showPlayButton = {false}
                    showFullscreenButton = {true}
                    style={{ width: '200px', height: 'auto' }}/> 
                </div> */}
                </div>

                <div className="ppchild mrpropertynameandloc jhthumbnail">
                    <h1 class="p-name">Jungle House</h1>
                    <p class="p-location">Located on the Monkey Ranch</p>
                </div>

                <div className = "ppcontainer">

                <div>
                    <h2> About </h2>
                    <div className="ppchild">
                        <div className="ppchild">
                            <p>Nestled on its own peninsula between two spring-fed creeks, the second home called “The Jungle House”, features 7 bedrooms, making it an ideal rental property. It boasts its own private swimming pool and a charming swing bridge that crosses over the creek, adding a whimsical touch to the jungle retreat. Both homes offer unmatched privacy and luxury while integrating with the surrounding wilderness. </p>
                        </div>                    
                    </div>
                </div>

                <h2> Photo Gallery </h2>
                <div className="ppchild">
                    {/* <h3 className="imagechild"> Image Gallery </h3> */}
                    <ImageGallery items={junglehouseimages}
                    showPlayButton = {false}
                    showFullscreenButton = {true}/> 
                </div>
                
                <div>
                    <h2> Listing Agent </h2>
                    <div className="ppchild">
                        <div className="ppchild">
                            <p><strong>Karol Barboza</strong></p>
                            <p>Email: karol@tropical-investments.com</p>
                            <p>Phone: +506 88337895</p>
                        </div>                    
                    </div>
                </div>
                </div>
            </body>
            </html>
    
    
         );
}
 
export default MonkeyRanchPage;
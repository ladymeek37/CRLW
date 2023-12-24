import "../PropertyPage.css"
import Monkey_Ranch from "./Monkey_Ranch.jpg"
import ImageGallery from "react-image-gallery";

//Monkey Ranch Photo Imports
import DroneMR4 from "./BestofMonkeyRanch/DroneMR4.jpg"
import DroneMR7 from "./BestofMonkeyRanch/DroneMR7.jpg"
import DroneMR9 from "./BestofMonkeyRanch/DroneMR9.jpg"
import DroneMR10 from "./BestofMonkeyRanch/DroneMR10.jpg"
import Pool13 from "./BestofMonkeyRanch/Pool13.jpg"
import Pool9MR from "./BestofMonkeyRanch/Pool9MR.jpg"
import Pool7MR from "./BestofMonkeyRanch/Pool7MR.jpg"
import Pool6MR from "./BestofMonkeyRanch/Pool6MR.jpg"
import Pool5MR from "./BestofMonkeyRanch/Pool5MR.jpg"
import Pool3MR from "./BestofMonkeyRanch/Pool3MR.jpg"
import OceanViewFromPalapa2MR from "./BestofMonkeyRanch/OceanViewFromPalapa2MR.jpg"
import DrivewayView1MR from "./BestofMonkeyRanch/DrivewayView1MR.jpg"
import DrivewayView3MR from "./BestofMonkeyRanch/DrivewayView3MR.jpg"
import DrivewayMR from "./BestofMonkeyRanch/DrivewayMR.jpg"
import RockPathMR from "./BestofMonkeyRanch/RockPathMR.jpg"
import BalconyMR from "./BestofMonkeyRanch/BalconyMR.jpg"
import BackPorchViewMR from "./BestofMonkeyRanch/BackPorchViewMR.jpg"
import BackPorch3MR from "./BestofMonkeyRanch/BackPorch3MR.jpg"
import BackPorch2MR from "./BestofMonkeyRanch/BackPorch2MR.jpg"
import DominicalitoMR from "./BestofMonkeyRanch/DominicalitoMR.jpg"
import QueposViewMR from "./BestofMonkeyRanch/QueposViewMR.jpg"
import PoolOceanViewMR2 from "./BestofMonkeyRanch/PoolOceanViewMR2.jpg"
import PoolRockMR from "./BestofMonkeyRanch/PoolRockMR.jpg"
import RockPillarMR from "./BestofMonkeyRanch/RockPillarMR.jpg"
import RoofMR from "./BestofMonkeyRanch/RoofMR.jpg"
import TableMR from "./BestofMonkeyRanch/TableMR.jpg"
import SmoothieBar1MR from "./BestofMonkeyRanch/SmoothieBar1MR.jpg"
import SmoothieBar3MR from "./BestofMonkeyRanch/SmoothieBar3MR.jpg"
import UpstairsMasterView1MR from "./BestofMonkeyRanch/UpstairsMasterView1MR.jpg"
import UpstairsMasterView2MR from "./BestofMonkeyRanch/UpstairsMasterView2MR.jpg"
import UpstairsMasterView4MR from "./BestofMonkeyRanch/UpstairsMasterView4MR.jpg"
import WoodenStairsMR from "./BestofMonkeyRanch/WoodenStairsMR.jpg"
import MuralMR from "./BestofMonkeyRanch/MuralMR.jpg"
import WallArt2MR from "./BestofMonkeyRanch/WallArt2MR.jpg"
import WaterFountainMR from "./BestofMonkeyRanch/WaterFountainMR.jpg"

import JungleHouse1 from "./BestofJungleHouse/JungleHouse1.JPG"
import MRSunset1 from "./BestofJungleHouse/MRSunset1.JPG"
import MRSunset2 from "./BestofJungleHouse/MRSunset2.JPG"
import MRWaterfall1 from "./BestofJungleHouse/MRWaterfall1.JPG"
import MRWaterfall2 from "./BestofJungleHouse/MRWaterfall2.JPG"




const MonkeyRanchPage = () => {

    const images = [
        {
            original: DroneMR10,
            thumbnail: DroneMR10, 
        },
        {
            original: DroneMR4,
            thumbnail: DroneMR10, 
        },
        {
            original: DroneMR7,
            thumbnail: DroneMR10, 
        },
        {
            original: DroneMR9,
            thumbnail: DroneMR10, 
        },
        {
            original: Pool13,
            thumbnail: Pool13, 
        },
        {
            original: Pool9MR,
            thumbnail: Pool9MR, 
        },
        {
            original: Pool7MR,
            thumbnail: Pool7MR, 
        },
        {
            original: Pool6MR,
            thumbnail: Pool6MR, 
        },
        {
            original: Pool5MR,
            thumbnail: Pool5MR, 
        },
        {
            original: Pool3MR,
            thumbnail: Pool3MR, 
        },
        {
            original: OceanViewFromPalapa2MR,
            thumbnail: OceanViewFromPalapa2MR, 
        },
        {
            original: DrivewayView1MR,
            thumbnail: DrivewayView1MR, 
        },
        {
            original: DrivewayView3MR,
            thumbnail: DrivewayView3MR, 
        },
        {
            original: DrivewayMR,
            thumbnail: DrivewayMR, 
        },
        {
            original: RockPathMR,
            thumbnail: RockPathMR, 
        },
        {
            original: BalconyMR,
            thumbnail: BalconyMR, 
        },
        {
            original: BackPorchViewMR,
            thumbnail: BackPorchViewMR, 
        },
        {
            original: BackPorch2MR,
            thumbnail: BackPorch2MR, 
        },
        {
            original: BackPorch3MR,
            thumbnail: BackPorch3MR, 
        },
        {
            original: DominicalitoMR,
            thumbnail: DominicalitoMR, 
        },
        {
            original: QueposViewMR,
            thumbnail: QueposViewMR, 
        },
        {
            original: PoolOceanViewMR2,
            thumbnail: PoolOceanViewMR2, 
        },
        {
            original: PoolRockMR,
            thumbnail: PoolRockMR, 
        },
        {
            original: RockPillarMR,
            thumbnail: RockPillarMR, 
        },
        {
            original: RoofMR,
            thumbnail: RoofMR, 
        },
        {
            original: TableMR,
            thumbnail: TableMR, 
        },
        {
            original: SmoothieBar1MR,
            thumbnail: SmoothieBar1MR, 
        },
        {
            original: SmoothieBar3MR,
            thumbnail: SmoothieBar3MR, 
        },
        {
            original: UpstairsMasterView1MR,
            thumbnail: UpstairsMasterView1MR, 
        },
        {
            original: UpstairsMasterView2MR,
            thumbnail: UpstairsMasterView2MR, 
        },
        {
            original: UpstairsMasterView4MR,
            thumbnail: UpstairsMasterView4MR, 
        },
        {
            original: WoodenStairsMR,
            thumbnail: WoodenStairsMR, 
        },
        {
            original: MuralMR,
            thumbnail: MuralMR, 
        },        
        {
            original: WallArt2MR,
            thumbnail: WallArt2MR, 
        },
        {
            original: WaterFountainMR,
            thumbnail: WaterFountainMR, 
        },
        {
            original: MRSunset1,
            thumbnail: MRSunset1, 
        },
        {
            original: MRSunset2,
            thumbnail: MRSunset2, 
        },        
        {
            original: MRWaterfall1,
            thumbnail: MRWaterfall1, 
        },
        {
            original: MRWaterfall2,
            thumbnail: MRWaterfall2, 
        },

    ];
    const junglehouseimages = [
        {
            original: JungleHouse1,
            thumbnail: JungleHouse1, 
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
                    <h1 class="decorated-title">Monkey Ranch</h1>
                    <p>Dominicalito, Costa Rica</p>
                </div>
                <h2> Photo Gallery </h2>
                <div className="ppchild">
                    {/* <h3 className="imagechild"> Image Gallery </h3> */}
                    <ImageGallery items={images}
                    showPlayButton = {false}
                    showFullscreenButton = {true}/> 
                </div>
                <div>
                    <h2> About </h2>
                    <div className="ppchild">
                        <div className="ppchild">
                            {/* <h3>Playa Pavones:</h3> */}
                            <p>Nestled in the heart of the esteemed Escaleras neighborhood above Dominicalito Bay, Monkey Ranch unveils a rare 33-acre spectacle, boasting a mesmerizing blend of natural wonders. A sanctuary of creeks, streams, and a majestic 40-foot waterfall, this estate captivates with private swimming holes, pristine jungle, and panoramic ocean views that stretch far along the coast. The property's elevation on a 1,100’ ridgeline provides a refreshing ocean climate, creating an idyllic setting for a life of luxury in Costa Rica.  The estate includes 2 large luxury houses for a total of 12 bedrooms and a caretaker’s house. </p>
                            <br/>
                            <br/>
                            <p>A naturalist's paradise, Monkey Ranch invites owners and guests to revel in refreshing dips in natural pools, fishing in a spring fed tilapia pond , and exploring jungle trails.   A big portion of the property has been planted in fruit bearing trees and gardens.  Banana, papaya, coconut, starfruit, pineapple, orange, grapefruit just to name a few. </p>
                            <br/>
                            <br/>
                            <p>The main home was completed in 2016 and consists of 8,000+ square feet of luxury living.   The home has 5 bedrooms including three master suites.   A giant infinity swimming pool fronts on 80% of the house.   Lots of extra amenities in this home include all wood ceilings, stone floors, teak decks, solar hot water, and a great room with 30’ cathedral ceilings.   The home was built with extreme durable materials to stand up to the rainforest climate.  Hand-carved wooden finishes adorn the interior, showcasing custom 3D artwork depicting local wildlife. The open flow between living spaces and outdoor dining areas emphasizes the property's natural rainforest setting. Monkey Ranch seamlessly marries indoor and outdoor entertaining, with shaded lounge areas, a grilling station, covered smoker, walk-up pool bar, and yoga palapa platform overlooking the Pacific.</p>
                            <br/>
                            <br/>
                            <p>The second home (The Jungle House) was build on a peninsula with two spring fed creeks running right by the house.   The home has 7 bedrooms and is an excellent rental property. The jungle house also has a separate swimming pool and a swing bridge to cross over the creek.</p>
                            <br/>
                            <br/>
                            <p>The estate's centerpiece is a 40-foot waterfall, cascading amidst 72 acres of lush rainforest, connected by streams that weave through the compound. Fully stocked tilapia  pond,  walking bridges, and internal trails offer a private nature sanctuary within the sought-after Escaleras community. The property's size is unparalleled, perched on a ridgeline with sweeping ocean views, and its strategic location provides cool coastal breezes during the day and refreshing mountain winds at night.   There are multiple more ocean view building sites on the property for future development. </p>
                            <br/>
                            <br/>
                            <p>Conveniently located 15 to 20 minutes from downtown Dominical, Monkey Ranch provides access to a laid-back community with organic markets, regional grocery stores, and diverse dining options. The surrounding area offers adventure and exploration, from deep-sea fishing in Quepos Marina to whale watching at Marino Ballena National Park. </p>
                            <br/>
                            <br/>
                            <p> For those seeking a unique luxury experience on Costa Rica's South Pacific Coast, Monkey Ranch stands as a testament to opulence, seamlessly blending natural beauty with modern elegance. To truly grasp the magnitude of this extraordinary estate, a personal showing is a must on your Dominical luxury home tour. Welcome to a lifestyle where unparalleled luxury meets the untamed beauty of the rainforest at Monkey Ranch. </p>
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
                        src={`https://www.youtube.com/embed/FVJ1hiRSxgk`}
                        frameborder="0" allowFullScreen
                        width="600" height="350"
                        >
                    </iframe>              
                </div>
                <div className="ppchild propertynameandloc">
                    <h1 class="decorated-title secondtitle">Jungle House</h1>
                    <p>Located on the Monkey Ranch</p>
                </div>
                <h2> Photo Gallery </h2>
                <div className="ppchild">
                    {/* <h3 className="imagechild"> Image Gallery </h3> */}
                    <ImageGallery items={junglehouseimages}
                    showPlayButton = {false}
                    showFullscreenButton = {true}/> 
                </div>



                     

                </div>
            </body>
            </html>
    
    
         );
}
 
export default MonkeyRanchPage;
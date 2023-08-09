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
                {/* <div>
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
                  
                </div>                       */}

                </div>
            </body>
            </html>
    
    
         );
}
 
export default MonkeyRanchPage;
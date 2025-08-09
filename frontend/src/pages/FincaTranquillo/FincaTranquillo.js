import "../PropertyPage.css"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"


//Photo Imports:
import OceanView4FT from "./BestofFincaTranquillo/OceanView4FT.jpg"
import BuildingSiteFT from "./BestofFincaTranquillo/BuildingSiteFT.jpg"
import Cows1FT from "./BestofFincaTranquillo/Cows1FT.jpg"
import JungleView1FT from "./BestofFincaTranquillo/JungleView1FT.jpg"
import JungleView2FT from "./BestofFincaTranquillo/JungleView2FT.jpg"
import MountainView1FT from "./BestofFincaTranquillo/MountainView1FT.jpg"
import MountainView2FT from "./BestofFincaTranquillo/MountainView2FT.jpg"
import OceanView2FT from "./BestofFincaTranquillo/OceanView2FT.jpg"
import OceanView5FT from "./BestofFincaTranquillo/OceanView5FT.jpg"
import OceanView6FT from "./BestofFincaTranquillo/OceanView6FT.jpg"
import OceanView7FT from "./BestofFincaTranquillo/OceanView7FT.jpg"
import OceanView3FT from "./BestofFincaTranquillo/OeanView3FT.jpg"
import River1FT from "./BestofFincaTranquillo/River1FT.jpg"
import River2FT from "./BestofFincaTranquillo/River2FT.jpg"
import River3FT from "./BestofFincaTranquillo/River3FT.jpg"
import River4FT from "./BestofFincaTranquillo/River4FT.jpg"
import Waterfall1FT from "./BestofFincaTranquillo/Waterfall1FT.jpg"
import Waterfall2FT from "./BestofFincaTranquillo/Waterfall2FT.jpg"
import Waterfall3FT from "./BestofFincaTranquillo/Waterfall3FT.jpg"
import Waterfall4FT from "./BestofFincaTranquillo/Waterfall4FT.jpg"



//Map Imports:
import MapFT1 from "./PropertyMaps/MapFT1.png"
import MapFT2 from "./PropertyMaps/MapFT2.png"
import MapFT3 from "./PropertyMaps/MapFT3.png"



//Nav Button Imports
import { CustomLeftNavButton, CustomRightNavButton } from '../../components/NavButtons'


// image gallery package and info = https://www.npmjs.com/package/react-image-gallery
// youtube tutorial = https://www.youtube.com/watch?v=AnG7LMcX_z8

const FincaTranquilloPage = () => {

    const images = [
        {
            original: OceanView4FT,
            thumbnail: OceanView4FT, 
        },
        {
            original: OceanView2FT,
            thumbnail: OceanView2FT, 
        },
        {
            original: OceanView3FT,
            thumbnail: OceanView3FT, 
        },
        {
            original: MountainView1FT,
            thumbnail: MountainView1FT, 
        },
        {
            original: MountainView2FT,
            thumbnail: MountainView2FT, 
        },
        {
            original: River1FT,
            thumbnail: River1FT, 
        },
        {
            original: River2FT,
            thumbnail: River2FT, 
        },
        {
            original: River3FT,
            thumbnail: River3FT, 
        },
        {
            original: River4FT,
            thumbnail: River4FT, 
        },
        {
            original: Waterfall2FT,
            thumbnail: Waterfall2FT, 
        },
        {
            original: Waterfall3FT,
            thumbnail: Waterfall3FT, 
        },
        {
            original: Waterfall4FT,
            thumbnail: Waterfall4FT, 
        },
        {
            original: Waterfall1FT,
            thumbnail: Waterfall1FT, 
        },
        {
            original: JungleView1FT,
            thumbnail: JungleView1FT, 
        },
        {
            original: JungleView2FT,
            thumbnail: JungleView2FT, 
        },
        {
            original: BuildingSiteFT,
            thumbnail: BuildingSiteFT, 
        },
        {
            original: Cows1FT,
            thumbnail: Cows1FT, 
        },
        {
            original: OceanView5FT,
            thumbnail: OceanView5FT, 
        },
        {
            original: OceanView6FT,
            thumbnail: OceanView6FT, 
        },
        {
            original: OceanView7FT,
            thumbnail: OceanView7FT, 
        },

                    

    ]

    const maps = [

        {
            original: MapFT2,
            thumbnail: MapFT2, 
        },
        {
            original: MapFT3,
            thumbnail: MapFT3, 
        },
        {
            original: MapFT1,
            thumbnail: MapFT1, 
        },


      ];
      
    return ( 
        <html>
            <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
            </head>
        <body>
        <div>
            <div className="ppchild mrpropertynameandloc ftthumbnail" >
                <h1 class="p-name">Finca Tranquilla</h1>
                <p class="p-location">Playa Pavones, Costa Rica</p>
                    {/* <p>35 Acres</p> */}
            </div>
        </div>
        <div className = "ppcontainer">
            <div>
                <h2> About Finca Tranquilla </h2>
                <div className="ppchild">
                    <div className="ppchild">
                        <p>76hectars, 190 acres</p>
                        <br></br>
                        <p>Beautiful recreational and cattle ranch located 15 minutes from the beach and La Onda surf break or 20 minutes from Pavones.</p>
                        <br></br>
                        <p>Currently enjoyed by the owner as a working cattle ranch supporting 80 head of livestock. The property is approximately 70% agricultural in improved pastures. The balance of the property is beautiful jungle with heavy forest. </p>
                        <br></br>
                        <p>There is a lot of water on this property including several large springs which mark the beginning headwaters of the La Onda river. The water is all private and passes through the center of the property. There are several deep swimming holes and several water falls.</p>
                        <br></br>
                        <p>The property has ocean view with several good areas for building.  </p>
                    </div>
                    <div className="lineunderelement"></div>                      
                </div>
            </div> 
            <h2> Photo Gallery </h2>
                <div className="ppchild">
                    <div className="ppchild">
                        {/* <h3 className="imagechild"> Image Gallery </h3> */}
                        <ImageGallery items={images}
                        showPlayButton = {false}
                        showFullscreenButton = {true}/> 
                    </div>
                <div className="lineunderelement"></div>
            </div>


            <div>
                <h2> Location Map </h2>
                <div className="ppchild">
                    <div className="ppchild">
                        {/* <iframe className= "googlemap" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4121.50373186746!2d-83.10363889999999!3d8.423583299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjUnMjQuOSJOIDgzwrAwNicxMy4xIlc!5e1!3m2!1sen!2sus!4v1703610672811!5m2!1sen!2sus" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        <iframe className= "googlemap" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3844.2686208333703!2d-83.09151399999999!3d8.396099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjMnNDYuMCJOIDgzwrAwNScyOS41Ilc!5e1!3m2!1sen!2scr!4v1750972246083!5m2!1sen!2scr" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div> 
                    <div className="lineunderelement"></div>
                </div>
               
            </div>


 
                <h2>  Surverys & Maps  </h2>            
            <div className="ppchild">
                <div className="ppchild">
                    <ImageGallery items={maps}
                        //   renderLeftNav={(onClick, disabled) => <CustomLeftNavButton onClick={onClick} />}
                        //   renderRightNav={(onClick, disabled) => <CustomRightNavButton onClick={onClick} />}
                    showPlayButton = {false}
                    showFullscreenButton = {true}
                    style={{ width: '200px', height: 'auto' }}/> 
                </div>
                <div className="lineunderelement"></div>
            </div>

            </div>
        </body>
        </html>


     );
}
 
export default FincaTranquilloPage;

// id="ytplayer" type="text/html" width="1015" height="653"

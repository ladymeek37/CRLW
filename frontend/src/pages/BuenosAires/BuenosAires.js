import Buenos_Aires from "./Buenos_Aires.JPG"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import "../PropertyPage.css"

//Photo Imports
import CowsMainBA from "./BestofBuenosAires/CowsMainBA.JPG"
import DonkeyPOVBA from "./BestofBuenosAires/DonkeyPOVBA.jpeg"
import HouseBA from "./BestofBuenosAires/HouseBA.JPG"
import LivestockPenBA from "./BestofBuenosAires/LivestockPenBA.jpeg"
import LivestockPenBA2 from "./BestofBuenosAires/LivestockPenBA2.jpeg"
import LivestockPenBA3 from "./BestofBuenosAires/LivestockPenBA3.JPG"
import PastureBA from "./BestofBuenosAires/PastureBA.JPG"
import RiverBA from "./BestofBuenosAires/RiverBA.jpeg"
import RiverBA2 from "./BestofBuenosAires/RiverBA2.JPG"
import RiverBA3 from "./BestofBuenosAires/RiverBA3.JPG"
import RiverCharBA from "./BestofBuenosAires/RiverCharBA.JPG"
import WaterBuffalo3BA from "./BestofBuenosAires/WaterBuffalo3BA.JPG"


//Survey Imports
import BuenosAiresPlano from "./PropertyMaps/BuenosAiresFarmPlano.jpg"


const BuenosAiresPage = () => {

    const images = [
        {
            original: CowsMainBA,
            thumbnail: CowsMainBA, 
        },
        {
            original: DonkeyPOVBA,
            thumbnail: DonkeyPOVBA, 
        },
        {
            original: HouseBA,
            thumbnail: HouseBA, 
        },
        {
            original: LivestockPenBA,
            thumbnail: LivestockPenBA, 
        },
        {
            original: LivestockPenBA2,
            thumbnail: LivestockPenBA2, 
        },
        {
            original: LivestockPenBA3,
            thumbnail: LivestockPenBA3, 
        },
        {
            original: PastureBA,
            thumbnail: PastureBA, 
        },
        {
            original: RiverBA,
            thumbnail: RiverBA, 
        },
        {
            original: RiverBA2,
            thumbnail: RiverBA2, 
        },
        {
            original: RiverBA3,
            thumbnail: RiverBA3, 
        },
        {
            original: RiverCharBA,
            thumbnail: RiverCharBA, 
        },
        {
            original: WaterBuffalo3BA,
            thumbnail: WaterBuffalo3BA,
        },
    ]

    const maps = [
        {
            original: BuenosAiresPlano,
            thumbnail: BuenosAiresPlano, 
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
            <div className="ppchild mrpropertynameandloc bathumbnail" >
            <h1 class="p-name">Buenos Aires</h1>
            <p class="p-location">San Isidro, Costa Rica</p>
            {/* <p>35 Acres</p> */}
            </div>
        </div>        
        <div className = "ppcontainer">
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

            <h2> Location Map </h2>
                <div className="ppchild">
                    <div className="ppchild">
                    <iframe className= "googlemap" src="https://www.google.com/maps/d/embed?mid=1P01IZuTouSlrQxrZtw8hLHXGidWNRUo&ehbc=2E312F&noprof=1"></iframe>
                    </div>
                    <div className="lineunderelement"></div>
                </div>

            <div className="ppchild">
                <h2>  Surverys & Maps  </h2>            
                <div className="ppchild">
                    <ImageGallery items={maps}
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
 
export default BuenosAiresPage;
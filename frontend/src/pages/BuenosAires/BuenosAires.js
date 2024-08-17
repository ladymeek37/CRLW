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
    return ( 
        <div className = "ppcontainer">
            <div className="ppchild propertynameandloc">
                <h1 class="decorated-title">BuenosAires</h1>
                <p>San Isidro, Costa Rica</p>
            </div>
            <h2> Photo Gallery </h2>
                <div className="ppchild">
                    {/* <h3 className="imagechild"> Image Gallery </h3> */}
                    <ImageGallery items={images}
                    showPlayButton = {false}
                    showFullscreenButton = {true}/> 
                </div>       
        </div>
     );
}
 
export default BuenosAiresPage;
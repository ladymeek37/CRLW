import Buenos_Aires from "./Buenos_Aires.JPG"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import "../PropertyPage.css"

//Photo Imports
import BlackHorseBA from "./BestofBuenosAires/BlackHorseBA.JPG"
import BrownHorseBA from "./BestofBuenosAires/BrownHorseBA.JPG"
import CharliBA from "./BestofBuenosAires/CharliBA.JPG"
import Cows1BA from "./BestofBuenosAires/Cows1BA.JPG"
import Cows2BA from "./BestofBuenosAires/Cows2BA.JPG"
import Cows3BA from "./BestofBuenosAires/Cows3BA.JPG"
import Cows4BA from "./BestofBuenosAires/Cows4BA.JPG"
import CranesBA from "./BestofBuenosAires/CranesBA.JPG"
import PapaCharBA from "./BestofBuenosAires/PapaCharBA.JPG"
import PiggyBA from "./BestofBuenosAires/PiggyBA.JPG"
import PoopyPiggyBA from "./BestofBuenosAires/PoopyPiggyBA.JPG"
import RiverCharBA from "./BestofBuenosAires/RiverCharBA.JPG"
import RiverChar2BA from "./BestofBuenosAires/RiverChar2BA.JPG" 
import WaterBuffalo1BA from "./BestofBuenosAires/WaterBuffalo1BA.JPG"
import WaterBuffalo2BA from "./BestofBuenosAires/WaterBuffalo2BA.JPG"
import WaterBuffalo3BA from "./BestofBuenosAires/WaterBuffalo3BA.JPG"


const BuenosAiresPage = () => {

    const images = [
        {
            original: Cows2BA,
            thumbnail: Cows2BA, 
        },
        {
            original: Cows1BA,
            thumbnail: Cows1BA, 
        },
        {
            original: Cows3BA,
            thumbnail: Cows3BA, 
        },
        {
            original: Cows4BA,
            thumbnail: Cows4BA, 
        },
        {
            original: WaterBuffalo1BA,
            thumbnail: WaterBuffalo1BA, 
        },
        {
            original: WaterBuffalo2BA,
            thumbnail: WaterBuffalo2BA, 
        },
        {
            original: WaterBuffalo3BA,
            thumbnail: WaterBuffalo3BA, 
        },
        {
            original: RiverChar2BA,
            thumbnail: RiverChar2BA, 
        },
        {
            original: RiverCharBA,
            thumbnail: RiverCharBA, 
        },
        {
            original: BlackHorseBA,
            thumbnail: BlackHorseBA, 
        },
        {
            original: BrownHorseBA,
            thumbnail: BrownHorseBA, 
        },
        {
            original: CranesBA,
            thumbnail: CranesBA, 
        },
        {
            original: CharliBA,
            thumbnail: CharliBA, 
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
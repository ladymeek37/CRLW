import "../PropertyPage.css"
import SanVitoThumbnail from "./SanVitoImages/SanVitoThumbnail.png"
import SanVitoThumbnail2 from "./SanVitoImages/SanVitoThumbnail2.png"
import ImageGallery from "react-image-gallery";

//San Vito Survey Imports 
import SanVitoPlano1 from "./SanVitoMaps/SanVitoPlano1.png"
import SanVitoPlano2 from "./SanVitoMaps/SanVitoPlano2.png"
import SanVitoPlano3 from "./SanVitoMaps/SanVitoPlano3.jpg"


//San Vito Image Imports
import Barn3SV from "./SanVitoImages/Barn3SV.jpg"
import Charli1SV from "./SanVitoImages/Charli1SV.jpg"
import CowView1SV from "./SanVitoImages/CowView1SV.jpg"
import HorsePOV1SV from "./SanVitoImages/HorsePOV1SV.jpg"
import HorsePOV4SV from "./SanVitoImages/HorsePOV4SV.jpg"
import HorsePOV5SV from "./SanVitoImages/HorsePOV5SV.jpg"
import House1SV from "./SanVitoImages/House1SV.jpg"
import MountainView1SV from "./SanVitoImages/MountainView1SV.jpg"
import MountainView2SV from "./SanVitoImages/MountainView2SV.jpg"
import Panarama1SV from "./SanVitoImages/Panarama1SV.jpg"
import Panarama2SV from "./SanVitoImages/Panarama2SV.jpg"
import River4SV from "./SanVitoImages/River4SV.jpg"
import RiverSV from "./SanVitoImages/RiverSV.jpg"
import RiverView1SV from "./SanVitoImages/RiverView1SV.jpg"
import RiverView2SV from "./SanVitoImages/RiverView2SV.jpg"
import RiverView3SV from "./SanVitoImages/RiverView3SV.jpg"
import RiverView4SV from "./SanVitoImages/RiverView4SV.jpg"
import RiverView6SV from "./SanVitoImages/RiverView6SV.jpg"
import RiverView7SV from "./SanVitoImages/RiverView7SV.jpg"
import RiverView8SV from "./SanVitoImages/RiverView8SV.jpg"
import RiverView10SV from "./SanVitoImages/RiverView10SV.jpg"
import RiverView11SV from "./SanVitoImages/RiverView11SV.jpg"
import RiverView12SV from "./SanVitoImages/RiverView12SV.jpg"
import RiverView13SV from "./SanVitoImages/RiverView13SV.jpg"
import RiverView15SV from "./SanVitoImages/RiverView15SV.jpg"
import SkyMountainView2SV from "./SanVitoImages/SkyMountainView2SV.jpg"
import SkyMountainView3SV from "./SanVitoImages/SkyMountainView3SV.jpg"
import SmallerWaterfalls2SV from "./SanVitoImages/SmallerWaterfalls2SV.jpg"
import Waterfall1SV from "./SanVitoImages/Waterfall1SV.jpg"
import Waterfall3SV from "./SanVitoImages/Waterfall3SV.jpg"
import Waterfall4SV from "./SanVitoImages/Waterfall4SV.jpg"
import Waterfall7SV from "./SanVitoImages/Waterfall7SV.jpg"
import Waterfall9SV from "./SanVitoImages/Waterfall9SV.jpg"
import WaterfallClose4SV from "./SanVitoImages/WaterfallClose4SV.jpg"





const SanVitoPage = () => {

    const sanvitoimages = [
        {
            original: CowView1SV,
            thumbnail: CowView1SV, 
        },
        {
            original: MountainView1SV,
            thumbnail: MountainView1SV, 
        },
        {
            original: MountainView2SV,
            thumbnail: MountainView2SV, 
        },
        {
            original: Panarama2SV,
            thumbnail: Panarama2SV, 
        },
        {
            original: Panarama1SV,
            thumbnail: Panarama1SV, 
        },
        {
            original: RiverView1SV,
            thumbnail: RiverView1SV, 
        },
        {
            original: RiverView13SV,
            thumbnail: RiverView13SV, 
        },
        {
            original: RiverView7SV,
            thumbnail: RiverView7SV, 
        },
        {
            original: RiverView4SV,
            thumbnail: River4SV, 
        },
        {
            original: RiverSV,
            thumbnail: RiverSV, 
        },
        {
            original: Waterfall9SV,
            thumbnail: Waterfall9SV, 
        },
        {
            original: Waterfall3SV,
            thumbnail: Waterfall3SV, 
        },
        {
            original: Waterfall1SV,
            thumbnail: Waterfall1SV, 
        },
        {
            original: SmallerWaterfalls2SV,
            thumbnail: SmallerWaterfalls2SV, 
        },
        {
            original: WaterfallClose4SV,
            thumbnail: WaterfallClose4SV, 
        },
        {
            original: RiverView2SV,
            thumbnail: RiverView2SV, 
        },
        {
            original: RiverView6SV,
            thumbnail: RiverView6SV, 
        },
        {
            original: SkyMountainView2SV,
            thumbnail: SkyMountainView2SV, 
        },
        {
            original: SkyMountainView3SV,
            thumbnail: SkyMountainView3SV, 
        },
        {
            original: Barn3SV,
            thumbnail: Barn3SV, 
        },
        {
            original: House1SV,
            thumbnail: House1SV, 
        },
        {
            original: Charli1SV,
            thumbnail: Charli1SV, 
        },
        {
            original: HorsePOV4SV,
            thumbnail: HorsePOV4SV, 
        },
        {
            original: HorsePOV5SV,
            thumbnail: HorsePOV5SV, 
        },
        {
            original: HorsePOV1SV,
            thumbnail: HorsePOV1SV, 
        },
        {
            original: RiverView8SV,
            thumbnail: RiverView8SV, 
        },

        {
            original: Waterfall4SV,
            thumbnail: Waterfall4SV, 
        },
        {
            original: Waterfall7SV,
            thumbnail: Waterfall7SV, 
        },
        {
            original: RiverView3SV,
            thumbnail: RiverView3SV, 
        },
        {
            original: RiverView10SV,
            thumbnail: RiverView10SV, 
        },
        {
            original: RiverView11SV,
            thumbnail: RiverView11SV, 
        },
        {
            original: RiverView12SV,
            thumbnail: RiverView12SV, 
        },
        {
            original: RiverView15SV,
            thumbnail: RiverView15SV, 
        },
    ]

    const sanvitomaps = [      
        {
            original: SanVitoPlano1,
            thumbnail: SanVitoPlano1, 
        },
        {
            original: SanVitoPlano2,
            thumbnail: SanVitoPlano2, 
        },
        {
            original: SanVitoPlano3,
            thumbnail: SanVitoPlano3, 
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
        <div className="ppchild mrpropertynameandloc svthumbnail" >
        <h1 class="p-name">San Vito Farm</h1>
        <p class="p-location">Costa Rica</p>
        {/* <p>35 Acres</p> */}
    </div>
    </div>
        <div className = "ppcontainer">
        <div>
                <h2> San Vito </h2>
                    <div className="ppchild">
                        <div className="ppchild">
                            <p>Discover a breathtaking 230-hectare estate in the highlands of San Vito, perched at 730 meters above sea level with a cool, refreshing climate year-round. Located two hours from Uvita, Osa, and San Isidro del General, this property enjoys excellent access via paved roads and a short, easily traversed gravel road. Upon arrival, you’ll be greeted by lush landscapes, a refreshing mountain breeze, and the soothing sounds of nature. Bordering La Amistad National Park and Costa Rica’s Main Ridgeline, this property is a haven of biodiversity and natural beauty.</p>
                        </div> 
                        <div className="lineunderelement"></div>                   
                    </div>
                </div>
                <div>
                <h2> Photo Gallery </h2>
                {/* <div className="ppchild"> */}
                    <div className="ppchild">
                        <div className="ppchild">
                            {/* <h3 className="imagechild"> Image Gallery </h3> */}
                            <ImageGallery items={sanvitoimages}
                            showPlayButton = {false}
                            showFullscreenButton = {true}/> 
                        </div>
                    <div className="lineunderelement"></div>
                    </div>
                </div>

                <div>
                <h2> Key Features </h2>
                    <div className="ppchild">
                        <div className="ppchild">

                            <p> Natural Water Paradise: A pristine river crosses the property, creating stunning waterfalls and at least three natural swimming pools, perfect for relaxation and immersion in nature. Access to the main waterfall is already cleared, making it easy to enjoy this spectacular feature.</p>
                            <br/>
                            <p> Diverse Landscape: Approximately 80 hectares of pastureland for cattle or sustainable farming, while the remaining land features lush forests and rolling hills, home to abundant wildlife.</p>
                            <br/>
                            <p> Wellness Retreat & Eco-Tourism Potential: With its serene environment, fresh air, and abundant natural water sources, this property is ideal for a wellness retreat, yoga sanctuary, eco-lodge, or sustainable resort focused on holistic health and rejuvenation.</p>
                            <br/>
                            <p> Sustainability & Development Opportunities: The expansive landscape allows for reforestation, permaculture, conservation projects, or an agroforestry venture, offering diverse investment potential.</p>
                            <br/>
                            <p> Caretakers On-Site: Dedicated caretakers are already present, ensuring the property is well-maintained and secure.</p>
                            <br/>
                            <p> Convenient Location: Just 25 minutes from San Vito Airport, making travel easy for visitors, guests, or future residents.</p>
                            <br/>
                            <p>Whether you envision an eco-lodge, a luxury wellness retreat, or a private nature sanctuary, this property offers an unparalleled opportunity to create something truly extraordinary in one of Costa Rica’s most stunning regions.</p>    
                        </div> 
                        <div className="lineunderelement"></div>                   
                    </div>
                </div>

                <div className = "ppchild">
                <h2> Property Video </h2>            
                    <div className = "videocontainer ppchild" >
                        <iframe className="vcchild"
                            src={`https://www.youtube.com/embed/I58-ND7b_jI`}
                            frameborder="0" allowFullScreen
                            width="600" height="350"
                            >
                        </iframe>  
                    </div>
                    <div className="lineunderelement"></div> 
            </div>
            
                {/* </div> */}
            <h2> Location Map </h2>
                <div className="ppchild">
                    <div className="ppchild">
                        <iframe className= "googlemap" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4243.781217115677!2d-83.01782492469503!3d8.970255289905134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNTgnMTIuOSJOIDgzwrAwMCc1NC45Ilc!5e1!3m2!1sen!2sus!4v1768257951474!5m2!1sen!2sus"></iframe>
                    </div>
                    <div className="lineunderelement"></div> 
                </div>

            <h2>  Surverys & Maps  </h2>            
                <div className="ppchild">
                    <div className="ppchild">
                        <ImageGallery items={sanvitomaps}
                        showPlayButton = {false}
                        showFullscreenButton = {true}
                        style={{ width: '200px', height: 'auto' }}/> 
                    </div>
                    <div className="lineunderelement"></div> 
                </div>

                <div>
                    <h2> Listing Agent </h2>
                    <div className="ppchild">
                        <div className="ppchild">
                            <p className="agentinfo"><strong>Karol Barboza</strong></p>
                            <p className="agentinfo">Email: karol@tropical-investments.com</p>
                            <p className="agentinfo">Phone: +506 88337895</p>
                        </div>   
                        <div className="lineunderelement"></div>                 
                    </div>
                </div>


            {/* <img className = "ppchild" src={Rock_House} width="900" height="700"/>  */}
            {/* <p className = "ppchild">Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica.</p>            */}
        </div>
        </body>
        </html>
    );
}
 
export default SanVitoPage;
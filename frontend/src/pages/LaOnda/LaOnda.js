import La_Onda from "./La_Onda.jpg"
import "../PropertyPage.css"

const LaOndaPage = () => {
    return ( 
        <div className = "ppcontainer">
            <h1 className = "ppchild">La Onda</h1>
            {/* <img className = "ppchild" src={La_Onda} width="900" height="700"/> */}
            <iframe 
                src={`https://www.youtube.com/embed/q4qaDL_m-AY`}
                frameborder="0" allowFullScreen
                width="1015" height="572">
            </iframe> 
            <p className = "ppchild">Here's some example text about La Onda property in Playa Pavones, Costa Rica. Here's some example text about La Onda property in Playa Pavones, Costa Rica. Here's some example text about La Onda property in Playa Pavones, Costa Rica. Here's some example text about La Onda property in Playa Pavones, Costa Rica. Here's some example text about La Onda property in Playa Pavones, Costa Rica. Here's some example text about La Onda property in Playa Pavones, Costa Rica. Here's some example text about La Onda property in Playa Pavones, Costa Rica. Here's some example text about La Onda property in Playa Pavones, Costa Rica.</p>           
        </div>

     );
}
 
export default LaOndaPage;

// id="ytplayer" type="text/html" width="1015" height="653"
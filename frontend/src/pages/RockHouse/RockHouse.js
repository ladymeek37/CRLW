import "./../PropertyPage.css"
import Rock_House from "./Rock_House.jpg"
const RockHousePage = () => {
    return (
        <div className = "ppcontainer">
            <h1 className = "ppchild">Rock House</h1>
            <img className = "ppchild" src={Rock_House} width="900" height="700"/> 
            <p className = "ppchild">Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica.</p>           
        </div>
    );
}
 
export default RockHousePage;
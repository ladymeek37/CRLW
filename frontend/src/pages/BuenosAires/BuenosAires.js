import Buenos_Aires from "./Buenos_Aires.JPG"
import "../PropertyPage.css"

const BuenosAiresPage = () => {
    return ( 
        <div className = "ppcontainer">
            <h1 className = "ppchild">Buenos Aires</h1>
            <img className = "ppchild" src={Buenos_Aires} width="900" height="700"/> 
            <p className = "ppchild">Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica.</p>           
        </div>
     );
}
 
export default BuenosAiresPage;
import "../PropertyPage.css"
import Monkey_Ranch from "./Monkey_Ranch.jpg"

const MonkeyRanchPage = () => {
    return ( 
        <div className = "ppcontainer">
            <h1 className = "ppchild">Monkey Ranch</h1>
            <img className = "ppchild" src={Monkey_Ranch} width="900" height="700"/> 
            <p className = "ppchild">Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica. Here's some example text about this property in Costa Rica.</p>           
        </div>
     );
}
 
export default MonkeyRanchPage;
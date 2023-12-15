
import CATALOGO from "../CATALOGO.json";
import Enviado from "./Enviado";


const Firebase = () => {
    CATALOGO.map((product) => <Enviado data={product}/>)
}


export default Firebase;
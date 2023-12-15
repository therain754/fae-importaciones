import Product from "../Components/Product";
import CATALOGO from "../CATALOGO.json";
import Header from "../Components/Header";
import {Container} from "react-bootstrap";


const Catalogo = () => {

  return (
      <>
          <Header/>
          <Container>
              {CATALOGO.map((product) => <Product data={product}/>)}
          </Container>
    </>
  );
}

export default Catalogo;
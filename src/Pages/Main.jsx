import principal from '../IMG/principal.jpg';
import Header from "../Components/Header";
import {Image} from "react-bootstrap";
import ProductCard from "../Components/ProductCard";
import "./Main.css";

const Main = () => {
  return <>
      <Header/>
      <div className="d-flex justify-content-center bg-dark">
          <Image src={principal} alt="" className="img"/>
      </div>
      <div className=" grupo d-flex justify-content-around bg-dark ">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
      </div>
      <div className=" grupo d-flex justify-content-around bg-dark ">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
      </div>
      <div className=" grupo d-flex justify-content-around bg-dark ">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
      </div>
      <div className=" grupo d-flex justify-content-around bg-dark ">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
      </div>
  </>
}

export default Main;
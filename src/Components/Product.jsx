import {Col, Image, Row} from "react-bootstrap";
import {getStorage, ref, getDownloadURL} from "firebase/storage";
import "./Product.css";
export let declare;


const Product = (props) => {
    const {CODIGO, PRECIO} = props.data;


    return <Row className="fila">
        <Col className="columna d-flex align-items-center justify-content-center">
            <Image src="https://firebasestorage.googleapis.com/v0/b/fae-importaciones.appspot.com/o/images%2FIMG-001.jpg?alt=media&token=be276ec1-ec5a-4c9e-8d81-aad5a18391bf" className="imagen"></Image>
        </Col>
        <Col className="columna text d-flex align-items-center justify-content-center">code: {CODIGO}</Col>
        <Col className="columna text d-flex align-items-center justify-content-center">price: {PRECIO} Bs.</Col>
    </Row>;
}

function DownloadImg() {

    const storage = getStorage();
    let blob;
    getDownloadURL(ref(storage, 'images/IMG-001.jpg'))
        .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'

            // This can be downloaded directly:
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
                blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();

        });

    return <>
    <img src={blob} alt=""></img>
    </>
}

export default Product;
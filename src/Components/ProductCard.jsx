import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = () => {
    return (
        <Card border="primary" bg="dark" key="dark" text="light" style={{ width: '18rem' }} className="mb-2" >
            <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/fae-importaciones.appspot.com/o/images%2FIMG-001.jpg?alt=media&token=be276ec1-ec5a-4c9e-8d81-aad5a18391bf" />
            <Card.Body>
                <Card.Title>Juguete</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, alias aspernatur, at beatae blanditiis cum debitis distinctio eius fugit hic, iusto labore molestiae quae quibusdam quis quod ratione recusandae sapiente.
                </Card.Text>
                <Button variant="dark">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
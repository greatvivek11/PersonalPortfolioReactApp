import { Card } from "react-bootstrap";
import '../styles/cardComponent.css';

function CardComponent(props) {
    const image = props.image;
    const title = props.title;
    const text = props.text;
    return (
        <div>
            <Card className="card">
                <Card.Img variant="top" src={image} height="auto" width="auto" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardComponent

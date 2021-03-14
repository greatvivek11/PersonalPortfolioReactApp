import { Card } from "react-bootstrap";
import '../styles/cardComponent.css';

function CardComponent(props) {
    const image = props.image;
    const title = props.title;
    return (
        <div>
            <Card className="card">
                <Card.Img className="cardImg" variant="top" src={image} alt="SkillImage" height="10rem" width="10rem"/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardComponent

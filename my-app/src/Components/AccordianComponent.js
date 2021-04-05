import { Accordion, Card } from 'react-bootstrap';
import '../styles/accordianComponent.css';

function AccordianComponent({ props,styles }) {
    var keys = Object.keys(props);
    return (
        <Accordion id="accordian">
            {keys.map((e, i) => {
               return <Card key={i+1} id="card" >
                    <Accordion.Toggle id="header" as={Card.Header} style={{background: "linear-gradient(to right,"+styles.color1+","+styles.color2+")" }} eventKey={i+1}>
                        {e}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={i+1}>
                        <Card.Body id="body">{props[e]}</Card.Body>
                    </Accordion.Collapse>
                </Card>
            }
            )}
        </Accordion>
    )
}

export default AccordianComponent

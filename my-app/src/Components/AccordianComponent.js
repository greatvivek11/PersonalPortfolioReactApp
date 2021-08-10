import { Accordion, Card } from 'react-bootstrap';
import '../styles/accordianComponent.css';

function AccordianComponent({ props, styles }) {
    var keys = Object.keys(props);
    keys.forEach(e => {
        console.log(props[e].link);
    });
    return (
        <Accordion id="accordian">
            {keys.map((e, i) => {
                return <Card key={i + 1} id="card" >
                    <Accordion.Toggle id="header" as={Card.Header} style={{ background: "linear-gradient(to right," + styles.color1 + "," + styles.color2 + ")" }} eventKey={i + 1}>
                        {e}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={i + 1}>
                        <Card.Body id="body">
                            <Card.Title>{e}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{props[e].subtitle}</Card.Subtitle>
                            <Card.Text>
                                {props[e].body}
                            </Card.Text>
                        <Card.Link href={props[e].link}>Link</Card.Link>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            }
            )}
        </Accordion>
    )
}

export default AccordianComponent

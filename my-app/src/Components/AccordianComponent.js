import { Accordion, Card } from 'react-bootstrap';
import '../styles/accordianComponent.css';

function AccordianComponent({ props, styles }) {
    var keys = Object.keys(props);

    function returnCardBody(e) {
        if (props[e].subtitle !== undefined && props[e].link !== undefined)
            if (props[e].link === "#") {
                return (
                    <Card.Body id="body">
                        <Card.Title>{props[e].title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props[e].subtitle}</Card.Subtitle>
                        <Card.Text>
                            {props[e].body}
                        </Card.Text>
                    </Card.Body>
                )
            } else {
                return (
                    <Card.Body id="body">
                        <Card.Title>{props[e].title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props[e].subtitle}</Card.Subtitle>
                        <Card.Text>
                            {props[e].body}
                        </Card.Text>
                        <Card.Link href={props[e].link}>Link</Card.Link>
                    </Card.Body>
                )
            }
        else {
            return (
                <Card.Body id="body">
                    <Card.Text>
                        {props[e].body}
                    </Card.Text>
                </Card.Body>
            )
        }
    }
    return (
        <Accordion id="accordian">
            {keys.map((e, i) => {
                return <Card key={i + 1} id="card" >
                    <Accordion.Toggle id="header" as={Card.Header} style={{ background: "linear-gradient(to right," + styles.color1 + "," + styles.color2 + ")" }} eventKey={i + 1}>
                        {e}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={i + 1}>
                        {returnCardBody(e)}
                    </Accordion.Collapse>
                </Card>
            }
            )}
        </Accordion>
    )
}

export default AccordianComponent

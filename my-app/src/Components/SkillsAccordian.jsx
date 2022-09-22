import React from 'react';
import '../styles/SkillsAccordian.css';
import { Accordion, Card } from 'react-bootstrap';

function SkillsAccordian({ dict, styles }) {
    var keys = Object.keys(dict);

    function returnCardBody(e) {
        var keys = Object.keys(dict[e]);
        return (
            <Card.Body className="skillsBody">
                {keys.map(x => {
                    return (
                        <div className='skillBody' key={x}>
                            <img className="round-image" loading="lazy" src={dict[e][x].img} srcSet={dict[e][x].imgSm + ' 480w,' + dict[e][x].img + ' 1080w'} alt={x} />
                            <p>{x}</p>
                        </div>
                    )
                })}
            </Card.Body>
        )
    }
    return (
        <Accordion id="accordian">
            {keys.map((e, i) => {
                return <Card key={i + 1} id="card" >
                    <Accordion.Toggle id="header" as={Card.Header} style={{ background: "linear-gradient(to right," + styles.color1 + "," + styles.color2 + ")" }} eventKey={i + 1}>
                        <p>{e}</p>
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
export default SkillsAccordian
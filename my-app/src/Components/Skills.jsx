import React, { lazy, Suspense } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Headline2, Headline3, Headline4, Headline5 } from './strings.jsx';
const SkillsAccordian = lazy(() => import('./SkillsAccordian'));
import {dict} from './skillsList.jsx'

function Skills() {
    const style = { "color1": "hotpink", "color2": "pink" };
    return (
        <Container className="skillCards">
            <ul className="lists mb-3">
                <li>{Headline2}</li>
                <li>{Headline3}</li>
                <li>{Headline4}</li>
                <li>{Headline5}<a href="https://todo.vivekkaushik.co.in" target="_blank" rel="noreferrer">ToDoApp</a></li>
            </ul>
            <h1>Skills</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <Row className=''>
                    <Col className='flex px-0'>
                        <Container>
                            <SkillsAccordian dict={dict} styles={style} />
                        </Container>
                    </Col>
                </Row>
            </Suspense>
        </Container>
    )
}

export default Skills
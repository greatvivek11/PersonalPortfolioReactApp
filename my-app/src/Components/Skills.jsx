import React, { lazy, Suspense } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Headline2, Headline3, Headline4, Headline5 } from './strings.jsx';
import androidPic from '/Assets/large/android.png';
import angularPic from '/Assets/large/Angular_full_color_logo.svg.png';
import azurePic from '/Assets/large/azure_logo_794_new.png';
import bootstrapLg from '/Assets/large/bootstrap_logo.png';
import cPic from '/Assets/large/c-logo.png';
import cssLg from '/Assets/large/css_logo.png';
import htmlLg from '/Assets/large/html_logo.png';
import iotPic from '/Assets/large/iot.png';
import javaPic from '/Assets/large/java_logo.jpg';
import jsLg from '/Assets/large/js_logo.png';
import mysqlPic from '/Assets/large/mysql.png';
import reactPic from '/Assets/large/react-logo.png';
import twLg from '/Assets/large/tailwindcss_logo.png';
import androidPicSm from '/Assets/small/android-sm.png';
import angularPicSm from '/Assets/small/Angular-sm.png';
import azurePicSm from '/Assets/small/azure-sm.png';
import bootstrapSm from '/Assets/small/bootstrap_logo.png';
import cPicSm from '/Assets/small/c-sm.png';
import cssSm from '/Assets/small/css_logo.png';
import htmlSm from '/Assets/small/html_logo.png';
import iotPicSm from '/Assets/small/iot-sm.png';
import javaPicSm from '/Assets/small/java-sm.jpg';
import jsSm from '/Assets/small/js_logo.png';
import mysqlPicSm from '/Assets/small/mysql-sm.png';
import reactPicSm from '/Assets/small/react-sm.png';
import twSm from '/Assets/small/tailwindcss_logo.png';
const CardComponent = lazy(() => import('./CardComponent'));

function Skills() {
  return (
    <Container className="skillCards">
                <div className="lists mb-3">
                    <li>{Headline2}</li>
                    <li>{Headline3}</li>
                    <li>{Headline4}</li>
                    <li>{Headline5}<a href="https://todo.vivekkaushik.co.in" target="_blank" rel="noreferrer">ToDoApp</a></li>
                </div>
                <h1>Skills</h1>
                <Suspense fallback={<div>Loading...</div>}>
                <Row className=''>
                    <Col className='flex px-0'>
                        <CardComponent image={reactPic} imageSm={reactPicSm} title="React" text="Learning and Exploring React." />
                        <CardComponent image={azurePic} imageSm={azurePicSm} title="Azure" text="Learning and Exploring Azure." />
                        <CardComponent image={angularPic} imageSm={angularPicSm} title="Angular" text="Learning and Exploring Angular." />
                        <CardComponent image={javaPic} imageSm={javaPicSm} title="Java" text="Learning and Exploring Java." />
                        <CardComponent image={cPic} imageSm={cPicSm} title="C#" text="Learning and Exploring C#." />
                        <CardComponent image={androidPic} imageSm={androidPicSm} title="Android" text="Learning and Exploring Android." />
                        <CardComponent image={mysqlPic} imageSm={mysqlPicSm} title="MySQL" text="Learning and Exploring MySQL." />
                        <CardComponent image={iotPic} imageSm={iotPicSm} title="IoT" text="Learning and Exploring IoT." />
                        <CardComponent image={htmlLg} imageSm={htmlSm} title="HTML5" text="Learning and Exploring HTML5." />
                        <CardComponent image={cssLg} imageSm={cssSm} title="CSS3" text="Learning and Exploring CSS3." />
                        <CardComponent image={jsLg} imageSm={jsSm} title="JS" text="Learning and Exploring Javascript." />
                        <CardComponent image={bootstrapLg} imageSm={bootstrapSm} title="Bootstrap" text="Learning and Exploring Bootstrap." />
                        <CardComponent image={twLg} imageSm={twSm} title="TailwindCSS" text="Learning and Exploring TailwindCSS." />
                    </Col>
                    </Row>
                </Suspense>
            </Container>
  )
}

export default Skills
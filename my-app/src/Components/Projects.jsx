import { Container } from 'react-bootstrap';
import { lazy, Suspense } from 'react';
import { Project1, Project2, Project3, Project4, Project5, Project6, Project7 } from "./strings.jsx";
const AccordianComponent = lazy(() => import('./AccordianComponent'));

export default function Projects() {
    const dict = {"Axis Capital": Project7, "Todo App": Project6, "Personal Portfolio": Project1, "Boston Scientific": Project2, "Epredia": Project3, "Ascensia": Project4, "PGI Chandigarh": Project5 }
    const style = { "color1": "hotpink", "color2": "pink" };
    return (
        <div className="UnderConstruction" style={{paddingTop:"8%"}}>
            <Suspense fallback={<div>Loading...</div>}>
                <Container>
                    <AccordianComponent props={dict} styles={style} />
                </Container>
            </Suspense>
        </div>
    )
}
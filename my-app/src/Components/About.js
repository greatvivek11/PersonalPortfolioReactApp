import { Container } from 'react-bootstrap';
import { lazy, Suspense } from 'react';
import { About1, About2, About3, About4, About5, About6, About7 } from "./strings";
const CarouselComponent = lazy(() => import('./CarouselComponent'));
const AccordianComponent = lazy(() => import('./AccordianComponent'));

export default function About() {
    const dict = { "Work": About2, "Education": About3, "Hobbies": About4, "Interests": About5, "Acheivements": About7 };
    const style = { "color1": "skyblue", "color2": "rgb(53, 75, 197)" };
    return (
        <div className="AboutSection">
            <Suspense fallback={<div>Loading...</div>}>
                <h1>About Me!</h1>
                <h3>{About1}</h3>
                <CarouselComponent />
                <Container>
                    <AccordianComponent props={dict} styles={style} />
                </Container>
                <p>{About6}</p>
            </Suspense>

        </div>
    )
}

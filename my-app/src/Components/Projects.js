import { Container } from 'react-bootstrap';
import AccordianComponent from './AccordianComponent';
import { Project1,Project2,Project3,Project4,Project5} from "./strings";

export default function Projects() {
    const dict = {"Personal Portfolio Project":Project1,"Boston Scientific C#/Java Project":Project2,"Epredia Cloud/IoT Project":Project3,"Epredia Android Project":Project4,"PGI Java/MySQL Project":Project5}
    const style = {"color1":"hotpink","color2":"pink"};
    return (
        <div className="UnderConstruction">
            <h1>Projects</h1>
            <Container>
                <AccordianComponent props={dict} styles={style} />
            </Container>
        </div>
    )
}
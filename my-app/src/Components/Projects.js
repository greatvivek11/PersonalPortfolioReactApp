import '../styles/tbd.css';
import image from '../Assets/resources/construction.jpg'

export default function Projects() {
    return (
        <div className="UnderConstruction">
            <h1>Projects Section</h1>
            <h2>Work in Progress!</h2>
            <p>Hi! This is going to be my projects section. I'm going to add my Professional and Personal Projects details here.</p>
            <img className="image" src={image} ></img>
        </div>
    )
}

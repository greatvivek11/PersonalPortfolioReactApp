import '../styles/tbd.css';

export default function Projects() {
    const image = "https://ppstorageacc123.blob.core.windows.net/personalportfolioblobcontainer/Images/Website-Under-Construction-Image.jpg";
    return (
        <div className="UnderConstruction">
            <h1>Projects Section</h1>
            <h2>Work in Progress!</h2>
            <p>Hi! This is going to be my projects section. I'm going to add my Professional and Personal Projects details here.</p>
            <img className="image" src={image} ></img>
        </div>
    )
}

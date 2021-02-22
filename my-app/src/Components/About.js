import '../styles/about.css';

export default function About() {
    const image = "https://ppstorageacc123.blob.core.windows.net/personalportfolioblobcontainer/Images/Website-Under-Construction-Image.jpg";
    return (
        <div className="UnderConstruction">
            <h1>About Section</h1>
            <h2>Work in Progress!</h2>
            <img className="image" src={image} ></img>
        </div>
    )
}

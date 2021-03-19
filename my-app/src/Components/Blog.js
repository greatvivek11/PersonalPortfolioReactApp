import '../styles/tbd.css';
import image from '../Assets/resources/construction.jpg'

export default function Blog() {
    return (
        <div className="UnderConstruction">
            <h1>Blog Section</h1>
            <h2>Work in Progress!</h2>
            <p>Hi! This is going to be my blogs section. I intend to showcase my Wordpress and Medium blogs here through their APIs.</p>
            <p>Also, I'll be adding functionlaity to upload blogs(.pages file) here and store them in Azure Blob storage.</p>
            <img className="image" src={image} ></img>
        </div>
    )
}

import '../styles/tbd.css';

export default function Blog() {
    const image = "https://ppstorageacc123.blob.core.windows.net/personalportfolioblobcontainer/Images/Website-Under-Construction-Image.jpg";
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

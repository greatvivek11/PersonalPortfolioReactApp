import React from 'react';
import '../styles/about.css';
import image from '../resources/Website-Under-Construction-Image.jpg';

export default function Blog() {
    return (
        <div className="UnderConstruction">
            <h1>Blog Section</h1>
            <h2>Work in Progress!</h2>
            <img className="image" src={image} ></img>
        </div>
    )
}

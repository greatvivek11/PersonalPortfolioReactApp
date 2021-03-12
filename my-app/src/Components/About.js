import { useState, useEffect, useContext } from 'react';
import AppContext from "../Components/context";
import CarouselComponent from './CarouselComponent';

export default function About() {
    const [resources, setResources] = useState([]);
    const Context = useContext(AppContext);
    
    useEffect(() => {
        setResources(Context.resources);
    });
    
    return (
        <div className="AboutSection">
            <CarouselComponent resources={resources}/>
        </div>
    )
}

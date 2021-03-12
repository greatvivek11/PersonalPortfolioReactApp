
import '../styles/home.css';
import mypic from '../Assets/IMG_20200130_130357.jpg';
import Image from 'react-bootstrap/Image';
import {Headline1,Headline2,Headline3,Headline4} from '../Components/strings';
import reactPic from '../Assets/react-logo.png';
import azurePic from '../Assets/azure_logo_794_new.png';
import angularPic from '../Assets/Angular_full_color_logo.svg.png';
import javaPic from '../Assets/java_logo.jpg';
import cPic from '../Assets/c-logo.png';
import androidPic from '../Assets/android.png';
import mysqlPic from '../Assets/mysql.png';
import iotPic from '../Assets/iot.png';
import CardComponent from './CardComponent';
import { Collapse, Container, Jumbotron } from 'react-bootstrap';

export default function Home() {
    return (
        <div className="Home">
            <div className="parent">
                <Image className="Image" src={mypic} />
                <div className="headline">
                    <h1>
                        Fullstack Software Developer.
                    </h1>
                    <p>{Headline1}</p>
                </div>
            </div>
            <p>{Headline2}</p>
            <p>{Headline3}</p>
            <p>{Headline4}</p>
            <Container className="skillCards">
                <h1>Skills</h1>
            <CardComponent image={reactPic} title="React" text="Learning and Exploring React."/>
            <CardComponent image={azurePic} title="Azure" text="Learning and Exploring Azure."/>
            <CardComponent image={angularPic} title="Angular" text="Learning and Exploring Angular."/>
            <CardComponent image={javaPic} title="Java" text="Learning and Exploring Java."/>
            <CardComponent image={cPic} title="C#" text="Learning and Exploring C#."/>
            <CardComponent image={androidPic} title="Android" text="Learning and Exploring Android."/>
            <CardComponent image={mysqlPic} title="MySQL" text="Learning and Exploring MySQL."/>
            <CardComponent image={iotPic} title="IoT" text="Learning and Exploring IoT."/>
            </Container>
            

            <p>Add tasks for me: <a href="/tasks">here</a> </p>
            <p>You can find all the features which I have added to my website: <a href="/changeLog">here</a> </p>            
            <p>This website is a Work-in-Progress. Please don't mind the basic UI.</p>
        </div >
        
    );
}

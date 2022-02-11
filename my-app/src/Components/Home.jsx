import Image from 'react-bootstrap/Image';
import Typewriter from 'typewriter-effect';
import '../styles/home.css';
import Badges from './Badges';
import Skills from './Skills';
import { Headline1 } from './strings.jsx';
import mypic from '/Assets/large/myPic.jpg';
import mypicSm from '/Assets/small/myPic-sm.jpg';

export default function Home() {
    return (
        <div className="Home">
            <div className="parent">
                <Image className="Image" src={mypic} srcSet={mypicSm + ' 480w,' + mypic + ' 1080w'} sizes="auto" height="auto" width="auto" alt="Vivek Kaushik pic" />
                <div className="headline">
                    <h1 id="home_title">
                        <Typewriter
                            options={{
                                strings: ['Microsoft Certified Azure Developer', 'Microsoft Certified Azure Data Engineer', 'Microsoft Certified Azure IoT Specialist', 'Full Stack Software Developer', 'Tech Enthusiast', 'Blogger', 'Writer', 'Thinker'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <p>{Headline1}</p>
                </div>
            </div>
            <Badges />
            <Skills />
            <div>
                Add tasks for me: <a href="/tasks">Tasks</a><br></br>
                You can find all the features which I have added to my website here: <a href="/changeLog">Features Added</a>
            </div>
        </div >
    );
}

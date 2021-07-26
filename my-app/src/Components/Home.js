
import '../styles/home.css';
import { lazy, Suspense } from 'react';
import Image from 'react-bootstrap/Image';
import { Headline1, Headline2, Headline3, Headline4, Headline5, Headline6, Headline7 } from '../Components/strings';
import mypic from '../Assets/large/myPic.jpg';
import mypicSm from '../Assets/small/myPic-sm.jpg';
import reactPic from '../Assets/large/react-logo.png';
import azurePic from '../Assets/large/azure_logo_794_new.png';
import angularPic from '../Assets/large/Angular_full_color_logo.svg.png';
import javaPic from '../Assets/large/java_logo.jpg';
import cPic from '../Assets/large/c-logo.png';
import androidPic from '../Assets/large/android.png';
import mysqlPic from '../Assets/large/mysql.png';
import iotPic from '../Assets/large/iot.png';
import reactPicSm from '../Assets/small/react-sm.png';
import azurePicSm from '../Assets/small/azure-sm.png';
import angularPicSm from '../Assets/small/Angular-sm.png';
import javaPicSm from '../Assets/small/java-sm.jpg';
import cPicSm from '../Assets/small/c-sm.png';
import androidPicSm from '../Assets/small/android-sm.png';
import mysqlPicSm from '../Assets/small/mysql-sm.png';
import iotPicSm from '../Assets/small/iot-sm.png';
import azDevLg from '../Assets/large/azure-developer-associate-240x240.png';
import azFunLg from '../Assets/large/azure-fundamentals-240x240.png';
import azDataLg from '../Assets/large/azure-data-engineer-associate-600x600.png';
import azDataFunLg from '../Assets/large/azure-data-fundamentals-240x240.png';
import azIotLg from '../Assets/large/azure-iot-speciality-240x240.png';
import { Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { BadgeComponent } from '../Components/BadgeComponent';
const CardComponent = lazy(() => import('../Components/CardComponent'));

export default function Home() {
    return (
        <div className="Home">
            <div className="parent">
                <Image className="Image" src={mypic} srcSet={mypicSm + ' 480w,' + mypic + ' 1080w'} sizes="auto" height="auto" width="auto" alt="Vivek Kaushik pic" />
                <div className="headline">
                    <h1 id="home_title">
                        <Typewriter
                            options={{
                                strings: ['Microsoft Certified Azure Developer','Microsoft Certified Azure Data Engineer','Microsoft Certified Azure IoT Specialist', 'Full Stack Software Developer', 'Tech Enthusiast', 'Blogger', 'Writer', 'Thinker'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <p>{Headline1}</p>
                    <Container>
                        <BadgeComponent link="https://www.credly.com/badges/287ccc6b-a5fa-4253-a970-14ed19efb012/public_url" img={azDevLg} tag="AZ 204 badge"/>
                        <BadgeComponent link="https://www.credly.com/badges/31df1f7c-f199-47db-9a50-a0f697686c77/public_url" img={azDataLg} tag="DP 203 badge"/>
                        <BadgeComponent link="https://www.credly.com/badges/6b136cb8-d3f4-4142-b6bc-d9846a5bf69d/public_url" img={azIotLg} tag="AZ 220 badge"/>
                        <BadgeComponent link="https://www.credly.com/badges/11fa2238-d5a2-4a6a-bffd-1d428803db9b/public_url" img={azFunLg} tag="AZ 900 badge"/>
                        <BadgeComponent link="https://www.credly.com/badges/b7a8b9a5-20ca-4f6e-86a6-13450e22af1a/public_url" img={azDataFunLg} tag="DP 900 badge"/>                        
                    </Container>
                </div>
            </div>
            <Container className="skillCards">
                <div className="lists">
                    <li>{Headline2}</li>
                    <li>{Headline3}</li>
                    <li>{Headline4}</li>
                    <li>{Headline5}</li>
                    <li>{Headline6}</li>
                    <li>{Headline7}</li>
                </div>
                <h1>Skills</h1>
                <Suspense fallback={<div>Loading...</div>}>
                    <CardComponent image={reactPic} imageSm={reactPicSm} title="React" text="Learning and Exploring React." />
                    <CardComponent image={azurePic} imageSm={azurePicSm} title="Azure" text="Learning and Exploring Azure." />
                    <CardComponent image={angularPic} imageSm={angularPicSm} title="Angular" text="Learning and Exploring Angular." />
                    <CardComponent image={javaPic} imageSm={javaPicSm} title="Java" text="Learning and Exploring Java." />
                    <CardComponent image={cPic} imageSm={cPicSm} title="C#" text="Learning and Exploring C#." />
                    <CardComponent image={androidPic} imageSm={androidPicSm} title="Android" text="Learning and Exploring Android." />
                    <CardComponent image={mysqlPic} imageSm={mysqlPicSm} title="MySQL" text="Learning and Exploring MySQL." />
                    <CardComponent image={iotPic} imageSm={iotPicSm} title="IoT" text="Learning and Exploring IoT." />
                </Suspense>
            </Container>
            <p>Add tasks for me: <a href="/tasks">Tasks</a> </p>
            <p>You can find all the features which I have added to my website here: <a href="/changeLog">Features Added</a> </p>
            <p>This website is a Work-in-Progress. Please don't mind the basic UI.</p>
        </div >

    );
}

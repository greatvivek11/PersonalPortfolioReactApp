import React from 'react';
import mypic from '../resources/mypic.jpg';
import mypic2 from '../resources/2088337-Jack-Welch-Quote-Its-a-marathon-its-not-a-sprint-Ten-years-Fifteen.jpg';
import mypic3 from '../resources/IMG_20200130_130357.jpg';
import mypic4 from '../resources/IMG_20200317_091948.jpg';
import mypic5 from '../resources/IMG_20200616_100442.jpg';
import mypic6 from '../resources/IMG_20201119_113135.jpg';
import mypic7 from '../resources/IMG_20210125_111337.jpg';
import mypic8 from '../resources/IMG_20210210_091344.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import './CarouselComponent.css';

export default function CarouselComponent() {
    return (
            <Carousel interval={3000}>
                <Carousel.Item>
                    <Image
                        className="myCoverPic"
                        src={mypic}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Adventure</h3>
                        <p>Tamil Nadu WaterFalls</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="myCoverPic"
                        src={mypic2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Philosophy</h3>
                        <p>Success and Virtue</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="myCoverPic"
                        src={mypic3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>His Execellency</h3>
                        <p>Work hard. Play safe.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="myCoverPic"
                        src={mypic4}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <h3>Beauty</h3>
                        <p>Flowers</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="myCoverPic"
                        src={mypic5}
                        alt="Fifth slide"
                    />
                    <Carousel.Caption>
                        <h3>Gaming</h3>
                        <p>Passion and Tech</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="myCoverPic"
                        src={mypic6}
                        alt="Sixth slide"
                    />
                    <Carousel.Caption>
                        <h3>Mera Gaon</h3>
                        <p>Remember your roots.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="myCoverPic"
                        src={mypic7}
                        alt="Seventh slide"
                    />
                    <Carousel.Caption>
                        <h3>Greenry</h3>
                        <p>Love thy Nature.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="myCoverPic"
                        src={mypic8}
                        alt="Eigth slide"
                    />
                    <Carousel.Caption>
                        <h3>Mac and Book</h3>
                        <p>I didn't see that coming!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

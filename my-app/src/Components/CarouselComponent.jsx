import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import '../styles/CarouselComponent.css';
import pic1 from '/Assets/resources/pic0.jpg';
import pic2 from '/Assets/resources/pic1.jpg';
import pic3 from '/Assets/resources/pic2.jpg';
import pic4 from '/Assets/resources/pic3.jpg';
import pic5 from '/Assets/resources/pic4.jpg';
import pic6 from '/Assets/resources/pic5.jpg';

export default function CarouselComponent() {

    const images = [pic1, pic2, pic3, pic4, pic5, pic6];

    var coverProp = {
        0: { title: "His Excellency", subtitle: "Work hard. Play safe." },
        1: { title: "Adventure", subtitle: "Tamil Nadu WaterFalls" },
        2: { title: "Beauty", subtitle: "Flowers" },
        3: { title: "Nerd", subtitle: "Passion and Tech" },
        4: { title: "Nature", subtitle: "Sky and Peace" },
        5: { title: "Philosophy", subtitle: "Thinking and Inspiration" }
    }
    return (
        <Carousel className="carousel" controls={true} indicators={true} keyboard={true} interval={3000}>
            {images.map((x, i) => {
                if (i < 8) {
                    return (
                        <Carousel.Item key={i}>
                            <Image
                                className="myCoverPic"
                                src={x}
                                loading="lazy"
                                alt="First slide"
                            />
                            <Carousel.Caption id="caption">
                                <h3>{coverProp[i].title}</h3>
                                <p>{coverProp[i].subtitle}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                }
            })}
        </Carousel>
    )
}

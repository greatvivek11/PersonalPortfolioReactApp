import { useState,useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import '../styles/CarouselComponent.css';

export default function CarouselComponent({resources}) {

    const [Images, setImages] = useState(["https://ppstorageacc123.blob.core.windows.net/personalportfolioblobcontainer/Images/IMG_20190113_142457.jpg"]);
    useEffect(() => {
        if(resources.length!==0){
            setImages(resources);
        }
    }, [resources])
    // console.log(Images);
    
    var coverProp = {
        0: { title: "Adventure", subtitle: "Tamil Nadu WaterFalls" },
        1: { title: "His Excellency", subtitle: "Work hard. Play safe." },
        2: { title: "Beauty", subtitle: "Flowers" },
        3: { title: "Gaming", subtitle: "Passion and Tech" },
        4: { title: "Mera Gaon", subtitle: "Remember your roots" },
        5: { title: "Greenry", subtitle: "Love thy Nature" },
        6: { title: "Mac and Book", subtitle: "I didn't see that coming." },
        7: { title: "Philosophy", subtitle: "Success and Virtue" },
    }
    return (
        <Carousel controls="true" indicators="true" keyboard="true" interval={3000}>
            {Images.map((x, i) => {
                if (i < 8) {
                    return (
                        <Carousel.Item key={i}>
                            <Image
                                className="myCoverPic"
                                src={x}
                                alt="First slide"
                            />
                            <Carousel.Caption id="caption">
                                <h2>{coverProp[i].title}</h2>
                                <p>{coverProp[i].subtitle}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                }
            })}
        </Carousel>
    )
}

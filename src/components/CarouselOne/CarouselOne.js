import Carousel from "better-react-carousel";
import "./CarouselOne.css";

function CarouselOne() {
    return (
        <div id="carousel-one">
            <Carousel rows={1} cols={1} height={"1000px"} loop>
                <Carousel.Item className="carousel-item">
                    <div className="carousel-item">
                        Hola mundo desde el carousel item
                    </div>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <div className="carousel-item">
                        Hola mundo desde el carousel item
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselOne;

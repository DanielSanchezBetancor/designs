import "./CarouselThree.css";
import PlanesImg from "../../assets/categories-plane.png";
import ShipImg from "../../assets/categories-ship.png";
import TrainImg from "../../assets/categories-train.png";
import { useState, useEffect } from 'react';

function CarouselThree() {
    const [index, setIndex] = useState(0);

    function tick(localIndex) {
        setTimeout(() => {
            if (localIndex === index)
                slider()
        }, 5000);
    }
    function slider() {
        //Getting all sliders && buttons
        const slide = document.getElementsByClassName('carousel__card');
        const buttons = document.getElementsByClassName('carousel__buttons__button');
        //Calculating next slider index, if we are on the last one, rotate to the first one again
        const nextIndex = index == 2 ? 0 : index + 1;
        //React double render in DEV
        if (!slide[index].className.includes('slide')) {
            slide[index].className += " slide";
            buttons[index].className = buttons[index].className.replace(' active', '');
        }
        //React double render in DEV
        if (slide[nextIndex].className.includes('slide')) {
            slide[nextIndex].className = slide[nextIndex].className.replace(' slide', '');
            buttons[nextIndex].className += " active";
        }
        //Setting next slider index         
        setIndex(nextIndex);
    }
    useEffect(() => {tick(index)}, [index]);
    function swapSlide(newIndex) {
        //Getting all sliders && buttons
        const slide = document.getElementsByClassName('carousel__card');
        const buttons = document.getElementsByClassName('carousel__buttons__button');
        //React double render in DEV
        if (!slide[index].className.includes('slide')) {
            slide[index].className += " slide";
            buttons[index].className = buttons[index].className.replace(' active', '');
        }
        //React double render in DEV
        if (slide[newIndex].className.includes('slide')) {
            slide[newIndex].className = slide[newIndex].className.replace(' slide', '');
            buttons[newIndex].className += " active";
        }
        //Setting next slider index         
        setIndex(newIndex);
    }
    return (
        <section>
            <div className="carousel">
                <div className="carousel__card">
                    <div className="carousel__card__image">
                        <img src={PlanesImg} />
                    </div>
                    <div className="carousel__card__information">
                        <h1>Lorem Ipsum</h1>
                        <h2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </h2>
                        <button className="carousel__card__information__button">
                            Ver el producto
                        </button>
                    </div>
                </div>
                <div className="carousel__card slide">
                    <div className="carousel__card__image">
                        <img src={ShipImg} />
                    </div>
                    <div className="carousel__card__information">
                        <h1>Ipsum Lorem</h1>
                        <h2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </h2>
                        <button className="carousel__card__information__button">
                            Ver el producto
                        </button>
                    </div>
                </div>
                <div className="carousel__card slide">
                    <div className="carousel__card__image">
                        <img src={TrainImg} />
                    </div>
                    <div className="carousel__card__information">
                        <h1>Lorem Ipsum</h1>
                        <h2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </h2>
                        <button className="carousel__card__information__button">
                            Ver el producto
                        </button>
                    </div>
                </div> 
                <div className="carousel__buttons">
                    <div className="carousel__buttons__button active" ></div>
                    <div className="carousel__buttons__button" ></div>
                    <div className="carousel__buttons__button"></div>
                </div>
            </div>
        </section>
    );
}

export default CarouselThree;

import "./App.css";
import logo from "./logo.svg";

import { useState } from "react";
// Carousels
import CarouselOne from "./components/CarouselOne/CarouselOne.js";
import CarouselTwo from "./components/CarouselTwo/CarouselTwo.js";
import CarouselThree from "./components/CarouselThree/CarouselThree.js";
import CarouselFour from "./components/CarouselFour/CarouselFour.js";
import CarouselFive from "./components/CarouselFive/CarouselFive.js";
import CarouselSix from "./components/CarouselSix/CarouselSix.js";
import CarouselSeven from "./components/CarouselSeven/CarouselSeven.js";
// Category Card List
import CategoryCardListOne from "./components/CategoryCardListOne/CategoryCardListOne.js";
import CategoryCardListTwo from "./components/CategoryCardListTwo/CategoryCardListTwo.js";
import CategoryCardListThree from "./components/CategoryCardListThree/CategoryCardListThree.js";
import CategoryCardListFour from "./components/CategoryCardListFour/CategoryCardListFour.js";
import NavbarOne from "./components/NavbarOne/NavbarOne.js";

function App() {
    const [showCarousels, setShowCarousels] = useState(false);
    const [showCategoryCardList, setShowCategoryCardList] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    return (
        <div className="App">
            <button onClick={() => setShowCarousels(!showCarousels)}>
                Carousels
            </button>
            <button
                onClick={() => setShowCategoryCardList(!showCategoryCardList)}
            >
                Category Card Lists
            </button>
            <button onClick={() => setShowNavbar(!showNavbar)}>Navbars</button>
            {showCarousels ? (
                <section className="carousels">
                    <section className={"divider"}>
                        <label>Carousel Uno</label>
                    </section>
                    <CarouselOne />
                    <section className={"divider"}>
                        <label>Carousel dos</label>
                    </section>
                    <CarouselTwo />
                    <section className={"divider"}>
                        <label>Carousel tres</label>
                    </section>
                    <CarouselThree />
                    <section className={"divider"}>
                        <label>Carousel cuatro</label>
                    </section>
                    <CarouselFour />
                    <section className={"divider"}>
                        <label>Carousel cinco</label>
                    </section>
                    <CarouselFive />
                    <section className={"divider"}>
                        <label>Carousel seis</label>
                    </section>
                    <CarouselSix />
                    <section className={"divider"}>
                        <label>Carousel siete</label>
                    </section>
                    <CarouselSeven />
                </section>
            ) : (
                ""
            )}
            {showCategoryCardList ? (
                <section className="category-card-lists">
                    <section className={"divider"}>
                        <label>Categories Card List Uno</label>
                    </section>
                    <CategoryCardListOne />
                    <section className={"divider"}>
                        <label>Categories Card List Dos</label>
                    </section>
                    <CategoryCardListTwo />
                    <section className={"divider"}>
                        <label>Categories Card List Tres</label>
                    </section>
                    <CategoryCardListThree />
                    <section className={"divider"}>
                        <label>Categories Card List Cuatro</label>
                    </section>
                    <CategoryCardListFour />
                </section>
            ) : (
                ""
            )}
            {showNavbar ? (
                <section className="navbars">
                    <section className={"divider"}>
                        <label>Navbar Uno</label>
                    </section>
                    <NavbarOne />
                </section>
            ) : (
                ""
            )}
        </div>
    );
}

export default App;

import { useState } from "react";
import ECommerceSVG from "../../assets/E-Commerce.svg";
import IconSearch from "../../assets/icon-search.png";
import IconMenu from "../../assets/icon-menu.png";
import MenuArrowSVG from "../../assets/menu-arrow.svg";
import "./NavbarOne.css";

function NavbarOne() {
    const [isExpanded, setIsExpanded] = useState(false);
    //Esto iria por props mejor
    const categories = ["Categoria 1", "Categoria 2", "Categoria 3"];
    const subcategories = [
        "Subcategoria 1",
        "Subcategoria 2",
        "Subcategoria 3",
    ];
    function openMenu(event, id) {
        const navbar = document.querySelector("#navbar__item__" + id);
        const arrow = navbar.querySelector("#arrow");
        const subitems = navbar.querySelectorAll(".navbar__expanded__subitem");
        const root = document.querySelector("#root");
        if (arrow.classList.contains("expanded")) {
            arrow.classList.remove("expanded");
            root.classList.remove("hide");
            for (let i = 0; i < subitems.length; i++) {
                subitems[i].classList.remove("pre-show");
            }
        } else {
            arrow.classList.add("expanded");
            root.classList.add("hide");
            for (let i = 0; i < subitems.length; i++) {
                subitems[i].classList.add("pre-show");
            }
        }
        finishMenuAction(event, id);
    }
    /* Las transiciones cuando le quitas la altura (100% => 0px), se muestra durante la transicion todo stackeado junto. Creamos esta funcion que pasa por una clase intermedia que mejora las transiciones de los elementos */
    function finishMenuAction(event, id) {
        console.log("Me llaman");
        const navbar = document.querySelector("#navbar__item__" + id);
        const arrow = navbar.querySelector("#arrow");
        const subitems = navbar.querySelectorAll(".navbar__expanded__subitem");
        if (arrow.classList.contains("expanded")) {
            for (let i = 0; i < subitems.length; i++) {
                subitems[i].classList.remove("pre-show");
                subitems[i].classList.add("show");
            }
        } else {
            for (let i = 0; i < subitems.length; i++) {
                subitems[i].classList.add("pre-show");
                subitems[i].classList.remove("show");
            }
        }
    }
    function openSearch() {
        const searchInput = document.querySelector(".navbar__one__search-panel");
        if (searchInput.classList.contains("open")) {
            searchInput.classList.remove("open");
        } else {
            searchInput.classList.add("open");
        }
    }
    return (
        <nav className="navbar__one">
            <div className="navbar__one__menu">
                <img
                    className="navbar__one__menu-icon"
                    src={IconMenu}
                    alt="Icono para abrir y cerrar menú lateral"
                    onClick={() => {
                        setIsExpanded(!isExpanded);
                    }}
                />
                <img
                    className="navbar__one__logo"
                    src={ECommerceSVG}
                    alt="Our logo: Ecommerce"
                />
                    <img
                        className="navbar__search__icon"
                        src={IconSearch}
                        alt="Icono buscador"
                        onClick={openSearch}
                    />
            </div>
            <div className="navbar__one__expanded">
                <li>
                    {isExpanded &&
                        categories.map((category, index) => {
                            return (
                                <ul id={"navbar__item__" + index}>
                                    <div
                                        className="navbar_item__wrapper"
                                        onClick={() => openMenu(this, index)}
                                    >
                                        <img
                                            id="arrow"
                                            className="navbar__one__expanded__arrow"
                                            src={MenuArrowSVG}
                                            alt="Arrow for menu items"
                                        />
                                        <label className="navbar__one__expanded__name">
                                            {category}
                                        </label>
                                    </div>
                                    <li>
                                        {subcategories.map((subcategory) => {
                                            return (
                                                <ul
                                                    id={
                                                        "navbar__subitem__" +
                                                        index
                                                    }
                                                    className="navbar__expanded__subitem"
                                                >
                                                    <img
                                                        id="arrow"
                                                        className="navbar__one__expanded__arrow"
                                                        src={MenuArrowSVG}
                                                        alt="Arrow for menu items"
                                                    />
                                                    <label className="navbar__one__expanded__name">
                                                        {subcategory}
                                                    </label>
                                                </ul>
                                            );
                                        })}
                                    </li>
                                </ul>
                            );
                        })}
                </li>
            </div>
            <div className="navbar__one__search-panel">
                <input className="navbar__search__input" type="text"></input>
                    <img
                        className="navbar__search-panel__icon"
                        src={IconSearch}
                        alt="Icono buscador"
                        onClick={openSearch}
                    />
            </div>
        </nav>
    );
}

export default NavbarOne;

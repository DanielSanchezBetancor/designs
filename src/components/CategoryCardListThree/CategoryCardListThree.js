import { useEffect } from "react";
import { useState } from "react";
import PlanesImg from "../../assets/categories-plane.png";

import CategoryCardListItemThree from "./CategoryCardListItemThree/CategoryCardListItemThree";
import "./CategoryCardListThree.css";

function CategoryCardListThree() {
    //Setting 4 images as default
    const [categoriesCardList, setCategoriesCardList] = useState([
        <CategoryCardListItemThree imgSrc={PlanesImg}  />,
        <CategoryCardListItemThree imgSrc={PlanesImg}  />,
        <CategoryCardListItemThree imgSrc={PlanesImg}  />,
        <CategoryCardListItemThree imgSrc={PlanesImg}  />
    ]);
    function loadCategories() {
        let newCategoriesCardList = categoriesCardList.concat( <CategoryCardListItemThree imgSrc={PlanesImg}  />)
        newCategoriesCardList = newCategoriesCardList.concat( <CategoryCardListItemThree imgSrc={PlanesImg}  />)
        setCategoriesCardList(newCategoriesCardList);
    }
    return (
        <div className="category-card-list-three">
            <div className="category-card-list__item-list">
                {categoriesCardList}
            </div>
            <div className="category-card-list__three__more-categories">
                <label className="category-card-list__three__more-categories__link" onClick={loadCategories}>Ver mas categorías</label>
            </div>
        </div>
    );
}

export default CategoryCardListThree;

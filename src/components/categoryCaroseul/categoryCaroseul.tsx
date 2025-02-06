import React from "react";

import "./categoryCarousel.css"

import data from "../../data/categories";
import CategoryItem from "./categoryItem";

export default function CategoryCarousel(){
   
    return(
        <div id="carousel-categories">
            <div id="swiper-category">
                {
                    data.categories.map((category) => {
                        return(
                            <CategoryItem key={category.id} id={category.id} name={category.name} /> 
                        )
                    })
                }
            </div>
        </div>
    )
}
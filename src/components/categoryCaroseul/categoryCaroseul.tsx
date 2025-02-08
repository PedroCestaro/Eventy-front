import React, { useEffect, useState, useRef } from "react";

import "./categoryCarousel.css"

import data from "../../data/categories";
import CategoryItem from "./categoryItem";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function CategoryCarousel(){
   
    const swiper = useRef<HTMLDivElement>(null)
    const arrowRigh = useRef<HTMLButtonElement>(null);
    const arrowLeft = useRef<HTMLButtonElement>(null)

    const[swipe, setSwipe] = useState(0);


    const handleSwipeRigth = () => {
        let newSwipeValue = swipe + 140
        setSwipe(newSwipeValue);
    }

    const handleSwipeLeft = () => {
        let newSwipeValue = swipe - 140
        setSwipe(newSwipeValue);
    }

    useEffect(() => {
  
        if(swiper.current != null){
            swiper.current.style.transform = `translateX(${swipe}px)`;
        }

        if(arrowLeft.current != null){
            if(swipe == 0)
                arrowLeft.current.disabled = true;
            else 
                arrowLeft.current.disabled = false;
        }

    }, [swipe]);


    return(
        <div id="carousel-categories">
                <div id="carousel-buttons">
                    <button onClick={e => handleSwipeLeft()}  ref={arrowLeft} > <FontAwesomeIcon icon={faChevronLeft}/> </button>
                    <button onClick={e => handleSwipeRigth()} > <FontAwesomeIcon icon={faChevronRight}/> </button>
                </div>
            <div id="swiper-category" ref={swiper}>
                {
                    data.categories.map((category, index) => {
                        return(
                            <div key={index} className={index == 0? 'active': ''}> 
                                <CategoryItem  id={category.id} name={category.name} /> 
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
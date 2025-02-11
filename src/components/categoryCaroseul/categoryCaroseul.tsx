import React, { useEffect, useState, useRef, Children } from "react";

import "./categoryCarousel.css"

import data from "../../data/categories";
import CategoryItem from "./categoryItem";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function CategoryCarousel() {

    const swiper = useRef<HTMLDivElement>(null)
    const arrowRight = useRef<HTMLButtonElement>(null);
    const arrowLeft = useRef<HTMLButtonElement>(null)

    const [swipe, setSwipe] = useState(0);
    const [lenght, setLenght] = useState(0) 


    const handleSwipeRight = () => {

        if (swiper.current != null) {

            if (swipe < swiper.current.children.length){
                setSwipe(swipe + 1);
                setLenght(lenght - swiper.current.children[swipe].clientWidth)
            }
          


        }

    }

    const handleSwipeLeft = () => {
        if (swiper.current != null && swipe > 0) {

            setSwipe(swipe - 1);
            setLenght(lenght + swiper.current.children[swipe].clientWidth)
        }
    }

    const disableArrowRight = () => {
        if (arrowRight.current != null) {
            arrowRight.current.disabled = true
        }
    }

    useEffect(() => {

        if (swiper.current != null) {

            if(swipe != 0){

                for (let i = 0; i < swiper.current.children.length; i++) {

                    let actualDiv = swiper.current.children[i];

                    if (actualDiv.classList.contains("active")) {

                        actualDiv.classList.remove("active");
                       
                    }
                 
                }

                swiper.current.children[swipe].classList.add("active");

                if(arrowRight.current != null){
                    if(swipe == swiper.current.children.length - 1)
                        arrowRight.current.disabled = true;
                    else
                        arrowRight.current.disabled = false
                }
            }


            console.log(swipe);
            swiper.current.style.transform = `translateX(${lenght}px)`;
        }

        if (arrowLeft.current != null) {
            if (swipe == 0)
                arrowLeft.current.disabled = true;
            else
                arrowLeft.current.disabled = false;
        }

      

    }, [swipe]);


    return (
        <div id="carousel-categories">
            <div id="carousel-buttons">
                <button onClick={e => handleSwipeLeft()} ref={arrowLeft} > <FontAwesomeIcon icon={faChevronLeft} /> </button>
                <button onClick={e => handleSwipeRight()} ref={arrowRight}> <FontAwesomeIcon icon={faChevronRight} /> </button>
            </div>
            <div id="swiper-category" ref={swiper}>
                {
                    data.categories.map((category, index) => {
                        return (
                            <div key={index} className={index == 0 ? 'active' : ''}>
                                <CategoryItem id={category.id} name={category.name} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
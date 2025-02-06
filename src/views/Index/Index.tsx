import React from "react";
import Header from "../../components/Header/header";
import CategoryCarousel from "../../components/categoryCaroseul/categoryCaroseul";


import "./index.css"

export default function Inndex(){

    return(
        <div>
            <header>
                <Header/>
            </header>
            <main id="main-container">
                <CategoryCarousel/>
            </main>
        </div>

    )
    
}
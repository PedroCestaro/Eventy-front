import React from "react";


interface category{
    id: string,
    name: string
}

export default function CategoryItem(props : category){
    return(
        <div className="category-item">
            <div className="category-img-container">
            </div>
            <div className="categroy-name">
                <h3>{props.name}</h3>
            </div>
        </div>
    )
}
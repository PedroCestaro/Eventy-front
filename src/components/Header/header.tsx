import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import cidades from "../../data/cidades"
import "./header.css";

import UserInfo from "./userInfo";

export default function Header() {

    const [search, setSearch] = useState('');
    const [city, setCity] = useState(cidades[0]);


    function handleSearchChange (value: string) {
        setSearch(value);
    }

    function handleChangeCity(cityIndex : number){
        const selectedCity = cidades[cityIndex];
        setCity(selectedCity);
    }

    return (
        <header>
            <nav id="main-bar">
                <div id="logo">
                    <div style={{ width: "200px", height: "50px", backgroundColor: "grey" }}></div>
                </div>
                <div id="search-field">
                    <div id="search-area">
                        <input style={{ width: "100%" }} type="text" placeholder="Procure por um evento..." value={search} onChange={e => handleSearchChange(e.target.value)} />
                        <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </div>
                </div>
                <div id="city-field">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <select onChange={e => handleChangeCity(parseInt(e.target.value))}>
                        {
                            cidades.map((city) => {

                                return (
                                    <option key={city.id} value={city.id}>
                                        {city.name}
                                    </option >)
                            })
                        }
                    </select>
                </div>

                <UserInfo />

            </nav>
        </header>
    );
}
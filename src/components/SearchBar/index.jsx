import React from "react";
import search from '../../img/search.svg'

export const SearchBar = () => {
    return (
        <div className="row search-bar">
            <input type="text" placeholder="Search here" />
            <img className="align-self-center" src={search} alt="search icon" />
        </div>
    )
}
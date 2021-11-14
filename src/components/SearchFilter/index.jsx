import React from "react";
import grid from '../../img/grid-view.svg'
import list from '../../img/list-view.svg'
import { mobileDevice } from "../../utils"

export const SearchFilter = () => {
    const isMobile = mobileDevice();
    return (
        <div className="row">
            <div className="col">
                <p className="result-number">7,618 results found in 5ms</p>
            </div>
            <div className="col search-filter d-flex align-items-center justify-content-end">
                {isMobile && <button className="mobile-filter">Filters</button>}
                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Default
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <a className="dropdown-item" href="/">Option 1</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/">Option 2</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/">Option 3</a>
                        </li>
                    </ul>
                </div>
                <img src={grid} alt="grid view icon" />
                <img src={list} alt="list view icon" />
            </div>
        </div>
    )
}
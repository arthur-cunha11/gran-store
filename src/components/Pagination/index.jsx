import React from 'react'
import left from '../../img/left.svg'
import right from "../../img/right.svg"

export const Pagination = () => {
    return (
        <div className="row pagination__custom">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="/" aria-label="Previous">
                            <img src={left} alt="left arrow icon" />
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">1</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">2</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">3</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">4</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">5</a>
                    </li>
                    <li className="page-item active">
                        <a className="page-link" href="/">6</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">7</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">8</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">9</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">10</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/" aria-label="Next">
                            <img src={right} alt="right awwor icon" />
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

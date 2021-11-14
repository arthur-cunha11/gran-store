import React from 'react'
import left from '../../img/left.svg'
import right from "../../img/right.svg"

export const Pagination = () => {
    return (
        <div className="row pagination__custom">
            <div className="d-flex align-items-center justify-content-center">
                <img src={left} alt="left arrow icon" />
                <div className="d-flex align-items-center justify-content-center">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <span>6</span>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                </div>
                <img src={right} alt="right arrow icon" />
            </div>

        </div>
    )
}

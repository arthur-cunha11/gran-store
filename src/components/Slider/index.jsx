import React from "react"
import slider from "../../img/slider.svg"

export const Slider = () => {
    return (
        <div className="filter__options__slider">
            <div>
                <h2>Slider</h2>
                <strong>1.99 - 4098</strong>
            </div>
            <img src={slider} alt="slider" />
        </div>
    )
}
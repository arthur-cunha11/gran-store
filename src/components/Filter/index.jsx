import React from 'react'
import { Brand, Category, MultiRange, Rating, Slider } from '../'

export const Filter = () => {
    return (
        <>
            <span>Filters</span>
            <div className="filter__options">
                <MultiRange />
                <Slider />
                <Category />
                <Brand />
                <Rating />
            </div>
            <button className="default-button" type="button">CLEAR ALL FILTERS</button>
        </>
    )
}

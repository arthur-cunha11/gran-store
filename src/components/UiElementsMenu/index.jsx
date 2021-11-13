import React from 'react'
import card from "../../img/credit-card.svg"
import colors from "../../img/droplet.svg"
import components from "../../img/archive.svg"
import grid from "../../img/layout.svg"
import table from "../../img/grid.svg"

export const UiElementsMenu = () => {
    return (
        <div className="row ui-elements-menu">
            <h2>UI ELEMENTS</h2>
            <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#grid" aria-expanded="false" aria-controls="grid">
                <img src={grid} alt=" icon" />
                Grid
            </button>
            <div className="collapse" id="grid">
                <input type="radio" className="btn-check" name="btnradio" id="grid-input" autoComplete="off" defaultChecked />
                <label className="btn" htmlFor="grid-input" />
            </div>

            <div>
                <img src={colors} alt=" icon" />
                <input type="radio" className="btn-check" name="btnradio" id="colors" autoComplete="off" />
                <label className="btn" htmlFor="colors">Colors</label>
            </div>

            <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#card" aria-expanded="false" aria-controls="card">
                <img src={card} alt=" icon" />
                Card
            </button>
            <div className="collapse" id="card">
                <input type="radio" className="btn-check" name="btnradio" id="card-input" autoComplete="off" defaultChecked />
                <label className="btn" htmlFor="card-input" />
            </div>

            <div>
                <img src={table} alt=" icon" />
                <input type="radio" className="btn-check" name="btnradio" id="table" autoComplete="off" />
                <label className="btn" htmlFor="table">Table</label>
            </div>

            <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#components" aria-expanded="false" aria-controls="components">
                <img src={components} alt=" icon" />
                Components
            </button>
            <div className="collapse" id="components">
                <input type="radio" className="btn-check" name="btnradio" id="components-input" autoComplete="off" defaultChecked />
                <label className="btn" htmlFor="components-input" />
            </div>
        </div>
    )
}

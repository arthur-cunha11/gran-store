import React from 'react'
import dashboard from '../../img/home.svg'
import ecommerce from '../../img/circle.svg'

export const DashboardMenu = () => {
    return (
        <div className="row">
            <button className="btn d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#dashboard-menu" aria-expanded="true" aria-controls="dashboard-menu">
                <img src={dashboard} alt="dashboard icon" />
                <p>Dashboard</p>
            </button>
            <div className="collapse show" id="dashboard-menu">
                <img src={ecommerce} alt="ecommerce icon" />
                <input type="radio" className="btn-check" name="btnradio" id="ecommerce" autoComplete="off" defaultChecked />
                <label className="btn" htmlFor="ecommerce">eCommerce</label>
            </div>
        </div>
    )
}

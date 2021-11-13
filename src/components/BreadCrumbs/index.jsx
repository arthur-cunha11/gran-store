import React from 'react'
import doubleArrow from '../../img/chevrons-right.svg'
import home from '../../img/home.svg'
import settings from '../../img/settings.svg'

export const BreadCrumbs = () => {
    return (
        <div className="row breadcrumb__custom">
            <div className="col breadcrumb__custom__links">
                <a href="/">
                    Card Actions
                    <img src={home} alt="home logo" />
                </a>
                <img src={doubleArrow} alt="double arrow icon" />
                <a href="/">eCommerce</a>
                <img src={doubleArrow} alt="double arrow icon" />
                <a href="/">Eletronics</a>
            </div>
            <div className="col breadcrumb__custom__settings">
                <img src={settings} alt="settings icon" />
            </div>
        </div>
    )
}

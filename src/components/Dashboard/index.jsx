import React from 'react'
import { Navbar, BreadCrumbs, Filter } from "../"

export const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <BreadCrumbs />
            <div className="row">
                <div className="col">
                    <Filter />
                </div>
                <div className="col">
                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row"></div>
                </div>
            </div>
        </div>
    )
}

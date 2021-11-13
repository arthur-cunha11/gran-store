import React from 'react'
import { Navbar, BreadCrumbs, Filter } from "../"

export const Dashboard = () => {
    return (
        <>
            <Navbar />
            <BreadCrumbs />
            <div className="row">
                <div className="col-3 filter">
                    <Filter />
                </div>
                <div className="col-9">

                </div>
            </div>
        </>
    )
}

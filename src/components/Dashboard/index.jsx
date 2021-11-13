import React from 'react'
import { BreadCrumbs, Filter, Navbar, Pagination, SearchBar, SearchFilter, SearchResult } from "../"
import { mobileDevice } from "../../utils";

export const Dashboard = () => {
    const isMobile = mobileDevice();

    return (
        <>
            <Navbar />
            <BreadCrumbs />
            <div className="row">
                {!isMobile && (
                    <div className="col-3 filter">
                        <Filter />
                    </div>
                )}
                <div className="col">
                    <SearchFilter />
                    <SearchBar />
                    <SearchResult />
                </div>
            </div>
            <Pagination />
        </>
    )
}

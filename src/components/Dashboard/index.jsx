import React from 'react'
import { BreadCrumbs, Filter, Navbar, Pagination, SearchBar, SearchFilter, SearchResult } from "../"

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
                    <SearchFilter />
                    <SearchBar />
                    <SearchResult />
                </div>
            </div>
            <Pagination />
        </>
    )
}

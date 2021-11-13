import React from 'react'
import bell from "../../img/bell.svg"
import calendar from "../../img/calendar.svg"
import chat from "../../img/message-square.svg"
import email from "../../img/mail.svg"
import profile from "../../img/oval.svg"
import search from "../../img/search.svg"
import star from "../../img/star.svg"
import todo from "../../img/check-square.svg"

export const Navbar = () => {
    return (
        <div className="row navbar__custom align-items-center">
            <div className="col navbar__custom__icons">
                <img src={todo} alt="todo icon" />
                <img src={chat} alt="chat icon" />
                <img src={email} alt="email icon" />
                <img src={calendar} alt="calendar icon" />
                <img src={star} alt="star icon" />
            </div>
            <div className="col navbar__custom__options d-flex align-items-center justify-content-end">
                <button type="button">English</button>
                <img src={bell} alt="bell icon" />
                <img src={search} alt="search icon" />
                <div>
                    <p>John Doe</p>
                    <span>Available</span>
                </div>
                <img src={profile} alt="profile icon" />
            </div>
        </div>
    )
}

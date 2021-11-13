import React from 'react'
import calendar from "../../img/calendar.svg"
import chat from "../../img/message-square.svg"
import email from "../../img/mail.svg"
import todo from "../../img/check-square.svg"

export const AppsMenu = () => {
    return (
        <div className="row">
            <h2>APPS</h2>
            <div>
                <img src={email} alt="email icon" />
                <input type="radio" className="btn-check" name="btnradio" id="email" autoComplete="off" />
                <label className="btn" htmlFor="email">Email</label>
            </div>

            <div>
                <img src={chat} alt="chat icon" />
                <input type="radio" className="btn-check" name="btnradio" id="chat" autoComplete="off" />
                <label className="btn" htmlFor="chat">Chat</label>
            </div>

            <div>
                <img src={todo} alt="todo icon" />
                <input type="radio" className="btn-check" name="btnradio" id="todo" autoComplete="off" />
                <label className="btn" htmlFor="todo">Todo</label>
            </div>

            <div>
                <img src={calendar} alt="calendar icon" />
                <input type="radio" className="btn-check" name="btnradio" id="calendar" autoComplete="off" />
                <label className="btn" htmlFor="calendar">Calendar</label>
            </div>
        </div>
    )
}

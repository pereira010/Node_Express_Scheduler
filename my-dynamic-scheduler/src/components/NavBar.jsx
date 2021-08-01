import React from 'react';
import { NavLink } from 'react-router-dom';

/*
    NavBar at the top of all private components
*/

const NavBar = () => {
    return (
        <div className="topnav">
            <ul>
                <li><NavLink to="home">Home Page</NavLink></li>
                <li><NavLink to="calendar">Calendar</NavLink></li>
                <li><NavLink to="edit-calendar">Edit Tasks and Events</NavLink></li>
                <li><NavLink to="generate-schedule">Generate Your Planner</NavLink></li>
                <li><NavLink to="logout">Log Out</NavLink></li>
            </ul>
            <hr></hr>
       </div>
    );
}

export default NavBar;
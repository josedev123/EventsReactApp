import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Navigation extends Component {
    render() {
        return (
            <div className="ct-box">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navigation

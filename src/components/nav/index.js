import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

export default props => (
    <nav>
        <ul>
            <li>
                <NavLink to="/" exact>Simple Form</NavLink>
            </li>
            <li>
                <NavLink to="/custom-form">Custom Form</NavLink>
            </li>
            <li>
                <NavLink to="/error-handling-form" exact>Error Handling Form</NavLink>
            </li>
        </ul>
    </nav>
);

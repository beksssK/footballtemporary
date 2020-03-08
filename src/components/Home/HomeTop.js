import React from 'react';
import './HomeTop.css';
import {NavLink} from "react-router-dom";

const HomeTop = () => {
    return (
        <div className='HomeTop'>
            <div className='HomeTop_header'>
                <h2>Welcome</h2>
                <NavLink to'/admin'>kk</NavLink>
            </div>
        </div>
    );
};

export default HomeTop;

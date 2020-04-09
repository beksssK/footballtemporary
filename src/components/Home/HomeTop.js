import React from 'react';
import './HomeTop.css';
import {NavLink} from "react-router-dom";

const HomeTop = () => {
    return (
        <div className='HomeTop page-top'>
            <div className='page-top__header'>
                <h2 className='page-top__title'>Welcome</h2>
            </div>
        </div>
    );
};

export default HomeTop;

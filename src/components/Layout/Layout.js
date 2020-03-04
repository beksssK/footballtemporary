import React from 'react';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import './Layout.css';
import MainFooter from "../MainFooter/MainFooter";

const Layout = props => {
    return (
        <div className='Layout'>
            <Toolbar/>
            <main className='MainLayout'>
                {props.children}
            </main>
            <MainFooter/>
        </div>
    );
};

export default Layout;

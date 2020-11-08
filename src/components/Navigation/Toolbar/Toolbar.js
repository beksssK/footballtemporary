import React, {useState} from 'react';
import {NavLink as RouterNav} from 'react-router-dom';
import './Toolbar.css';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink,} from "reactstrap";
import logo from '../../../assets/images/logo-white.png'
import Search from "../Search/Search";

const Toolbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <header className='Toolbar d-flex justify-content-between'>
            <Navbar expand="md" className='w-100 container text-uppercase' dark>
                <NavbarBrand exact tag={RouterNav} to='/' ><img width='50' height='auto' src={logo} alt="main logo"/></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className="Collapse">
                    <Search/>
                    <Nav navbar className='Main-nav col-12 col-md-8'>
                        <NavItem className='mx-2'>
                            <NavLink onClick={toggle} exact tag={RouterNav} className='text-light' to='/' >Home</NavLink>
                        </NavItem>
                        <NavItem className='mx-2'>
                            <NavLink onClick={toggle} exact tag={RouterNav} className='text-light' to='/players' >All Footballers</NavLink>
                        </NavItem>
                        <NavItem className='mx-2'>
                            <NavLink onClick={toggle} exact tag={RouterNav} className='text-light' to='/contacts' >Contact us</NavLink>
                        </NavItem>
                        <NavItem className='mx-2'>
                            <NavLink onClick={toggle} exact tag={RouterNav} className='text-light' to='/staff' >Our staff</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
};

export default Toolbar;

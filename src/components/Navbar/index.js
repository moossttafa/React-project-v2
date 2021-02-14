 import React from 'react'
 import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

 
 const Navbar = ({toggle}) => {
     return (
         <Nav>
            <NavLink to='/' >pizaa</NavLink>
            <NavIcon onClick={toggle}>
                <p>Mune</p>
                <Bars/>
            </NavIcon>
          </Nav>
     )
 }
 
 export default Navbar
 
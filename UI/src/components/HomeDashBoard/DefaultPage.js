import React, { Component } from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './Elements';

const DefaultPage = () =>{
    return(
        <>
      <Nav>
        <NavMenu>
          <NavLink to='/train/search' activeStyle>
            Search Train
          </NavLink>
          <NavLink to='/services' activeStyle>
            See Trains 
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            See Station
          </NavLink>
          <NavLink to='/about' activeStyle>
            About Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
    )
}


export default DefaultPage

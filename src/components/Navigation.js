import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AboutMeImg from '../images/chat_w.png'
import WorksImg from '../images/code_w.png'

function Navigation(props) {

  const { aboutMefowardRef, workForwardRef } = props;

  const smoothScroll = (componetRef) => {
    window.scrollTo({
      top: componetRef["current"].offsetTop,
      left: 0,
      behavior: 'smooth',
    })
  };

  const OnMoveNavClick = useCallback((e) => {
    e.preventDefault();
    if (e.target.classList.value === 'menu-link about') {
      smoothScroll(aboutMefowardRef)

    } else if (e.target.classList.value === 'menu-link works') {
      smoothScroll(workForwardRef)
    }

  }, [aboutMefowardRef, workForwardRef]);

  return (
    <NavMenu className="menu-wrap">
      <ul>
        <li>
          <a
            href="#about-me"
            className="menu-link about"
            onClick={OnMoveNavClick} >
            about me
          </a>
        </li>
        <li>
          <a
            href="#works"
            className="menu-link works"
            onClick={OnMoveNavClick}
          >works
          </a>
        </li>
        <li>
          <a
            href="#works"
            className="menu-link works"
            onClick={OnMoveNavClick}
          >works
          </a>
        </li>
      </ul>
    </NavMenu>
  );
}
Navigation.prototype = {
  aboutMefowardRef: PropTypes.shape({ component: PropTypes.instanceOf(React.Component) }),
  workForwardRef: PropTypes.shape({ component: PropTypes.instanceOf(React.Component) })
}
export default Navigation;

const NavMenu = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  top: 35%;
  right: 0;
  z-index: 99999;
  width: 60px;
  border-radius: 30px;
  color: #fff;
  background: rgba(0, 0, 0, .6);

  & ul {
    display: flex;
    flex-direction: column;
    /* height: 100%; */
    align-items: center; 
    justify-content: center;

    & li {
      list-style: none;
    }
  }

  & a {
    display: flex;
    
    width: 60px;
    height: 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    text-indent: -9999px;
  }

  & .about {
    background: url(${AboutMeImg}) center no-repeat; 
    background-size: 55%;
  }

  & .works {
    background: url(${WorksImg}) center no-repeat; 
    background-size: 55%;
  }

`;
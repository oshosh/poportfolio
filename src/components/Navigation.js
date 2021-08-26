import React, { useCallback } from 'react';
import styled from 'styled-components';

import ImgSrc from '../images/chat_w.png'
import ImgSrc2 from '../images/code_w.png'

function Navigation(props) {

  const { aboutMefowardRef, workForwardRef } = props;

  const OnMoveNavClick = useCallback((e) => {
    e.preventDefault();
    if (e.target.classList.value === 'menu-link about') {
      window.scrollTo({
        top: aboutMefowardRef.current.offsetTop,
        left: 0,
        behavior: 'smooth',
      })
    } else if (e.target.classList.value === 'menu-link works') {
      window.scrollTo({
        top: workForwardRef.current.offsetTop,
        left: 0,
        behavior: 'smooth',
      })
    }

  }, [aboutMefowardRef, workForwardRef])

  return (
    <NavMenu className="menu-wrap">
      <ul>
        <li>
          <a href="#about-me" className="menu-link about" onClick={OnMoveNavClick} >about me</a>
        </li>
        <li>
          <a href="#works" className="menu-link works" onClick={OnMoveNavClick}>works</a>
        </li>
        <li>
          <a href="#works" className="menu-link works" onClick={OnMoveNavClick}>works</a>
        </li>
      </ul>
    </NavMenu>
  );
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
    background: url(${ImgSrc}) center no-repeat; 
    background-size: 55%;
  }

  & .works {
    background: url(${ImgSrc2}) center no-repeat; 
    background-size: 55%;
  }

`
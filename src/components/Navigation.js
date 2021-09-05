import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AboutMeImg from '../images/chat_w.png'
import WorksImg from '../images/code_w.png'
import FooterImg from '../images/mail_w.png'
import OpenBtn from '../images/toggle-btn.svg'
import CloseBtn from '../images/close_button.png'
import GithubLogo from '../images/github.png'


function Navigation(props) {
  const { aboutMefowardRef, workForwardRef, footerForwardRef } = props;

  const navMenuRef = useRef()
  const menuBtnRef = useRef()
  const menuCloseBtnRef = useRef()
  const navfooterRef = useRef()

  const smoothScroll = (componetRef) => {
    window.scrollTo({
      top: componetRef["current"].offsetTop,
      left: 0,
      behavior: 'smooth',
    })
  };

  const OnMoveNavClick = useCallback((e) => {
    e.preventDefault();

    if (menuBtnRef.current.className.includes('active')) {
      menuBtnRef.current.classList.remove('active')
      navMenuRef.current.classList.remove('active')
      menuCloseBtnRef.current.classList.remove('active')
    }

    switch (e.target.classList.value) {
      case 'menu-link about':
        smoothScroll(aboutMefowardRef)
        break;
      case 'menu-link works':
        smoothScroll(workForwardRef)
        break;
      case 'menu-link footer':
        smoothScroll(footerForwardRef)
        break;
      default:
        console.log('default')
        break;
    }
  }, [aboutMefowardRef, workForwardRef, footerForwardRef]);

  const onMenuBtnClick = useCallback((e) => {
    e.preventDefault();

    if (!menuBtnRef.current.className.includes('active')) {
      menuBtnRef.current.classList.add('active')
      menuCloseBtnRef.current.classList.add('active')
      navMenuRef.current.classList.add('active')
      navfooterRef.current.classList.add('active')
    }
  }, [])

  const onMenuCloseBtnClick = useCallback((e) => {
    e.preventDefault();

    if (menuBtnRef.current.className.includes('active')) {
      menuBtnRef.current.classList.remove('active')
      navMenuRef.current.classList.remove('active')
      menuCloseBtnRef.current.classList.remove('active')
      navfooterRef.current.classList.remove('active')
    }
  }, [])

  return (
    <>
      <MenuBtn
        ref={menuBtnRef}
        onClick={onMenuBtnClick}
      >
        메뉴 버튼
      </MenuBtn>

      <NavMenu className="menu-wrap" ref={navMenuRef}>
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
              href="#footer"
              className="menu-link footer"
              onClick={OnMoveNavClick}
            >contact me
            </a>
          </li>
        </ul>
        <NavFooter ref={navfooterRef}>
          <a href="https://github.com/oshosh"
            target="_blank"
            className="nav-footer-logo"
            rel="noreferrer noopener">
          </a>
          <p>© 2021 by SE HYUN OH. All rights reserved.</p>
        </NavFooter>
        <MenuCloseBtn
          ref={menuCloseBtnRef}
          onClick={onMenuCloseBtnClick}
        >
          메뉴 닫기 버튼
        </MenuCloseBtn>
      </NavMenu>
    </>
  );
}
Navigation.prototype = {
  aboutMefowardRef: PropTypes.shape({ component: PropTypes.instanceOf(React.Component) }),
  workForwardRef: PropTypes.shape({ component: PropTypes.instanceOf(React.Component) }),
  footerForwardRef: PropTypes.shape({ component: PropTypes.instanceOf(React.Component) })
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

  opacity: 1;

  & ul {
    display: flex;
    flex-direction: column;
    height: 100%;
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

  & .footer {
    background: url(${FooterImg}) center no-repeat; 
    background-size: 55%;
  }

  @media ${({ theme }) => theme.device.mobile} {
    top: -120%;
    width: 100%;
    height: 100%; 
    background: #fff;
    
    border-radius: 0;
    padding-top: 200px;

    opacity: 0;
    overflow-y: hidden;

    & ul{
      justify-content: flex-start;
      height: 80vh;
    }
    
    &.active{
      opacity: 1;
      top: 0;
      animation: 0.5s ease-in-out 0s forwards bounce;

      @keyframes bounce {
        0% {
          top: -120%;
        }
        100% {
          top: 0;
        }
      }
    }   

    & a {
      display: block;
      width: 100%;
      margin: 30px 0;
      height: auto;
      font-size: 2.2rem;
      text-indent: 0;
      
      text-decoration: none;
      color: #555555;
    }

    & .about,
    & .works,
    & .footer {
      background: none;
    }
   
  }
`;

const MenuBtn = styled.button`
  display: none;

  position: fixed;
  top: 0;
  right: 0;
  margin: 20px ;
  width: 40px;
  height: 40px;
  /* cursor: pointer; */
  opacity: 0;
  
  overflow:hidden;
  z-index: 100;

  text-indent: -9999px;
  background: url(${OpenBtn}) center no-repeat;
  background-size: cover ;
  border: none ;
  
  @media ${({ theme }) => theme.device.mobile} {
    display: block;
    opacity: 1;
    /* z-index: 1000; */
    /* padding: 20px;? */
    transition: all 0.3s linear 0s;
  }
`

const MenuCloseBtn = styled.button`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px ;
  width: 40px;
  height: 40px;
  cursor: pointer;
  opacity: 0;

  text-indent: -9999px;
  background: url(${CloseBtn}) center no-repeat;
  background-size: cover ;
  border: none ;
  
  @media ${({ theme }) => theme.device.mobile} {
    opacity: 0;
    transition: all 0.3s linear 0s;

    &.active {
      opacity: 1;
      display: block;
    }
  }
`

const NavFooter = styled.div`
  & {
    display: none;
    margin: 0 auto;
    width: 100%;
    height: 200px;
    
  }
  
  @media ${({ theme }) => theme.device.mobile} {
    & {
      display: block;
    }
    
    & .nav-footer-logo{
      width: 40px;
      height: 40px;
      background: url(${GithubLogo}) center no-repeat;
      background-size: cover;
      opacity: 0.5;
      text-align: center;
      margin: 0 auto;
    }

    & p{
      margin: 10px 0 20px;
      font-size: 0.8rem;
      color: #808080;
      text-align: center;
    }
  }
`
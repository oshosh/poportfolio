import React, { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Portfol01 from '../images/portfolio01_douzon.png';


function Works({ forwardRef2 }) {

    const slide = useRef();

    useEffect(() => {

        const slideWrap = document.querySelector('.slide-wrap');
        const slide = slideWrap.querySelectorAll('.slide');

        const beforeCloneSlide = slide[slide.length - 1].cloneNode(true); // 복제 element 마지막
        const afterCloneSlide = slide[0].cloneNode(true); // 첫번째 복제

        slideWrap.insertBefore(beforeCloneSlide, slideWrap.firstChild); // 마지막 복제 노드를 맨 첫번째로 삽입
        slideWrap.appendChild(afterCloneSlide); // 첫번째 복제 노드를 마지막에 삽입

        const slideIndicatorWrap = document.querySelector('.slide-indicator');

        let currentSlide = 1;
        const speed = '0.5s';

        // load 
        slideWrap.querySelectorAll('.slide').forEach((slide, index) => {
            slideWrap.style.cssText = `transform: translate(${currentSlide * -155}%, 0);`;
            slide.style.cssText = `opacity: 1; transform: translate(${index * 155}%, 0)`;
        });

        slide.forEach((_, index) => {
            if (index === 0) {
                slideIndicatorWrap.innerHTML += `<button class="slide-button active">${index + 1}</button>`;
            } else {
                slideIndicatorWrap.innerHTML += `<button class="slide-button">${index + 1}</button>`;
            }
        });

        const slideMove = () => {
            const move = () => {
                // 슬라이드 버튼이 현재 활성화 버튼이 있다면 삭제
                slideIndicatorWrap.querySelectorAll('.slide-button').forEach((button) => {
                    button.classList.remove('active');
                });

                // 슬라이더 이동
                slideWrap.style.cssText = `transform: translate(${currentSlide * -155}%, 0); transition: all ${speed};`;

                // 슬라이더 버튼 활성화 세팅
                slideIndicatorWrap.querySelectorAll('.slide-button')
                [currentSlide - 1].classList.add('active');
                if (currentSlide >= slide.length) {
                    currentSlide = 1;
                } else {
                    ++currentSlide;
                }
            };

            // 슬라이더 버튼 이벤트 및 인덱스 설정
            slideIndicatorWrap.addEventListener('click', (e) => {
                if (!e.target.classList.contains('slide-button')) return false;
                currentSlide = e.target.textContent;
                move();
            });
        };
        slideMove();

    }, [])
    return (
        <WorkSection id='works' ref={forwardRef2}>
            <WorkWrapper>
                <h2><span>Works</span></h2>

                {/* 슬라이더 */}
                <SlideWrapper className="slide-wrap">



                    <div className="slide" ref={slide}>
                        {/* image */}
                        <div className="work-image-wrap">
                            <figure>
                                {/* https://photoscissors.com/ */}
                                {/* https://www.iloveimg.com/ko/resize-image */}
                                {/* 995 * 553 */}
                                <img src={Portfol01} alt="더존비즈온 위하고 메인" />
                            </figure>
                            <p className="time">
                                <time dateTime="2019-10">2019. 10</time> ~
                                <time dateTime="2021-02">2021. 02</time>
                            </p>
                            <p className="topic">더존비즈온 Wehago 플랫폼 <br />Smart AX Web 마이그레이션 개발<br /> (법인조정, 개인조정) 및 유지보수</p>

                            <LinkWrapper className="work-link-wrap">
                                <a
                                    href="https://www.wehago.com/landing/ko/business/"
                                    className="work-link"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >WebSite</a
                                >
                            </LinkWrapper>
                        </div>

                        {/* 소개 */}
                        <WorkTextWrapper className="work-text-wrap">
                            <WorkText className="work-text w50p">
                                <div className="paragraph">
                                    <strong>개발 설명</strong>
                                    <p>
                                        개발 내용 기제
                                    </p>
                                </div>
                            </WorkText>
                            <WorkText className="work-text w50p">
                                <div className="paragraph">
                                    <strong>My part</strong>
                                    <ul>
                                        <li>설명</li>
                                        <li>설명</li>
                                        <li>설명</li>
                                        <li>
                                            설명<br />설명
                                        </li>
                                        <li>설명</li>
                                        <li>설명</li>
                                        <li>설명</li>
                                        <li>설명</li>
                                    </ul>
                                </div>
                                <div className="paragraph">
                                    <strong>Skills</strong>
                                    <p>HTML5, CSS3, ES6, ReactJS, PostgreSQL, RESTful API in Django, C#(Winform)</p>
                                </div>
                            </WorkText>
                        </WorkTextWrapper>
                    </div>



                    <div className="slide" ref={slide}>
                        {/* image */}
                        <div className="work-image-wrap">
                            <figure>
                                {/* https://photoscissors.com/ */}
                                {/* https://www.iloveimg.com/ko/resize-image */}
                                {/* 995 * 553 */}
                                <img src={Portfol01} alt="더존비즈온 위하고 메인" />
                            </figure>
                            <p className="time">
                                <time dateTime="2019-10">2019. 10</time> ~
                                <time dateTime="2021-02">2021. 02</time>
                            </p>
                            <p className="topic">더존비즈온 Wehago 플랫폼 <br />Smart AX Web 마이그레이션 개발<br /> (법인조정, 개인조정) 및 유지보수</p>

                            <LinkWrapper className="work-link-wrap">
                                <a
                                    href="https://www.wehago.com/landing/ko/business/"
                                    className="work-link"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >WebSite</a
                                >
                            </LinkWrapper>
                        </div>

                        {/* 소개 */}
                        <WorkTextWrapper className="work-text-wrap">
                            <WorkText className="work-text w50p">
                                <div className="paragraph">
                                    <strong>개발 설명</strong>
                                    <p>
                                        개발 내용 기제
                                    </p>
                                </div>
                            </WorkText>
                            <WorkText className="work-text w50p">
                                <div className="paragraph">
                                    <strong>My part</strong>
                                    <ul>
                                        <li>설명</li>
                                        <li>설명</li>
                                        <li>설명</li>
                                        <li>
                                            설명<br />설명
                                        </li>
                                        <li>설명</li>
                                        <li>설명</li>
                                        <li>설명</li>
                                        <li>설명</li>
                                    </ul>
                                </div>
                                <div className="paragraph">
                                    <strong>Skills</strong>
                                    <p>HTML5, CSS3, ES6, ReactJS, PostgreSQL, RESTful API in Django, C#(Winform)</p>
                                </div>
                            </WorkText>
                        </WorkTextWrapper>
                    </div>












                </SlideWrapper>

                <SlideIndicator className="slide-indicator"></SlideIndicator>
            </WorkWrapper>
        </WorkSection>
    );
}

Works.prototype = {
    forwardRef2: PropTypes.shape({ component: PropTypes.instanceOf(React.Component) }),
};

export default forwardRef(Works);


const WorkSection = styled.section`
    height: 900px;
    margin: 0 auto;
    background: #f2f2f2;
    
    position: relative;
    overflow: hidden;

    &::before{
        content: ''; 
        display: block;
        background: #fff;
        width: 120%;
        height: 150px;
        
        position: absolute;
        top: -72px; 
        transform: rotate(3deg);
    }
`;

const WorkWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    height: 900px;
    display: flex;
    position: relative;

    & h2 {
        display: inline-block;
        font-size: 2.2rem;
        font-weight: 400;
        text-align: center;
        flex-basis: 100%;
        margin: 50px 0;
        color: ${({ theme }) => theme.colors.titleColor};

        & span {
            display: inline-block;
        }

        & span:after {
            ${({ theme }) => theme.common.InlineBlockSpanUnderLine};
            margin: 25px auto 0px;
        }
    }
`

const SlideWrapper = styled.div`
    position: absolute;
    top: 30%;
    width: 100%;
    padding: 0 20px;

    & .slide::after {
        content: '';
        display: block;
        clear: both;
    }

    & .slide {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
    }

    & .work-image-wrap {
        display: flex;
        flex-direction: column;
        width: 35%;
        min-width: 350px;
        text-align: left;
    }

    & figure {
        margin: 0;
        display: inline-block;

        & img{
            max-width: 100%;
        }
    }

    & .time{
        font-family: 'Noto Sans KR', sans-serif;
        margin-top: 20px ;
        padding-left: 10px;
        font-size: 1.12rem;
        font-weight: 600;

        &::before{
            content: '📅 ';
        }
    }

    & .topic{
        margin-top: 8px;
        padding-left: 10px;
        font-size: 0.9rem;
        font-weight: 400;
        line-height: 1.34;

        &::before{
            content: '🚧 ';
        }
    }
`

const LinkWrapper = styled.div`
    margin-top: 10px;
    padding-left: 10px;

    & a {
        display: inline-block;
        margin-right: 5px;
        border-bottom: 1px solid #808080;
        color: #808080;
        font-size: 1.0rem;
        text-decoration: none;

        &::before {
            content: '🔗 ';
        }
    }
`

const WorkTextWrapper = styled.div`
    display: flex;
    
    padding-left: 25px;
    text-align: left;
    font-size: 1.1rem;
    line-height: 1.6;
    /* background: red; */
    width: 60%;
    vertical-align: top;
    word-break: keep-all;

    & strong {
        display: block;
        margin-top: 20px;
        font-size: 1.3rem;
        color:  ${({ theme }) => theme.colors.darkPurple};
    }

    & p {
        margin-top: 7px;
    }

    & ul {
        margin-top: 7px;
        
        & li {
            list-style: none;
        }
    }
`;

const WorkText = styled.div`
    margin: 0 10px;
    /* background: yellowgreen; */
    width: 50%;

    & .w50p{
        display: flex;
        flex-direction: column;
        margin-top: 5px;
        box-sizing: border-box;
    }
`

const SlideIndicator = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);

    & .slide-button {
        width: 25px;
        height: 25px;
        margin: 0 5px;
        border-radius: 50%;
        font-size: 1.3rem;
        color: #ffffff;
        background: ${({ theme }) => theme.colors.purple};
        outline: 0;
        border: 0;
        text-align: center;
        
        &.active {
        background: ${({ theme }) => theme.colors.darkPurple};
        }
    }
`;
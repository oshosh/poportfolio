import React, { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Portfol01 from '../images/portfolio01_douzon.png';


function Works({ workForwardRef }) {
    const sliderWrapRef = useRef(null);
    const slideIndicatorRef = useRef(null);
    const SPEED = '0.5s';

    let currentSlide = 1;

    useEffect(() => {
        const { slideWrap, slide } = slideClassCopyAll()
        const slideIndicatorWrap = slideIndicatorRef.current;

        sildeSetting(currentSlide, slideWrap)
        slideIndicatorSetting(slide, slideIndicatorWrap)

        const handleClick = (e) => {
            if (!e.target.classList.contains('slide-button')) return false;
            currentSlide = parseInt(e.target.textContent, 10);
            move();
        }

        const move = () => {
            let indicator = slideIndicatorWrap.querySelectorAll('.slide-button')
            indicator.forEach((button) => button.classList.remove('active')); // 슬라이드 버튼이 현재 활성화 버튼이 있다면 삭제

            slideWrap.style.cssText = `transform: translate(${currentSlide * -155}%, 0); transition: all ${SPEED};`; // 슬라이더 이동
            indicator[currentSlide - 1].classList.add('active'); // 슬라이더 버튼 활성화 세팅
        };

        slideIndicatorWrap.addEventListener('click', handleClick); // 슬라이더 버튼 이벤트 및 인덱스 설정
        move();

        return () => slideIndicatorWrap.removeEventListener('click', handleClick);
    }, [])

    const slideClassCopyAll = () => {
        const slideWrap = sliderWrapRef.current;
        const slide = slideWrap.querySelectorAll('.slide');

        const beforeCloneSlide = slide[slide.length - 1].cloneNode(true); // 복제 element 마지막
        const afterCloneSlide = slide[0].cloneNode(true); // 첫번째 복제

        slideWrap.insertBefore(beforeCloneSlide, slideWrap.firstChild); // 마지막 복제 노드를 맨 첫번째로 삽입
        slideWrap.appendChild(afterCloneSlide); // 첫번째 복제 노드를 마지막에 삽입

        return { slideWrap, slide }
    }

    const sildeSetting = (currentSlide, slideWrap) => {
        slideWrap.querySelectorAll('.slide').forEach((slide, index) => {
            slideWrap.style.cssText = `transform: translate(${currentSlide * -155}%, 0);`;
            slide.style.cssText = `opacity: 1; transform: translate(${index * 155}%, 0)`;
        });
    }

    const slideIndicatorSetting = (slide, slideIndicatorWrap) => {
        slide.forEach((_, index) => {
            if (index === 0) {
                slideIndicatorWrap.innerHTML += `<button class="slide-button active">${index + 1}</button>`;
            } else {
                slideIndicatorWrap.innerHTML += `<button class="slide-button">${index + 1}</button>`;
            }
        });
    }

    return (
        <WorkSection id='works' ref={workForwardRef}>
            <WorkWrapper>
                <h2><span>Works</span></h2>

                {/* 슬라이더 */}
                <SlideWrapper className="slide-wrap" ref={sliderWrapRef}>

                    <div className="slide" >
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



                    <div className="slide">
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

                <SlideIndicator className="slide-indicator" ref={slideIndicatorRef}></SlideIndicator>
            </WorkWrapper>
        </WorkSection>
    );
}

Works.prototype = {
    workForwardRef: PropTypes.shape({ component: PropTypes.instanceOf(React.Component) }),
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

    @media ${({ theme }) => theme.device.mobile} {
        & .slide {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: -100px;
        }

        & .work-image-wrap {
            position: relative;
            left: -15px;
            
            width: 70%;
            min-width: 150px;
            text-align: center;

            & figure {
                width: 200px;
                margin: 0 auto;
            }

            & p {
                font-size: 0.9rem;
            }
            & p.topic {
                font-size: 0.85rem;
            }
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
    @media ${({ theme }) => theme.device.mobile} {
        width: 100%;
        box-sizing: border-box;
        padding: 0 15px;
    }
`;

const WorkText = styled.div`
    margin-top: 5px;
    margin: 0 10px;
    /* background: yellowgreen; */
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    box-sizing: border-box;

    @media ${({ theme }) => theme.device.mobile} {
        margin: 0 15px;

        & .paragraph {
            & strong {
                font-size: 1.3rem;
            }

            & ul {
                font-size: 0.9rem;
            }

            & p {
                font-size: 0.8rem;
            }
        }
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
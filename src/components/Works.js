import React, { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Portfol01 from '../images/portfolio01.png';
import Portfol02 from '../images/portfolio02.png';
import Portfol03 from '../images/portfolio03.png';
import Portfol04 from '../images/portfolio04.png';

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

            slideWrap.style.cssText = `transform: translate(${currentSlide * -165}%, 0); transition: all ${SPEED};`; // 슬라이더 이동
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
            slideWrap.style.cssText = `transform: translate(${currentSlide * -165}%, 0);`;
            slide.style.cssText = `opacity: 1; transform: translate(${index * 165}%, 0)`;
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
                                <time dateTime="2020-02">2021. 02</time>
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
                                        더존비즈온에서 닷넷으로 개발된 회계 솔루션 Smart A를 Wehago 플랫폼 React WEB 서비스로 마이그레이션 전환하였으며 초기 Back-End 까지 담당했었으나 출시 임박으로 인한 역할 분리가 되었습니다.
                                    </p>
                                </div>
                            </WorkText>
                            <WorkText className="work-text w50p">
                                <div className="paragraph">
                                    <strong>My part (Front-End)</strong>
                                    <ul>
                                        <li>1. 380 종 서식 중 총 40개의 신규 메뉴 개발</li>
                                        <li>2. 2020년 5월 까지 순차적으로 서비스 전부 오픈 이후 60종 메뉴 유지보수 관리</li>
                                        <li>3. Smart AX 부서 통합 이후 플랫폼 사업 본부에서 회계, 원천(급여) 서비스 추가 개발 담당</li>
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
                        <div className="work-image-wrap">
                            <figure>
                                <img src={Portfol02} alt="OSH 포트폴리오" />
                            </figure>
                            <p className="time">
                                <time dateTime="2021-08">2021. 08</time> ~
                                <time dateTime="2021-09">2021. 09</time>
                            </p>
                            <p className="topic">반응형 개인 포트폴리오 사이트 구현</p>

                            <LinkWrapper className="work-link-wrap">
                                <a
                                    href="https://oshosh.github.io/poportfolio/"
                                    className="work-link"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >WebSite</a
                                >
                                <a
                                    href="https://github.com/oshosh/poportfolio"
                                    className="work-link"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >GitHub
                                </a>
                            </LinkWrapper>
                        </div>
                        <WorkTextWrapper className="work-text-wrap">
                            <WorkText className="work-text w50p">
                                <div className="paragraph">
                                    <strong>개발 설명</strong>
                                    <p>
                                        핵심적으로 반응형, 크로스 브라우징을 기준 점으로 개발이 되었습니다. 모바일 기준 768px 이하 데스트탑 기준 1024px을 지원합니다. <br />
                                        또, 저의 프로필을 확인하시어 CONTACT ME에서 채용 이메일을 전달하실 수 있습니다.
                                    </p>
                                </div>
                                <div className="paragraph">
                                    <strong>이슈 사항</strong>
                                    <p>
                                        react-app-polyfill을 적용하여 ie 11버젼을 지원하나 이슈사항으로 인한 고도화가 필요합니다.
                                    </p>
                                </div>
                            </WorkText>
                            <WorkText className="work-text w50p">
                                <div className="paragraph">
                                    <strong>Skills</strong>
                                    <p>HTML5, CSS3, ES6, REACT</p>
                                </div>
                                <div class="paragraph">
                                    <strong>library</strong>
                                    <p>
                                        styled-components, gh-pages, react-hook-form, react-scroll, react-loading, emailjs-com, dotenv, react-daum-postcode
                                    </p>
                                </div>

                            </WorkText>
                        </WorkTextWrapper>
                    </div>


                    <div className="slide">
                        <div className="work-image-wrap">
                            <figure>
                                <img src={Portfol03} alt="Fakegram" />
                            </figure>

                            <p className="time">
                                <time dateTime="2021-09">2021. 09</time> ~
                                <time>진행중</time>
                            </p>
                            <p className="topic">Fakegram (SNS 사이트 구현 - 미완성)</p>

                            <LinkWrapper className="work-link-wrap">
                                <a
                                    href="https://github.com/oshosh/Fakegram"
                                    className="work-link"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >GitHub
                                </a>
                            </LinkWrapper>
                        </div>

                        <WorkTextWrapper className="work-text-wrap">
                            <WorkText className="work-text w50p">
                                <div className="paragraph">
                                    <strong>개발 설명</strong>
                                    <p>
                                        SSR을 기반으로 한 데이터 랜더링 최적화를 기반으로 현재 개인 스터디용 미니 프로젝트입니다. <br />
                                        기능에 맞는 전역 데이터 관리 및 실시간 소통이 가능한 공간, 다양한 디자인 프레임워크 사용등을 지향하고 있습니다.
                                    </p>
                                </div>
                                <div className="paragraph">
                                    <strong>이슈 사항</strong>
                                    <p>
                                        개발 시작기간이 얼마 되지 않아 서비스 오픈까지 소요 될 예정입니다.
                                    </p>
                                </div>
                            </WorkText>
                            <WorkText className="work-text w50p">
                                <div className="paragraph">
                                    <strong>Skills</strong>
                                    <p>HTML5, CSS3, ES6, ANTD, REACT, NEXT, REDUX</p>
                                </div>
                                <div class="paragraph">
                                    <strong>library</strong>
                                    <p>
                                        ant-design/icon, styled-components, react-hook-form, @hookform/error-message, redux-saga, redux-actions,  <br />
                                        dev-tools, @hookform/resolvers, yup, react-slick, emoji-picker-react
                                    </p>
                                </div>

                            </WorkText>
                        </WorkTextWrapper>
                    </div>


                    <div className="slide">
                        <div className="work-image-wrap">
                            <figure>
                                <img src={Portfol04} alt="Fakegram" />
                            </figure>
                            <p className="time">
                                <time dateTime="2019-01">2019. 01</time> ~
                                <time dateTime="2019-06">2019. 06</time>
                            </p>
                            <p className="topic">인증키를 통한 모듈 설치 개발 (JCertSoultion)</p>

                            <LinkWrapper className="work-link-wrap">
                                <a
                                    href="http://www.fusiondata.co.kr/products/jdesktop.php"
                                    className="work-link"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >WebSite
                                </a>
                            </LinkWrapper>

                        </div>

                        <WorkTextWrapper className="work-text-wrap">
                            <WorkText className="work-text w50p">
                                <div className="paragraph">
                                    <strong>개발 설명</strong>
                                    <p>
                                        NSIS, C#을 통한 응용프로그램 설치 패키징 스크립트 제작 및 라이선스 검증 솔루션 개발을 하였습니다.
                                    </p>
                                </div>
                                <div className="paragraph">
                                    <strong>기능</strong>
                                    <ul>
                                        <li>1. JKeyGenerator - 암호 키 제작</li>
                                        <li>2. JCertServer - 라이선스 검증 서버</li>
                                        <li>3. JCertFileGenerator - 라이선스 파일 생성 프로그램</li>
                                        <li>4. JCertFileChecker - 라이선스 유효성 검사 DLL</li>
                                    </ul>
                                </div>
                            </WorkText>
                            <WorkText className="work-text w50p">
                                <div className="paragraph">
                                    <strong>Skills</strong>
                                    <p>C#(Winform, WCF), PostgreSQL, NSIS</p>
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
        font-size: .9rem;
    }

    & ul {
        margin-top: 7px;
        & li {
            font-size: .9rem;
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
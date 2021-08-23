import React from 'react';
import styled from 'styled-components';
import Myimg2 from '../images/portfolio01_pc1 (1).png'

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
        color: #1d1720;

        & span {
            display: inline-block;
        }

        & span:after {
            content: '';
            display: inline-block;
            width: 80%;
            height: 2px;
            margin: 25px auto 0px;
            background: #a2a1dc;
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

function Works() {
    return (
        <WorkSection>
            <WorkWrapper>
                <h2><span>Works</span></h2>

                {/* 슬라이더 */}
                <SlideWrapper className="slide-wrap">
                    <div className="slide">
                        {/* image */}
                        <div className="work-image-wrap">
                            <figure>
                                {/* https://photoscissors.com/ */}
                                {/* https://www.iloveimg.com/ko/resize-image */}
                                {/* 995 * 553 */}
                                <img src={Myimg2} alt="더존비즈온 위하고 메인" />
                            </figure>
                            <p className="time">
                                <time datetime="2019-10">2019. 10</time> ~
                                <time datetime="2021-02">2021. 02</time>
                            </p>
                            <p className="topic">더존비즈온 Wehago 플랫폼 <br />Smart AX Web 마이그레이션 개발<br /> (법인조정, 개인조정) 및 유지보수</p>

                            <LinkWrapper className="work-link-wrap">
                                <a
                                    href="https://www.wehago.com/#/main"
                                    className="work-link"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >WebSite</a
                                >
                            </LinkWrapper>
                        </div>

                        {/* 소개 */}
                        <div className="work-text-wrap">
                            <div className="work-text w50p">
                                <div className="paragraph">
                                    <strong>개발 설명</strong>
                                    <p>
                                        개발 내용 기제
                                    </p>
                                </div>
                            </div>
                            <div className="work-text w50p">
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
                            </div>
                        </div>
                    </div>
                </SlideWrapper>
            </WorkWrapper>
        </WorkSection>
    );
}

export default Works;
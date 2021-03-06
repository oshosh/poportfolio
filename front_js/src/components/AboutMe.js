import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { mainKeywordArray } from '../util/lib/commFunction'
function AboutMe({ aboutForwardRef }) {
    return (
        <Section id='about-me' ref={aboutForwardRef}>
            <div className='wrap-1200 common-group'>
                <h2>
                    <span><b>ABOUT</b> ME</span>
                </h2>
                <IntroduceWrapper className='introduce-text-wrap'>
                    <p className="introduce-title">안녕하세요 :D</p>
                    <p>
                        {mainKeywordArray.join(', ')} <br />
                        프론트엔드 개발자 오세현입니다
                    </p>
                    <p>
                        저는 프론트엔드 개발자로 현업 경험이 있습니다.<br />
                        각 포지션에 있어서 업무 시, UI 개발에 대한 궁금증,<br />
                        비즈니스 로직 및 전사적 플로우 시스템에 대한 궁금증을 꼬리에 물고<br />
                        단순히 호기심에서 그치지 않고 빠르게 파악 함으로서<br />
                        같은 팀원으로 녹아들 수 있는 프론트엔드 개발자 되겠습니다.
                        <br /><br />
                        사용자가 사용하기 편리한 웹서비스를 만들어<br />
                        사람들에게 도움을 주고싶습니다.<br /><br />

                        그러기 위해 구성원으로써 능동적으로 의견을 내고 들을 것이며,<br />
                        테크 기술에 대하여 공유 할 수 있는 공생 관계를 유지할 것입니다. <br />
                        <br />
                        명목적인 회사가 동료가 아닌 서로 성장 할 수 있는 일원이 되길 희망합니다.
                    </p>
                    <LinkWrapper>
                        <a
                            href="https://unique-diadem-604.notion.site/f4391fd3ffb34d0fac61019e12270742"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            이력서 바로가기
                        </a>
                        <a
                            href="https://github.com/oshosh"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            GitHub 바로가기
                        </a>
                    </LinkWrapper>
                </IntroduceWrapper>
                <SkillWraper className='skill-text-wrap' >
                    <SkillItemBox>
                        <strong>Markup</strong>
                        <p>
                            웹 표준과 웹 접근성을 지향합니다. <br />
                            시멘틱 태그를 활용하여 용도 명확하게 전달 할 수 있도록 구성합니다.
                        </p>
                    </SkillItemBox>
                    <SkillItemBox>
                        <strong>CSS</strong>
                        <p>
                            오픈소스를 활용한 디자인 컴포넌트 사용 혹은 CSS in JS (Styled-Components) 사용하여 구애 받지 않는 스타일링 구현이 가능합니다.
                        </p>
                    </SkillItemBox>
                    <SkillItemBox>
                        <strong>JavaScript</strong>
                        <p>
                            코딩 컨벤션을 준수하고 ES6을 활용하여 유연한 데이터 처리 및 관리가 가능합니다. <br />
                            또한 HOC + Class Component 기반의 React 실무 프로젝트 경험이 있습니다.<br />
                            Hook 또한 경험이 있으며 최근 SSR의 접근성을 고려하여 Next.JS를 공부하고 있습니다.
                        </p>
                    </SkillItemBox>
                    <SkillItemBox>
                        <strong>Server</strong>
                        <p>
                            Django, C# WCF에서 실무 경험을 기반으로하여 Restful API한 환경을 이해하고 있습니다.<br />
                            최근 미니 프로젝트를 진행하면서 Node Express를 공부하고 있습니다.<br />
                            번복적 수정을 최대한 줄여 작업 요구 사항을 같이 제시하여 Backend와의 적극적인 소통을 도모하겠습니다.<br />
                        </p>
                    </SkillItemBox>
                    <SkillItemBox>
                        <strong>DevOps</strong>
                        <p>
                            Production 배포를 돌아가면서 담당한 경험이 있습니다.
                            GitLab, SourceTree ,Jenkins를 활용하여 프로젝트를 배포를 하였습니다. <br />
                            실수가 발생하지 않도록 최대한 긴장을 늦추지 않고 있습니다.
                        </p>
                    </SkillItemBox>
                    <SkillItemBox>
                        <strong>ETC</strong>
                        <p>
                            Confluence WIKI를 통하여 공통 로직 및 공통 컴포넌트에 대한 문서를 정의하여 공유하고 의견을 취합하여 반영 할 수 있는 문서 작성 능력을 갖추고 있습니다.
                        </p>
                    </SkillItemBox>
                </SkillWraper>
            </div>
        </Section >
    );
}

AboutMe.prototype = {
    aboutForwardRef: PropTypes.shape({ component: PropTypes.instanceOf(React.Component) }),
};

export default forwardRef(AboutMe);


const Section = styled.section`
    position: relative;
    z-index: 1;

    & .wrap-1200{
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-flow: row wrap;
    }

    & h2 {
        margin: 50px 0;
        font-weight: 400;
        font-size: 2.2rem;
        text-align: center;
        color: ${({ theme }) => theme.colors.titleColor};
        flex-basis: 100%;

        & span {
            display: inline-block;
        }
        
        & span::after{
            ${({ theme }) => theme.common.InlineBlockSpanUnderLine};
        }
    }
`

const IntroduceWrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    flex-basis: 45%;
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
    line-height: 1.6;

    & p:first-child {
        ${({ theme }) => theme.common.AboutTitle};
        
        &::before{
            content: '';
            display: block;
            width: 250px;
            height: 250px;
            position: absolute;
            background: ${({ theme }) => theme.colors.purple};
            z-index: -1;
            transform: translate(-50%, -25%);
            border-radius: 50%;
            opacity: 0.25;
        }
    }

    & > p:nth-child(2){
        margin-top: 50px;
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.purple};

        &::after{
            content: '';
            display: block;
            width: 100px;
            height: 100px;
            position: absolute;
            background: ${({ theme }) => theme.colors.purple};
            z-index: -1;
            transform: translate(-150%, -65%);
            border-radius: 50%;
            opacity: 1;
        }
    }

    & > p:nth-child(3){
        margin-top: 50px;
        color: ${({ theme }) => theme.colors.gray};
    }

    @media ${({ theme }) => theme.device.mobile} {
        & {
            flex-basis: 100%;
        }

        & p:first-child {
            font-size: 1.5rem;
        }

        & > p:nth-child(2){
            font-size: 1rem;
        }

        & > p:nth-child(3){
            font-size: 0.83rem;
        }
    }
`

const SkillWraper = styled.div`
    display: flex;
    flex-flow: row wrap;
    flex-basis: 55%;
    padding: 10px;
    box-sizing: border-box;
    

    @media ${({ theme }) => theme.device.mobile} {
        & {
            flex-basis: 100%;
        }
    }
`
const SkillItemBox = styled.div`
    width: 50%;
    box-sizing: border-box;
    padding: 0 10px;

    & strong {
        display: inline-block;
        ${({ theme }) => theme.common.AboutTitle};
    }

    & p {
        margin-top: 10px;
        font-size: 0.95rem;
        line-height: 1.6;
        color: ${({ theme }) => theme.colors.gray};
    }

    @media ${({ theme }) => theme.device.mobile} {
        & p {
            font-size: 0.8rem;
        }
    }
`
// http://jsfiddle.net/xwmWK/
// hover before transition
const LinkWrapper = styled.div`
    margin-top: 50px;
    position: relative;
    
     & a {
        display: inline-block;
        color: ${({ theme }) => theme.colors.darkPurple};
        border: 2px solid ${({ theme }) => theme.colors.darkPurple};
        border-radius: 50px;
        padding: 15px 30px;
        
        text-decoration: none;

        overflow: hidden; 
        position: relative;

        &::before{
            content: '';
            background: ${({ theme }) => theme.colors.purple};
            z-index: -1;

            position: absolute;
            top: 0;
            left: 0;
            width: 0px;
            height: 100%;

            transition: all .7s;
            opacity: 0.5;
        }
        &:hover{
            font-weight: 800;

            &::before{
                content: '';
                width: 100%;
                background: ${({ theme }) => theme.colors.purple};
            }
        }

        & + a {
            margin-left: 5px;
        }
     }

     @media ${({ theme }) => theme.device.mobile} {
        & {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        & a {
            width: 50%;
            font-size: 0.9rem;
            text-align: center;
        }
    }
`;
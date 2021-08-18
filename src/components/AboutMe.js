import React from 'react';
import styled from 'styled-components';

function AboutMe() {
    return (
        <Section>
            <div className='wrap-1200 common-group'>
                <h2>
                    <span><b>ABOUT</b> ME</span>
                </h2>
                <TextWrapper className='introduce-text-wrap'>
                    <p class="introduce-title">안녕하세요 :D</p>

                    <p>
                        '깊이 생각하는', '끈기있게 탐구하는', '문서화를 좋아하는'<br />
                        프론트엔드 개발자 오세현입니다
                    </p>

                    <p>
                        저는 프론트엔드 개발자로 현업 경험이 있습니다.<br />
                        각 포지션에 있어서 업무 시, UI 개발에 대한 궁금증,<br />
                        서버와 통신하는 부분의 궁금증이 꼬리를 물고<br />
                        단순히 호기심에서 그치지 않고 공부를 하고 알아감으로서<br />
                        프론트엔드 개발자로 도전할 수 있는 계기가 되었습니다.<br />
                        <br /><br />
                        사용자가 사용하기 편리한 웹서비스를 만들어<br />
                        사람들에게 도움을 주고싶습니다.<br /><br />

                        그러기 위해 구성원으로써 능동적으로 의견을 내고,<br />
                        동료들의 의견을 들어주고 같이 협력할 수 있는 일원이 되길 희망합니다.<br />
                    </p>

                    <div>
                        <button>이력서 바로가기</button>
                        <button>GitHub 바로가기</button>
                    </div>
                </TextWrapper>

                <SkillWraper className='skill-text-wrap' >
                    <SkillText>
                        <strong>Markup</strong>
                        <p>스킬스킬스킬스킬스킬</p>
                    </SkillText>
                    <SkillText>
                        <strong>Markup</strong>
                        <p>스킬스킬스킬스킬스킬</p>
                    </SkillText>
                    <SkillText>
                        <strong>Markup</strong>
                        <p>스킬스킬스킬스킬스킬</p>
                    </SkillText>
                    <SkillText>
                        <strong>Markup</strong>
                        <p>스킬스킬스킬스킬스킬</p>
                    </SkillText>
                    <SkillText>
                        <strong>Markup</strong>
                        <p>스킬스킬스킬스킬스킬</p>
                    </SkillText>
                    <SkillText>
                        <strong>Markup</strong>
                        <p>스킬스킬스킬스킬스킬</p>
                    </SkillText>
                </SkillWraper>
            </div>
        </Section >
    );
}

export default AboutMe;


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
        color: #1d1720;
        flex-basis: 100%;

        & span {
            display: inline-block;
        }
        
        & span::after{
            content: '';
            display: inline-block;
            width: 80%;
            height: 2px;
            margin: 25px auto 0px;
            background: #a2a1dc;
        }
    }

`
const TextWrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    flex-basis: 45%;
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
    line-height: 1.6;
    /* background: tomato; */

    & p:first-child {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1.6rem;
        font-weight: 700;
        color: #514862;

        &::before{
            content: '';
            display: block;
            width: 250px;
            height: 250px;
            position: absolute;
            background: #a2a1dc;
            z-index: -1;
            transform: translate(-50%, -25%);
            border-radius: 50%;
            opacity: 0.25;
        }
    }

    & > p:nth-child(2){
        margin-top: 50px;
        font-size: 1.2rem;
        color: #a2a1dc;

        &::after{
            content: '';
            display: block;
            width: 100px;
            height: 100px;
            position: absolute;
            background: #a2a1dc;
            z-index: -1;
            transform: translate(-150%, -65%);
            border-radius: 50%;
            opacity: 1;
        }
    }

    & > p:nth-child(3){
        margin-top: 50px;
        color: #555555;
    }
`

const SkillWraper = styled.div`
     display: flex;
    flex-flow: row wrap;
    flex-basis: 55%;
    padding: 10px;
    box-sizing: border-box;
`
const SkillText = styled.div`
    width: 50%;
    box-sizing: border-box;
`
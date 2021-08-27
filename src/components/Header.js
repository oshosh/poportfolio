import { useCallback, useEffect, useRef, useState } from 'react';
import { delayletter, delayWord, mainKeywordArray } from '../util/commFunction';

import styled, { css } from 'styled-components';

import Myimg from '../images/lilac-bg.jpg'
import GlobalStyle from './GlobalStyle';

function Header() {
    const mainKeyWord = useRef();
    const ImgBackGroundRef = useRef();

    let [startX, setStartX] = useState(0);
    let [startY, setStartY] = useState(0);

    let [bgPosX, setBgPosX] = useState(0);
    let [bgPosY, setBgPosY] = useState(0);

    let [movePosX, setMovePosX] = useState(0);
    let [movePosY, setMovePosY] = useState(0);

    const onMouseEnter = useCallback((e) => {
        e.currentTarget.style.transition = 'none';
        // 시작 좌표
        setStartX(e.clientX);
        setStartY(e.clientY);

        // background 좌표
        setBgPosX(ImgBackGroundRef.current.offsetTop);
        setBgPosY(ImgBackGroundRef.current.offsetLeft);
    }, [])

    const onMouseMove = useCallback((e) => {
        setMovePosX(e.clientX - startX);
        setMovePosY(e.clientY - startY);

        ImgBackGroundRef.current.style.left = `${bgPosX - movePosX / 40}px`;
        ImgBackGroundRef.current.style.top = `${bgPosY - movePosY / 40}px`;
    }, [bgPosX, bgPosY, movePosX, movePosY, startX, startY])

    const onMouseOut = useCallback((e) => {
        setBgPosX(-100);
        setBgPosY(-100);
        ImgBackGroundRef.current.style.transition = 'all linear 0.3s';
        ImgBackGroundRef.current.style.top = `${bgPosY}px`;
        ImgBackGroundRef.current.style.left = `${bgPosX}px`;
    }, [bgPosX, bgPosY])

    const keywordAnimation = useCallback(async (loopCount = 0) => {
        let textSplit = [];
        let count = 0;

        textSplit = mainKeywordArray.reduce((acc, current) => {
            let obj = [];
            obj.push(current.split(''));
            acc = acc.concat(obj);
            return acc;
        }, [])
        while (loopCount !== textSplit.length && count < textSplit[loopCount].length) {
            // 글자 노출
            await delayletter();
            mainKeyWord.current.append(textSplit[loopCount][count]);

            // 끝나면 초기화
            if (count === textSplit[loopCount].length - 1) {
                await delayWord();

                textSplit.length - 1 === loopCount
                    ? keywordAnimation((loopCount = 0))
                    : keywordAnimation(loopCount + 1);

                mainKeyWord.current.textContent = '';
                return false;
            }
            count++;
        }
    }, [mainKeyWord])

    useEffect(() => {
        keywordAnimation();
    }, [keywordAnimation])


    return (
        <div>
            <GlobalStyle />
            <Main>
                <Img
                    ref={ImgBackGroundRef}
                    img={Myimg}
                    onMouseEnter={onMouseEnter}
                    onMouseMove={onMouseMove}
                    onMouseOut={onMouseOut}
                />
                <h1>
                    안녕하세요!&nbsp;
                    <SpanMainKeyWord a11yHidden={true} >
                        {mainKeywordArray}
                    </SpanMainKeyWord>

                    <SpanMainKeyWord ref={mainKeyWord}></SpanMainKeyWord><br />
                    프론트엔드 개발자 오세현입니다 :D
                </h1>
            </Main>
        </div>
    );
};

export default Header;

/* compontents */
const Main = styled.main`
    font-family: 'Noto Sans KR', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100vh;
    overflow: hidden;
    background: #a2a1dc;
  
    & h1 {
        position: absolute;
        color: #1d1720;
        font-size: 4rem;
        font-weight: 400;
        text-shadow: 0 0 40px #e3d0eb;
        opacity: 0;
        line-height: 1.4;
        text-align: left;
        animation: 0.5s linear 0.5s forwards main-text;
  
        @keyframes main-text {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  `
//img -> div https://stackoverflow.com/questions/8200204/fit-background-image-to-div
const Img = styled.div`
    position: absolute;
    top: -100px;
    left: -100px;
    z-index: 0;
    width: calc(100% + 200px);
    height: calc(100% + 200px);
    
    opacity: 0.9;
    transition: all 0.3s linear 0s;
    
    background-image: url(${props => props.img});
    background-size: cover ;
  `

const SpanMainKeyWord = styled.span`
    padding-right: 5px;
    font-weight: 600;
    animation: 0.1s linear infinite keyword-typing-effect;
  
    ${props => props.a11yHidden &&
        css`
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        clip: rect(0, 0, 0, 0);
        clip-path: polygon(0 0, 0 0, 0 0);
      `
    }
  
    @keyframes keyword-typing-effect {
      0% {
        border-right: 4px solid transparent;
      }
      100% {
        border-right: 4px solid #1d1720;
      }
    }
  `
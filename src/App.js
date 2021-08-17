import { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import './App.css';
import GlobalStyle from './components/GlobalStyle';
import Myimg from './images/lilac-bg.jpg'


function delayletter() {
  return new Promise((resolve) => setTimeout(resolve, 200));
};
function delayWord() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

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

function App() {
  const mainKeyWord = useRef()

  useEffect(() => {
    const mainKeyword = mainKeyWord.current

    const mainKeywordArray = [
      '깊이 생각하는',
      '끈기있게 탐구하는',
      '문서화를 좋아하는',
    ];

    const keywordAnimation = async (loopCount = 0) => {
      let textSplit = [];
      let count = 0;

      textSplit = mainKeywordArray.reduce((acc, current) => {
        let obj = []
        obj.push(current.split(''))
        acc = acc.concat(obj)
        return acc
      }, [])

      while (loopCount !== textSplit.length && count < textSplit[loopCount].length) {
        // 글자 노출
        await delayletter();
        mainKeyword.append(textSplit[loopCount][count]);

        // 끝나면 초기화
        if (count === textSplit[loopCount].length - 1) {
          await delayWord();

          textSplit.length - 1 === loopCount
            ? keywordAnimation((loopCount = 0))
            : keywordAnimation(loopCount + 1);

          mainKeyword.textContent = '';
          return false;
        }
        count++;
      }
    };
    keywordAnimation();
  })

  return (
    <>
      <GlobalStyle />
      <Main>
        <Img img={Myimg} />
        <h1>
          안녕하세요!&nbsp;
          <SpanMainKeyWord a11yHidden={true} >
            '깊이 생각하는', '끈기있게 탐구하는', '문서화를 좋아하는',
          </SpanMainKeyWord>

          <SpanMainKeyWord ref={mainKeyWord}></SpanMainKeyWord><br />
          프론트엔드 개발자 오세현입니다 :D
        </h1>
      </Main>
    </>

  );
}

export default App;

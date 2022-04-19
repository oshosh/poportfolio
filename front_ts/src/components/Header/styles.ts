import styled, { css } from 'styled-components';

import { ImgProps, SpanMainKeyWordProps } from './interface';

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  overflow: hidden;

  ${({ theme }) => {
    const { purple, titleColor } = theme.colors;
    const { mobile } = theme.device;
    return css`
      background: ${purple};

      & h1 {
        position: absolute;
        color: ${titleColor};
        font-size: 3rem;
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

        @media ${mobile} {
          & h1 {
            padding: 0 1rem;
            font-size: 1.3rem;
          }
        }
      }
    `;
  }}
`;

// img -> div https://stackoverflow.com/questions/8200204/fit-background-image-to-div
const Img = styled.div<ImgProps>`
  position: absolute;
  top: -100px;
  left: -100px;
  z-index: 0;
  width: calc(100% + 200px);
  height: calc(100% + 200px);

  opacity: 0.9;
  transition: all 0.3s linear 0s;

  background-image: url(${({ img }) => img});
  background-size: cover;
`;

const SpanMainKeyWord = styled.span<SpanMainKeyWordProps>`
  padding-right: 5px;
  font-weight: 600;

  ${({ a11yHidden, theme }) => {
    if (!a11yHidden) return css``;

    const { titleColor } = theme.colors;
    return css`
      animation: 0.1s linear infinite keyword-typing-effect;
      overflow: hidden;
      position: absolute;
      width: 1px;
      height: 1px;
      clip: rect(0, 0, 0, 0);
      clip-path: polygon(0 0, 0 0, 0 0);

      @keyframes keyword-typing-effect {
        0% {
          border-right: 4px solid transparent;
        }
        100% {
          border-right: 4px solid ${titleColor};
        }
      }
    `;
  }}
`;

export { Img, Main, SpanMainKeyWord };

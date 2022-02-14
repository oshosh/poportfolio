import styled, { css } from 'styled-components';

const MainContainer = styled.main`
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.purple};

  & h1 {
      position: absolute;
      color: ${({ theme }) => theme.colors.titleColor};
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
  }

  @media ${({ theme }) => theme.device.mobile} {
    & h1 {
      padding: 0 1rem;
      font-size: 1.3rem;
    }
  }
`;

export { MainContainer };
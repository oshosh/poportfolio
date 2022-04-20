import styled, { css } from 'styled-components';

const Section = styled.section`
  position: relative;
  z-index: 1;

  & .wrap-1200 {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
  }

  ${({ theme }) => {
    const {
      colors: { titleColor },
      common: { InlineBlockSpanUnderLine },
    } = theme;
    return css`
      & h2 {
        margin: 50px 0;
        font-weight: 400;
        font-size: 2.2rem;
        text-align: center;
        color: ${titleColor};
        flex-basis: 100%;

        & span {
          display: inline-block;
        }

        & span::after {
          ${InlineBlockSpanUnderLine};
        }
      }
    `;
  }}
`;

const IntroduceWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex-basis: 45%;
  padding: 10px;
  box-sizing: border-box;
  text-align: left;
  line-height: 1.6;

  ${({ theme }) => {
    const {
      common: { AboutTitle },
      colors: { purple, gray },
      device: { mobile },
    } = theme;
    return css`
      & p:first-child {
        ${AboutTitle};

        &::before {
          content: '';
          display: block;
          width: 250px;
          height: 250px;
          position: absolute;
          background: ${purple};
          z-index: -1;
          transform: translate(-50%, -25%);
          border-radius: 50%;
          opacity: 0.25;
        }
      }
      & > p:nth-child(2) {
        margin-top: 50px;
        font-size: 1.2rem;
        color: ${purple};

        &::after {
          content: '';
          display: block;
          width: 100px;
          height: 100px;
          position: absolute;
          background: ${purple};
          z-index: -1;
          transform: translate(-150%, -65%);
          border-radius: 50%;
          opacity: 1;
        }
      }
      & > p:nth-child(3) {
        margin-top: 50px;
        color: ${gray};
      }

      @media ${mobile} {
        & {
          flex-basis: 100%;
        }

        & p:first-child {
          font-size: 1.5rem;
        }

        & > p:nth-child(2) {
          font-size: 1rem;
        }

        & > p:nth-child(3) {
          font-size: 0.83rem;
        }
      }
    `;
  }}
`;

const SkillWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-basis: 55%;
  padding: 10px;
  box-sizing: border-box;

  ${({ theme }) => {
    const {
      device: { mobile },
    } = theme;
    return css`
      @media ${mobile} {
        & {
          flex-basis: 100%;
        }
      }
    `;
  }}
`;
const SkillItemBox = styled.div`
  width: 50%;
  box-sizing: border-box;
  padding: 0 10px;

  ${({ theme }) => {
    const {
      device: { mobile },
      common: { AboutTitle },
      colors: { gray },
    } = theme;
    return css`
      & strong {
        display: inline-block;
        ${AboutTitle};
      }

      & p {
        margin-top: 10px;
        font-size: 0.95rem;
        line-height: 1.6;
        color: ${gray};
      }

      @media ${mobile} {
        & p {
          font-size: 0.8rem;
        }
      }
    `;
  }}
`;
// http://jsfiddle.net/xwmWK/
// hover before transition
const LinkWrapper = styled.div`
  margin-top: 50px;
  position: relative;

  ${({ theme }) => {
    const {
      device: { mobile },
      colors: { darkPurple, purple },
    } = theme;
    return css`
      & a {
        display: inline-block;

        color: ${darkPurple};
        border: 2px solid ${darkPurple};
        border-radius: 50px;
        padding: 15px 30px;

        overflow: hidden;
        position: relative;
        &::before {
          content: '';
          background: ${purple};
          z-index: -1;

          position: absolute;
          top: 0;
          left: 0;
          width: 0px;
          height: 100%;

          transition: all 0.7s;
          opacity: 0.5;
        }
        &:hover {
          font-weight: 800;

          &::before {
            content: '';
            width: 100%;
            background: ${purple};
          }
        }

        & + a {
          margin-left: 5px;
        }
      }

      @media ${mobile} {
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
  }}
`;

export { IntroduceWrapper, LinkWrapper, Section, SkillItemBox, SkillWrapper };

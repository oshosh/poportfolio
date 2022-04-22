import styled, { css } from 'styled-components';

const Button = styled.a`
  ${({ theme }) => {
    const {
      colors: { darkPurple, purple },
    } = theme;
    return css`
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
    `;
  }}
`;
export { Button };

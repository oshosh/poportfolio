import styled, { css } from 'styled-components';

const H2 = styled.h2`
  ${({ theme }) => {
    const {
      colors: { titleColor },
      common: { InlineBlockSpanUnderLine },
    } = theme;
    return css`
      & {
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

export { H2 };

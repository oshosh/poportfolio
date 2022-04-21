import styled, { css } from 'styled-components';

const ItemBox = styled.div`
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

export { ItemBox };

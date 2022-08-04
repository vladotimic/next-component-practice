import styled, { css } from 'styled-components';

const fonts = {
  h1: css`
    font-size: 6rem;
  `,
  h2: css`
    font-size: 3.75rem;
  `,
  h3: css`
    font-size: 3rem;
  `,
  h4: css`
    font-size: 2.125rem;
  `,
  h5: css`
    font-size: 1.5rem;
  `,
  h6: css`
    font-size: 1.25rem;
  `,
  p: css`
    font-size: 1rem;
  `,
  span: css`
    font-size: 0.85rem;
  `,
};

const Text = styled.p`
  color: ${(props) => (props.color ? props.color : 'var(--clr-black)')};
  margin: 0;
  ${(props) => props.displayBlock && `display: block`};
  ${(props) => props.center && `text-align: center`};
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`};
  ${(props) => props.as && fonts[props.as]};
  ${(props) => props.size && `font-size: ${props.size}rem`};
  ${(props) => props.toRight && `margin-left: ${props.toRight}`};
  ${(props) => props.toLeft && `margin-right: ${props.toLeft}`};
`;

export default Text;

import styled, { css } from 'styled-components';

const COLOR = {
  primary: css`
    color: #fff;
    background: var(--clr-primary);
  `,
  secondary: css`
    color: #fff;
    background: var(--clr-secondary);
  `,
  gradient: css`
    color: #fff;
    background: var(--bg-gradient);
  `,
};

const HOVER = {
  primary: css`
    color: #fff;
    background: var(--clr-primary-light);
  `,
  secondary: css`
    color: #fff;
    background: var(--clr-secondary-light); ;
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background: #d4d4d4;
  color: #f5f5f5;
`;

const StyledButton = styled.button`
  outline: none;
  border: none;
  border-radius: ${(props) =>
    props.rounded ? `${props.rounded.toString()}` : 'none'};
  ${(props) => props.fullWidth && 'width: 100%'};
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  ${(props) => props.color && COLOR[props.color]}
  ${(props) => props.disabled && DISABLED}

  &:hover {
    ${(props) => props.color && HOVER[props.color]}
  }
`;

export default StyledButton;

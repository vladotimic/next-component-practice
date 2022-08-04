import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  font-size: 0.9rem;
  color: var(--clr-primary);
  ${(props) => props.toRight && `margin-left: ${props.toRight}`};
  ${(props) => props.toLeft && `margin-right: ${props.toLeft}`};

  &:hover {
    text-decoration: underline;
  }
`;

export default Link;

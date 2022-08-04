import styled from 'styled-components';

const Chip = styled.div`
  position: absolute;
  ${(props) => props.top && `top: ${props.top}`};
  ${(props) => props.right && `right: ${props.right}`};
  ${(props) => props.bottom && `bottom: ${props.bottom}`};
  ${(props) => props.left && `left: ${props.left}`};

  background-color: ${(props) =>
    props.bgColor ? props.bgColor : 'var(--clr-primary)'};
  color: ${(props) => (props.color ? props.color : 'var(--clr-white)')};
  border-radius: ${(props) => (props.rounded ? '3px' : 'none')};
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
`;

export default Chip;

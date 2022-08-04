import styled from 'styled-components';

const Container = styled.div``;

const Content = styled.div`
  height: 250px;
  background-color: #f2f3f4;

  ${(props) =>
    props.center &&
    `
    display: flex;
    justify-content: center;
  `};

  ${(props) =>
    props.padding &&
    `
    padding: ${props.padding};
  `};
`;

export { Container, Content };

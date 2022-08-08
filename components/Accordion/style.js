import styled from 'styled-components';

const Container = styled.div``;

const Content = styled.div`
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

  .info {
    width: '600px';
    background: 'white';
    padding: '1rem';

    h5 {
      font-size: '1.2rem';
      color: '#2179b0';
      margin: 0;
    }

    .list {
      display: flex;
      justify-content: space-between;
      padding-top: 0.7rem;
      padding-bottom: 0.7rem;
      border-bottom: solid 1px grey;

      &:last-child {
        border-bottom: none;
      }

      p {
        font-size: 0.8rem;
        font-weight: 700;

        &:last-child {
          font-weight: 400;
        }
      }
    }
  }
`;

export { Container, Content };

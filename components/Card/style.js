import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: ${(props) =>
    props.title ? 'solid 2px var(--clr-dark-blue)' : 'solid 1px #bfbfbf'};
  width: 60rem;

  & .content {
    .list {
      display: flex;
      justify-content: space-between;
      padding-top: 0.7rem;
      padding-bottom: 0.7rem;
      border-bottom: solid 1px grey;
    }

    .list:last-child {
      border-bottom: none;
    }
  }
`;

const Title = styled.div`
  position: absolute;
  top: -15px;
  left: 15px;
  background: ${(props) => (props.title ? 'var(--clr-dark-blue)' : '#bfbfbf')};
  border-radius: 3px;
  padding: 0.1rem 0.5rem;
  font-size: 0.85rem;
  font-weight: 700;
  ${(props) => props.padding && `padding: ${props.padding}`};

  & a {
    color: #fff;
    text-decoration: none;
  }
`;

const Content = styled.div`
  padding: 1rem;

  & .linkBox,
  & .noteBox {
    padding-left: 7.25rem;
  }

  & .noteBox {
    p {
      font-size: 0.75rem;
      color: grey;
    }
  }
`;

const InsuranceDeal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .img-container {
    width: 100%;

    .image {
      object-fit: contain;
      width: 100% !important;
      position: relative !important;
      height: unset !important;
    }
  }

  & .specs {
    display: flex;

    & .specBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 14rem;
      margin-right: 0.25rem;
      margin-left: 0.25rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-top: 0.25rem;
      padding-bottom: 1rem;
      background: #fcf3f8;
      border-bottom: solid 4px #cc6aa0;

      &--small {
        font-size: 0.7rem;
      }

      &--big {
        font-size: 1rem;
        padding-top: 0.5rem;
      }
    }
  }
`;

export { Container, Title, Content, InsuranceDeal };

import styled from 'styled-components';

const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

const Container = styled.div`
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: ${(props) =>
    props.title ? 'solid 2px var(--clr-dark-blue)' : 'solid 1px #bfbfbf'};
  width: 90%;

  @media screen and (min-width: ${breakpoints.lg}) {
    width: 55rem;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    width: 60rem;
  }
`;

const CardTitle = styled.div`
  position: absolute;
  top: -15px;
  background: ${(props) => (props.title ? 'var(--clr-dark-blue)' : '#bfbfbf')};
  border-radius: 3px;
  padding: 0.1rem 0.2rem;
  font-size: 0.75rem;
  font-weight: 700;

  @media screen and (min-width: ${breakpoints.md}) {
    left: 15px;
    padding: 0.1rem 0.3rem;
  }

  @media screen and (min-width: ${breakpoints.lg}) {
    font-size: 0.8rem;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    padding: 0.1rem 0.5rem;
    font-size: 0.85rem;
  }
`;

const CardTitleLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

const Content = styled.div`
  padding: 1rem;
`;

const ContentContainer = styled.div`
  margin-top: 0.5rem;

  @media screen and (min-width: ${breakpoints.md}) {
    margin-top: 0;
  }

  @media screen and (min-width: ${breakpoints.lg}) {
    padding-left: 8rem;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    padding-left: 7.5rem;
  }
`;

const NoteText = styled.p`
  font-size: 0.65rem;
  color: grey;

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 0.7rem;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: 0.75rem;
  }
`;

const InsuranceDeal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
    justify-content: space-around;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ImageContainer = styled.div`
  width: 100px;
`;

const DealBenefits = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    flex-direction: row;
  }
`;

const Deal = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 14rem;
  margin: 0.25rem;
  padding: 0.25rem 0.5rem 1rem 0.5rem;
  background: #fcf3f8;
  border-bottom: solid 4px #cc6aa0;

  @media screen and (min-width: ${breakpoints.md}) {
    width: 9rem;
  }

  @media screen and (min-width: ${breakpoints.lg}) {
    width: 12rem;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    width: 14rem;
  }
`;

const DealSmallText = styled.span`
  font-size: 0.7rem;
`;
const DealBigText = styled.span`
  font-size: 0.85rem;
  padding-top: 0.5rem;

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 0.9rem;
  }

  @media screen and (min-width: ${breakpoints.lg}) {
    font-size: 0.95rem;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: 1.05rem;
  }
`;

const DropdownContent = styled.div`
  background: var(--clr-grey);
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const DealInformation = styled.div`
  background: white;
  width: 600px;
  padding: 1rem;
`;

const DealInfoTitle = styled.h5`
  font-size: 1.125rem;
  color: var(--clr-dark-blue);
  margin: 0;
  margin-bottom: 0.75rem;
`;

const DealInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  border-bottom: solid 1px var(--clr-grey);

  &:last-child {
    border-bottom: none;
  }
`;

const DealInfoName = styled.p`
  font-size: 0.7rem;
  font-weight: 700;

  @media screen and (min-width: ${breakpoints.lg}) {
    font-size: 0.8rem;
  }
`;

const DealInfoValue = styled.p`
  font-size: 0.7rem;

  @media screen and (min-width: ${breakpoints.lg}) {
    font-size: 0.8rem;
  }
`;

export {
  Container,
  CardTitle,
  CardTitleLink,
  Content,
  ContentContainer,
  NoteText,
  InsuranceDeal,
  ImageContainer,
  DealBenefits,
  Deal,
  DealSmallText,
  DealBigText,
  DropdownContent,
  DealInformation,
  DealInfoTitle,
  DealInfo,
  DealInfoName,
  DealInfoValue,
};

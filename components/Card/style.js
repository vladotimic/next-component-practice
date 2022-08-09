import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: ${(props) =>
    props.title ? 'solid 2px var(--clr-dark-blue)' : 'solid 1px #bfbfbf'};
  width: 60rem;
`;

const CardTitle = styled.div`
  position: absolute;
  top: -15px;
  left: 15px;
  background: ${(props) => (props.title ? 'var(--clr-dark-blue)' : '#bfbfbf')};
  border-radius: 3px;
  padding: 0.1rem 0.5rem;
  font-size: 0.85rem;
  font-weight: 700;
`;

const CardTitleLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

const Content = styled.div`
  padding: 1rem;
`;

const ContentContainer = styled.div`
  padding-left: 7.5rem;
`;

const NoteText = styled.p`
  font-size: 0.75rem;
  color: grey;
`;

const InsuranceDeal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 100px;
`;

const DealBenefits = styled.div`
  display: flex;
`;

const Deal = styled.div`
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
`;

const DealSmallText = styled.span`
  font-size: 0.7rem;
`;
const DealBigText = styled.span`
  font-size: 1rem;
  padding-top: 0.5rem;
`;

const Dropdown = styled.div``;

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
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  border-bottom: solid 1px var(--clr-grey);

  &:last-child {
    border-bottom: none;
  }
`;

const DealInfoName = styled.p`
  font-size: 0.85rem;
  font-weight: 700;
`;

const DealInfoValue = styled.p`
  font-size: 0.85rem;
`;

const DropdownButtonContainer = styled.div``;

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
  Dropdown,
  DropdownContent,
  DealInformation,
  DealInfoTitle,
  DealInfo,
  DealInfoName,
  DealInfoValue,
  DropdownButtonContainer,
};

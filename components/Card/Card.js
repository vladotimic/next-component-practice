import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

import {
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
  DealBigText,
  DealSmallText,
  Dropdown,
  DropdownContent,
  DropdownButtonContainer,
  DealInformation,
  DealInfoTitle,
  DealInfo,
  DealInfoName,
  DealInfoValue,
} from './style';
import Link from '../Link';
import Button from '../Button';

const Card = ({
  children,
  data,
  title,
  href,
  hrefTitle,
  imgUrl,
  dealSpecs,
  note,
  eligibility,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Container title={title} {...props}>
      {title && (
        <CardTitle title={title}>
          {href ? (
            <CardTitleLink href={href}>{title}</CardTitleLink>
          ) : (
            { title }
          )}
        </CardTitle>
      )}
      <Content>
        <ContentContainer>
          <Link href={href}>{hrefTitle}</Link>
        </ContentContainer>
        <InsuranceDeal>
          <ImageContainer>
            <Image
              src={imgUrl}
              alt={hrefTitle}
              height="90px"
              width="100%"
              layout="responsive"
              objectFit="contain"
            />
          </ImageContainer>
          <DealBenefits>
            {dealSpecs.map((spec, index) => {
              const { small, big } = spec;
              return (
                <Deal key={index}>
                  <DealSmallText>{small}</DealSmallText>
                  <DealBigText>{big}</DealBigText>
                </Deal>
              );
            })}
          </DealBenefits>
          <Button as="a" href="#" color="gradient" rounded="20rem">
            View deal
          </Button>
        </InsuranceDeal>
        <ContentContainer>
          <NoteText>{note}</NoteText>
        </ContentContainer>
      </Content>
      <Dropdown>
        {isExpanded && (
          <DropdownContent>
            <DealInformation>
              <DealInfoTitle>Eligibility</DealInfoTitle>
              {eligibility.map((item, index) => {
                const { name, value } = item;
                return (
                  <DealInfo key={index}>
                    <DealInfoName>{name}</DealInfoName>
                    <DealInfoValue>
                      {typeof value === 'boolean' && value === true ? (
                        <AiOutlineCheck color="green" />
                      ) : typeof value === 'boolean' && value === false ? (
                        <AiOutlineClose color="red" />
                      ) : (
                        value
                      )}
                    </DealInfoValue>
                  </DealInfo>
                );
              })}
            </DealInformation>
          </DropdownContent>
        )}
        <DropdownButtonContainer>
          <Button
            color="grey"
            p="0.5rem 0"
            fullWidth
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'View less' : 'View more'}
          </Button>
        </DropdownButtonContainer>
      </Dropdown>
    </Container>
  );
};

export default Card;

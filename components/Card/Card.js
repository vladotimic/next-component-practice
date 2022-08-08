import Image from 'next/image';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

import { Container, Title, Content, InsuranceDeal, Info } from './style';
import Accordion from '../Accordion';
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
  const {
    maxPetValue,
    availableOnline,
    ukResident,
    maxCatAged,
    minCatAged,
    maxDogAged,
    minDogAged,
  } = eligibility;

  return (
    <Container title={title} {...props}>
      {title && (
        <Title title={title}>
          {href ? <a href={href}>{title}</a> : { title }}
        </Title>
      )}
      <Content>
        <div className="linkBox">
          <Link href={href}>{hrefTitle}</Link>
        </div>
        <InsuranceDeal>
          <div>
            <Image src={imgUrl} alt={hrefTitle} width={90} height={90} />
          </div>
          <div className="specs">
            {dealSpecs.map((spec, index) => {
              const { small, big } = spec;
              return (
                <div key={index} className="specBox">
                  <span className="specBox--small">{small}</span>
                  <span className="specBox--big">{big}</span>
                </div>
              );
            })}
          </div>
          <div className="dealLink">
            <Button as="a" href="#" color="gradient" rounded="20rem">
              View deal
            </Button>
          </div>
        </InsuranceDeal>
        <div className="noteBox">
          <p>{note}</p>
        </div>
      </Content>
      <Info>
        <Accordion center padding="0.75rem 0">
          <div
            style={{
              width: '600px',
              background: 'white',
              padding: '1rem',
            }}
          >
            <h5
              style={{
                fontSize: '1.2rem',
                color: '#2179b0',
                margin: 0,
              }}
            >
              Eligibility
            </h5>
            <div className="list">
              <p style={{ fontSize: '0.8rem', fontWeight: '700' }}>
                Maximum pet value
              </p>
              <p style={{ fontSize: '0.8rem' }}>{maxPetValue}</p>
            </div>
            <div className="list">
              <p style={{ fontSize: '0.8rem', fontWeight: '700' }}>
                Available online
              </p>
              <p style={{ fontSize: '0.8rem' }}>
                {availableOnline ? (
                  <AiOutlineCheck color="green" />
                ) : (
                  <AiOutlineClose color="red" />
                )}
              </p>
            </div>
            <div className="list">
              <p style={{ fontSize: '0.8rem', fontWeight: '700' }}>
                UK resident
              </p>
              <p style={{ fontSize: '0.8rem' }}>
                {ukResident ? (
                  <AiOutlineCheck color="green" />
                ) : (
                  <AiOutlineClose color="red" />
                )}
              </p>
            </div>
            <div className="list">
              <p style={{ fontSize: '0.8rem', fontWeight: '700' }}>
                Maximum cat aged when cover starts
              </p>
              <p style={{ fontSize: '0.8rem' }}>{maxCatAged}</p>
            </div>
            <div className="list">
              <p style={{ fontSize: '0.8rem', fontWeight: '700' }}>
                Minimum cat aged when cover starts
              </p>
              <p style={{ fontSize: '0.8rem' }}>{minCatAged}</p>
            </div>
            <div className="list">
              <p style={{ fontSize: '0.8rem', fontWeight: '700' }}>
                Maximum dog aged when cover starts
              </p>
              <p style={{ fontSize: '0.8rem' }}>{maxDogAged}</p>
            </div>
            <div className="list">
              <p style={{ fontSize: '0.8rem', fontWeight: '700' }}>
                Minimum dog aged when cover starts
              </p>
              <p style={{ fontSize: '0.8rem' }}>{minDogAged}</p>
            </div>
          </div>
        </Accordion>
      </Info>
    </Container>
  );
};

export default Card;

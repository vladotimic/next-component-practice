import Image from 'next/image';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

import { Container, Title, Content, InsuranceDeal } from './style';
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
      <div>
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
            {eligibility.map((item, index) => {
              const { name, value } = item;
              return (
                <div key={index} className="list">
                  <p style={{ fontSize: '0.8rem', fontWeight: '700' }}>
                    {name}
                  </p>
                  <p style={{ fontSize: '0.8rem' }}>
                    {typeof value === 'boolean' && value === true ? (
                      <AiOutlineCheck color="green" />
                    ) : typeof value === 'boolean' && value === false ? (
                      <AiOutlineClose color="red" />
                    ) : (
                      value
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </Accordion>
      </div>
    </Container>
  );
};

export default Card;

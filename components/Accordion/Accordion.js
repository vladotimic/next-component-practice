import { useState } from 'react';

import { Container, Content } from './style';
import Button from '../Button';

const Accordion = ({ children, center, padding }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Container>
      {isExpanded && (
        <Content center={center} padding={padding}>
          {children}
        </Content>
      )}
      <Button fullWidth onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Show less' : 'Show more'}
      </Button>
    </Container>
  );
};

export default Accordion;

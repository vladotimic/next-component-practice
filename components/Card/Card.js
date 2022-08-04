import { Card } from './style';

const CardComponent = (props) => {
  const {
    children,
    border,
    borderBottom,
    title,
    titleColor,
    background,
    href,
    width,
    flex,
    flexColumn,
    margin,
    padding,
    mt,
    mb,
    mr,
    ml,
    pt,
    pb,
    pr,
    pl,
  } = props;
  return (
    <Card
      border={border}
      borderBottom={borderBottom}
      titleColor={titleColor}
      background={background}
      width={width}
      flex={flex}
      flexColumn={flexColumn}
      margin={margin}
      padding={padding}
      mt={mt}
      mb={mb}
      mr={mr}
      ml={ml}
      pt={pt}
      pb={pb}
      pr={pr}
      pl={pl}
    >
      {title && (
        <div className="title">
          {href ? <a href={href}>{title}</a> : { title }}
        </div>
      )}
      <div className="content">{children}</div>
    </Card>
  );
};

export default CardComponent;

import Text from './StyledText';

const TextComponent = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export default TextComponent;

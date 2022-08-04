import Chip from './StyledChip';

const ChipComponent = ({
  children,
  bgColor,
  color,
  rounded,
  top,
  right,
  bottom,
  left,
}) => {
  return (
    <Chip
      bgColor={bgColor}
      color={color}
      rounded={rounded}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
    >
      {children}
    </Chip>
  );
};

export default ChipComponent;

import StyledButton from './StyledButton';

const Button = ({ children, onClick, color, gradient, rounded, fullWidth }) => {
  return (
    <StyledButton
      color={color}
      gradient={gradient}
      rounded={rounded}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

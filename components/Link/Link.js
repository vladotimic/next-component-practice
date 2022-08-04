import Link from './StyledLink';

const LinkComponent = ({ children, ...props }) => {
  return <Link {...props}>{children}</Link>;
};

export default LinkComponent;

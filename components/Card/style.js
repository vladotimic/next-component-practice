import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  ${(props) => props.flex && `display: flex`};
  ${(props) => props.flexColumn && `display: flex; flex-direction: column`};
  border: ${(props) => (props.border ? props.border : 'solid 1px #bfbfbf')};
  ${(props) => props.borderBottom && `border-bottom: ${props.borderBottom}`};
  ${(props) => props.background && `background: ${props.background}`};
  width: ${(props) => (props.width ? `${props.width}rem` : '600px')};

  & .title {
    position: absolute;
    top: -15px;
    left: 15px;
    background: ${(props) => (props.titleColor ? props.titleColor : '#bfbfbf')};
    border-radius: 3px;
    padding: 0.1rem 0.5rem;
    font-size: 0.85rem;
    font-weight: 700;
    ${(props) => props.padding && `padding: ${props.padding}`};

    & a {
      color: #fff;
      text-decoration: none;
    }
  }

  & .content {
    ${(props) => props.margin && `margin: ${props.margin}`};
    ${(props) => props.mt && `margin-top: ${props.mt}`};
    ${(props) => props.mb && `margin-bottom: ${props.mb}`};
    ${(props) => props.mr && `margin-right: ${props.mr}`};
    ${(props) => props.ml && `margin-left: ${props.ml}`};

    ${(props) => props.padding && `padding: ${props.padding}`};
    ${(props) => props.pt && `padding-top: ${props.pt}`};
    ${(props) => props.pb && `padding-bottom: ${props.pb}`};
    ${(props) => props.pr && `padding-right: ${props.pr}`};
    ${(props) => props.pl && `padding-left: ${props.pl}`};

    .list {
      display: flex;
      justify-content: space-between;
      padding-top: 0.7rem;
      padding-bottom: 0.7rem;
      border-bottom: solid 1px grey;
    }

    .list:last-child {
      border-bottom: none;
    }
  }
`;

export { Card };

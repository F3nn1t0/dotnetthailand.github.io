import React from 'react';
import styled from "@emotion/styled";
import Arrow from 'images/up-arrow.inline.svg'

const scrollToTop = () => window.scrollTo(0,0);

const ScrollTop = styled(({className}) => {
  return (
    <div className={className} onClick={scrollToTop}>
      <Arrow/>
    </div>
  )
})`
background-color: ${props => props.theme.colors.primary};
width: 35px;
height: 35px;
position: fixed;
border-radius: 50px;
bottom: 50px;
right: 50px;
cursor: pointer;
z-index: 10;
transition: ${props => props.theme.transitions.hover};
svg {
  width: 50%;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  path {
    fill: ${props => props.theme.colors.primaryLightest};
  }
}
&:hover {
  background: ${props => props.theme.colors.blueDark};
}
`;

export default ScrollTop;

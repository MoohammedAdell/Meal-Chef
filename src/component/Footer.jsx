import React from "react";
import logo from "../assets/mealschefLogo-black (1).png";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  place-items: center;
  padding: 2rem;
  background-color: #fff;
`;
const LogoContainer = styled.div`
  letter-spacing: 0.5rem;
  text-transform: uppercase;
`;

const Footer = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="Meals Chef" width="60px" height="60px" />
        Meals Chef
      </LogoContainer>
    </Container>
  );
};

export default Footer;

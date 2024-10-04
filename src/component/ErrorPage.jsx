import React from "react";
import styled from "styled-components";
import errorPage from '../assets/pngwing.com.png'

const Container = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 35rem;
    margin-bottom: 1rem;
  }

`;

const ErrorPage = () => {
  return (
    <Container>
      <img src={errorPage} alt="" />
    </Container>
  );
};

export default ErrorPage;

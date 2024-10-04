import React, { useContext } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { MealContext } from "./MealContext";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 83vh;
  padding: 2rem;
`;
const Wrapper = styled.div`
  padding: 0;
  width: 45vw;
  height: 30rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #fff;
  border-radius: 1.5rem;
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 30rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

const IgredientsConatiner = styled.div`
  height: 25rem;
  overflow-y: scroll;
  padding: 0 1rem;
  margin-bottom: 1rem;
  line-height: 2.5;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: #e6e4df;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #debb64;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

const MealDetails = () => {
  const { handelOrderAndPrice } = useContext(MealContext);
  const location = useLocation();
  const { meal } = location.state;

  return (
    <Container>
      <Wrapper
        as={motion.div}
        initial={{ x: -50 }}
        animate={{ x: 0, transition: { duration: 0.8 } }}
      >
        {meal.mealPictures.length > 1 ? (
          <Carousel showIndicators={false} autoPlay infiniteLoop>
            {meal.mealPictures &&
              meal.mealPictures.map((picture, i) => (
                <ImgContainer key={i}>
                  <img src={picture.mealPicture} alt="meal chef" />
                </ImgContainer>
              ))}
          </Carousel>
        ) : (
          <h1
            style={{
              textAlign: "center",
              display: "grid",
              placeItems: "center",
              height: "inherit",
              color: "gray",
            }}
          >
            NO PICTURES FOUND
          </h1>
        )}
      </Wrapper>
      <Wrapper
        as={motion.div}
        initial={{ x: +50 }}
        animate={{ x: 0, transition: { duration: 0.8 } }}
      >
        <div style={{ padding: "0.5rem 1rem 0" }}>
          <h3>Ingredients</h3>
          <h6 style={{ color: "gray" }}>{meal.strMeal}</h6>
        </div>

        <IgredientsConatiner>
          <ul>
            {meal.ingredients &&
              meal.ingredients.map((singleIngredient, i) => (
                <li key={i}>{singleIngredient.ingredient}</li>
              ))}
          </ul>
        </IgredientsConatiner>
        <Button
          variant="warning"
          style={{
            width: "100%",
            height: "2.3rem",
            marginTop: "0.7rem",
            fontWeight: "bolder",
            borderRadius: "2rem",
          }}
          onClick={() => handelOrderAndPrice(meal.price)}
        >
          Order Now $ {meal.price}
        </Button>
      </Wrapper>
    </Container>
  );
};

export default MealDetails;

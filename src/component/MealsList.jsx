/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import styled from "styled-components";
import Meal from "./Meal";
import { motion } from "framer-motion";
import { MealContext } from "./MealContext";

const Container = styled.div`
  padding: 2rem;
  display: grid;
  place-items: center;
`;
const Title = styled.h3`
  text-align: left;
  margin-bottom: 2rem;
  color: rgb(44, 46, 46);
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 1rem;
  justify-content: space-evenly;
  align-items: center;
`;
const MealsList = () => {
  const { allMeans } = useContext(MealContext);

  const allMealsList = allMeans.map((meal) => (
    <Meal key={meal.idMeal} meal={meal} />
  ));

  return (
    <Container>
      <Title
        as={motion.h3}
        initial={{ y: -30 }}
        animate={{ y: 0, transition: { duration: 0.7 } }}
      >
        Suggested For You
      </Title>
      <Wrapper>{allMealsList}</Wrapper>
    </Container>
  );
};

export default MealsList;

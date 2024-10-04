import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import { FaSearch, FaRegEdit, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MealContext } from "./MealContext";
import { motion } from "framer-motion";

const Info = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 20rem;
  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
  }
`;
const NewTag = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.2rem 0.5rem;
  border-radiuse: 0.5rem;
  font-weight: bold;
  background-color: rgb(255, 227, 17);
`;
const UpdateTag = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.2rem 0.5rem;
  border-radiuse: 0.5rem;
  font-weight: bold;
  background-color: #3c4a5b;
  color: white;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.5s ease;

  a {
    color: #000;
  }

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Meal = ({ meal }) => {
  const { deleteMeal } = useContext(MealContext);
  return (
    <Container>
      <Card
        style={{
          width: "22rem",
          height: "27rem",
          boxShadow: "rgba(99,99,99,0.2) 0px 2px 8px 0px",
          textAlign: "center",
          borderRadius: "2rem",
          marginBottom: "2rem",
        }}
      >
        {meal.isNew ? (
          <NewTag>NEW</NewTag>
        ) : (
          meal.iaUpdate && <UpdateTag>UPDATE</UpdateTag>
        )}

        <Info>
          <Icon
            as={motion.div}
            initial={{ x: -50 }}
            animate={{ x: 0, transition: { duration: 0.7 } }}
          >
            <Link to={`/mealDetails/${meal.strMeal}`} state={{ meal }}>
              <FaSearch />
            </Link>
          </Icon>
          <Icon>
            <Link to={`/editMeal/${meal.strMeal}`} state={{ meal }}>
              <FaRegEdit />
            </Link>
          </Icon>
          <Icon
            as={motion.div}
            initial={{ x: +50 }}
            animate={{ x: 0, transition: { duration: 0.7 } }}
          >
            <FaTimes onClick={() => deleteMeal(meal.idMeal, meal.strMeal)} />
          </Icon>
        </Info>
        <ImgContainer>
          <Card.Img variant="top" src={meal.strMealThumb} />
        </ImgContainer>
        <Card.Body style={{ padding: "0" }}>
          <Card.Title style={{ height: "3rem", padding: "1rem 0" }}>
            {meal.strMeal}
          </Card.Title>
          <Card.Text
            style={{ color: "red", fontWeight: "bold", fontSize: "larger" }}
          >
            $ {meal.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Meal;

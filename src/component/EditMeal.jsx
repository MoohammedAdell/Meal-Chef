/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import DefaultImg from "../assets/defaultMealImg.jpg";
import { Carousel } from "react-responsive-carousel";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import {
  Container,
  Left,
  Center,
  Right,
  ThumpImgContainer,
  List,
  ListItem,
  Wrapper,
  ImgContainer,
} from "./style/Forms.style";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { MealContext } from "./MealContext";

const EditMeal = () => {
  const { updateMeal } = useContext(MealContext);
  const location = useLocation();
  const { meal } = location.state;
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      strMeal: meal.strMeal,
      price: meal.price,
      strMealThumb: meal.strMealThumb,
      ingredients: meal.ingredients,
      mealPictures: meal.mealPictures,
      idMeal: meal.idMeal,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "mealPictures",
  });
  const {
    fields: ingredientsFields,
    append: ingredientsAppend,
    remove: ingredientsRemove,
  } = useFieldArray({
    control,
    name: "ingredients",
  });

  const onSubmit = (data) => {
    let updatedMeal = {
      idMeal: meal.idMeal,
      isNew: false,
      iaUpdate: true,
      ...data,
    };

    updateMeal(updatedMeal);
    Swal.fire("Meal Updated", "Successfull", "success");
    navigate("/", { replace: true });
    // console.log(data);
    // console.log(newMeal);
  };
  const imgMeal = watch("strMealThumb") ? watch("strMealThumb") : DefaultImg;
  const impPics = watch("mealPictures");
  const ingredients = watch("ingredients");

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Left
            as={motion.div}
            initial={{ x: -50 }}
            animate={{ x: 0, transition: { duration: 0.8 } }}
          >
            <h2 className="mb-3 text-left ">Update Meal</h2>

            <Form.Group className="mb-3" controlId="mealName">
              <Form.Label>Name Meal</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name Meal"
                {...register("strMeal", {
                  required: "is  required",
                })}
              />
              <span>{errors.strMeal?.message}</span>
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Meal Price"
                {...register("price", {
                  required: "is  required",
                  min: {
                    value: 1,
                    message: "Price must be greater than 1$",
                  },
                })}
              />
              <span>{errors.price?.message}</span>
            </Form.Group>

            <Form.Group className="mb-3" controlId="mealThump">
              <Form.Label>Meal Thump</Form.Label>
              <Form.Control
                type="url "
                placeholder="Enter Meal Pictur Thump"
                {...register("strMealThumb", {
                  required: "is  required",
                  pattern: {
                    value: /(https?:\/\/.*\.(?:png|jpg|gif|jpeg))/,
                    message: "Supported Image urls are  .png, .jpg, .gif",
                  },
                })}
              />
              <span>{errors.strMealThumb?.message}</span>
            </Form.Group>

            <Form.Group className="mb-3" controlId="mealThump">
              <Form.Label>Meal Picture(s)</Form.Label>
              <div className="multipulControlsContainer">
                <List>
                  {fields.map((item, index) => {
                    return (
                      <ListItem key={item.id}>
                        <Form.Control
                          type="url "
                          placeholder="New Picture.."
                          {...register(`mealPictures.${index}.mealPicture`, {
                            required: true,
                          })}
                        />
                        <FaTrashAlt
                          className="iTrash"
                          onClick={() => remove({ index })}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </div>
              <FaPlus
                onClick={() => append({ mealPicture: "" })}
                style={{
                  fontSize: "1.3rem",
                  margin: "0 0 10px 10px",
                  color: "rgb(150,140,18)",
                  cursor: "pointer",
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="mealThump">
              <Form.Label>Meal Ingredients(s)</Form.Label>
              <div className="multipulControlsContainer">
                <List>
                  {ingredientsFields.map((item, index) => {
                    return (
                      <ListItem key={item.id}>
                        <Form.Control
                          type="text"
                          placeholder="New Ingredients.."
                          {...register(`ingredients.${index}.ingredient`, {
                            required: true,
                          })}
                        />
                        <FaTrashAlt
                          className="iTrash"
                          onClick={() => ingredientsRemove({ index })}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </div>
              <FaPlus
                onClick={() => ingredientsAppend({ ingredient: "" })}
                style={{
                  fontSize: "1.3rem",
                  margin: "0 0 10px 10px",
                  color: "rgb(150,140,18)",
                  cursor: "pointer",
                }}
              />
            </Form.Group>
          </Left>
          <Center>
            <h4>Ingredients</h4>
            {ingredients.length >= 1 && (
              <ul>
                {ingredients.map((ingredOne, i) => (
                  <li key={i}>{ingredOne.ingredient}</li>
                ))}
              </ul>
            )}
          </Center>
          <Right
            as={motion.div}
            initial={{ x: +50 }}
            animate={{ x: 0, transition: { duration: 0.8 } }}
          >
            <ThumpImgContainer>
              <img src={imgMeal} alt="Thumbnail" />
            </ThumpImgContainer>
            {impPics.length >= 1 && (
              <Wrapper>
                <Carousel
                  showIndicators={false}
                  showArrows={false}
                  autoPlay
                  infiniteLoop
                >
                  {impPics.map((singleMealPic, i) => (
                    <ImgContainer key={i}>
                      <img src={singleMealPic.mealPicture} alt="" />
                    </ImgContainer>
                  ))}
                </Carousel>
              </Wrapper>
            )}
            <Button
              variant="primary"
              type="submit"
              style={{
                marginBottom: "16px",
                backgroundColor: "#53CBF0",
                border: "none",
              }}
            >
              UPDATE
            </Button>
            <Button
              as={Link}
              to="/"
              style={{ width: "100%" }}
              variant="outline-secondary"
            >
              Cancel
            </Button>
          </Right>
        </Container>
      </Form>

      <DevTool control={control} />
    </>
  );
};

export default EditMeal;

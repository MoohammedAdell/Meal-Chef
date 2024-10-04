/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";
import { meals } from "../mealsData.js";
import Swal from "sweetalert2";

// 1- initializing Context
export const MealContext = createContext();

// 2- Providing Context

export const MealProvider = (props) => {
  const [allMeans, setAllMeans] = useState(meals);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handelOrderAndPrice = (price) => {
    setTotalPrice((totalPrice) => totalPrice + price);
    setTotalOrders((totalOrders) => totalOrders + 1);
  };
  const addNewMeal = (newMeal) => {
    setAllMeans((prevMeals) => [newMeal, ...prevMeals]);
  };
  const updateMeal = (updateMeal) => {
    const filterMeals = allMeans.filter(
      (meal) => meal.id !== updateMeal.idMeal
    );
    setAllMeans([updateMeal, ...filterMeals]);
  };

  const deleteMeal = (id, mealTitle) => {
    Swal.fire({
      title: "Want To Delete The Meal?",
      text: mealTitle,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const filterMeals = allMeans.filter((meal) => meal.idMeal !== id);
        setAllMeans(filterMeals);
        Swal.fire({
          title: "Deleted!",
          text: `${mealTitle} Meal has been deleted.`,
          icon: "success",
        });
      }
    });
  };
  return (
    <MealContext.Provider
      value={{
        allMeans,
        totalOrders,
        totalPrice,
        handelOrderAndPrice,
        addNewMeal,
        updateMeal,
        deleteMeal,
      }}
    >
      {props.children}
    </MealContext.Provider>
  );
};

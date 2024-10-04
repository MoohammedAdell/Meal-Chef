/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import NavBar from "./NavBar";
import MealsList from "./MealsList";
import Footer from "./Footer.jsx";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import MealDetails from "./MealDetails.jsx";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";
import NewMeal from "./NewMeal.jsx";
import EditMeal from "./EditMeal.jsx";
import { MealContext } from "./MealContext.js";

const Home = () => {
  const { totalOrders } = useContext(MealContext);
  useEffect(() => {
    if (totalOrders >= 1) {
      Swal.fire({
        title: "Thank You for Placing The order",
        text: "",
        icon: "success",
      });
    }
  }, [totalOrders]);

  return (
    <div
      style={{
        backgroundColor: "  rgba(170, 247, 255, 0.1)",
      }}
    >
      <NavBar />

      <Routes>
        <Route path="/" element={<MealsList />} />
        <Route path="/mealDetails/:mealTitle" element={<MealDetails />} />
        <Route path="/newMeal" element={<NewMeal />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/editMeal/:mealTitle" element={<EditMeal />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Home;

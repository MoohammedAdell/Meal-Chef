import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import Brand from "../assets/mealschefLogo.png";
import { FaCartShopping } from "react-icons/fa6";
import { motion } from "framer-motion";
import Badge from "react-bootstrap/Badge";
import { FaWallet } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { MealContext } from "./MealContext";

const NavContainer = styled.div`
  a {
    color: white !important;
    margin-right: 2rem;
    padding: 1rem;
    font-size: x-large;
  }
  a:hover {
    color: rgb(255, 227, 17) !important;
  }
  img {
    width: 60px;
    height: 60px;
  }
  #brand {
    color: #ffca2c !important;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
  }
  .icon {
    border: 2px solid #fff;
    padding: 0.5rem;
    font-size: 3rem;
    border-radius: 1rem;
  }
  .badge-icon {
    transform: translate(-1rem, -1rem);
    height: max-content;
  }
  .collapse {
    color: white !important;
    z-index: 100;
  }
  .active {
    color: rgb(255, 227, 17) !important;
    font-weight: bold;
  }
`;
const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 42rem;
  .icon {
    color: #fff !important;
  }
`;
const NavBar = () => {
  const { totalOrders, totalPrice } = useContext(MealContext);
  return (
    <NavContainer
      as={motion.div}
      initial={{ y: -50 }}
      animate={{ y: 0, transition: { duration: 0.7 } }}
    >
      <Navbar expand="lg" className="bg-black">
        <Container>
          <Navbar.Brand>
            <NavLink to="/" id="brand">
              <img src={Brand} alt="Meals Chef Logo" />
              Meals Chef
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="collapse" id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/newMeal">
                Add New
              </Nav.Link>
              <Nav.Link>
                <IconsContainer>
                  <FaCartShopping className="icon" />
                  <Badge pill bg="info" className="badge-icon">
                    {totalOrders}
                  </Badge>
                  <FaWallet className="icon" />
                  <Badge pill bg="info" className="badge-icon">
                    $ {totalPrice}
                  </Badge>
                </IconsContainer>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavContainer>
  );
};

export default NavBar;

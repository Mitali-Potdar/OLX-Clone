import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ActivationEmail from "./auth/ActivationEmail";
import NotFound from "../utils/NotFound/NotFound";
import ForgotPass from "../body/auth/ForgotPassword";
import ResetPass from "../body/auth/ResetPassword";
import Profile from "../body/profile/Profile";
import Home from "../body/home/Home";
import AllProducts from "../productpage/allProducts";
import Product from "../productpage/ProductPage";
import { useSelector } from "react-redux";

function Body() {
  const auth = useSelector((state) => state.auth);
  const { isLogged } = auth;
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route
        path="/login"
        element={
          isLogged ? <NotFound msg="You are already logged in!" /> : <Login />
        }
        exact
      />
      <Route
        path="/register"
        element={
          isLogged ? (
            <NotFound msg="You are already logged in!" />
          ) : (
            <Register />
          )
        }
        exact
      />

      <Route
        path="/forgot_password"
        element={
          isLogged ? (
            <NotFound msg="You are already logged in!" />
          ) : (
            <ForgotPass />
          )
        }
        exact
      />
      <Route
        path="/user/reset/:token"
        element={
          isLogged ? (
            <NotFound msg="You are already logged in!" />
          ) : (
            <ResetPass />
          )
        }
        exact
      />

      <Route
        path="/user/activate/:activation_token"
        element={<ActivationEmail />}
        exact
      />

      <Route
        path="/profile"
        element={
          isLogged ? (
            <Profile />
          ) : (
            <NotFound msg="Please Login to your account." />
          )
        }
        exact
      />

      <Route path="/products" element={<AllProducts />} exact />
      <Route exact path="/products/:category" element={<AllProducts />} />
      <Route exact path="/product/:id" element={<Product />} />
    </Routes>
  );
}

export default Body;

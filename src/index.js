import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

import LoginPage from "./pages/login-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginProvider } from "./components/LoginProvider";
import HomePage from "./pages/home-page";
import CreateAccountPage from "./pages/create-account-page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </LoginProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

import LoginPage from "./pages/login-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginProvider } from "./contexts/LoginProvider";
import HomePage from "./pages/home-page";
import CreateAccountPage from "./pages/create-account-page";
import { ApplicationContextProvider } from "contexts/ApplicationContext/useApplicationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <ChakraProvider>
        <ApplicationContextProvider>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/create-account" element={<CreateAccountPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </BrowserRouter>
        </ApplicationContextProvider>
      </ChakraProvider>
    </LoginProvider>
  </React.StrictMode>
);

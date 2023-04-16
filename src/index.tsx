import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalStyles, Layout, Header } from "./components";

import MainPage from "./pages/main";
import InstalationPage from "./pages/instalation";
import ProviderPage from "./pages/provider";
import FormPage from "./pages/form";
import FormCustomItemPage from "./pages/form/custom-item";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <MainPage />
            </Layout>
          }
        />
        <Route
          path="/instalation"
          element={
            <Layout>
              <InstalationPage />
            </Layout>
          }
        />
        <Route
          path="/provider"
          element={
            <Layout>
              <ProviderPage />
            </Layout>
          }
        />
        <Route
          path="/form"
          element={
            <Layout>
              <FormPage />
            </Layout>
          }
        />
        <Route
          path="/form/custom-item"
          element={
            <Layout>
              <FormCustomItemPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
    <GlobalStyles />
  </React.StrictMode>
);

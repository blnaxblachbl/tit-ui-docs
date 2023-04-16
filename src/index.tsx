import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalStyles, Layout, Header } from "./components";

import MainPage from "./pages/main";
import InstalationPage from "./pages/instalation";
import ProviderPage from "./pages/provider";
import FormPage from "./pages/form";
import FormCustomItemPage from "./pages/form/custom-item";
import AvatarPage from "./pages/avatar";
import BadgePage from "./pages/badge";
import ButtonPage from "./pages/button";
import FlatListPage from "./pages/flatList";
import ImagePage from "./pages/image";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router basename="/tit-ui-docs">
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
        <Route
          path="/avatar"
          element={
            <Layout>
              <AvatarPage />
            </Layout>
          }
        />
        <Route
          path="/badge"
          element={
            <Layout>
              <BadgePage />
            </Layout>
          }
        />
        <Route
          path="/button"
          element={
            <Layout>
              <ButtonPage />
            </Layout>
          }
        />
        <Route
          path="/flatlist"
          element={
            <Layout>
              <FlatListPage />
            </Layout>
          }
        />
        <Route
          path="/image"
          element={
            <Layout>
              <ImagePage />
            </Layout>
          }
        />
      </Routes>
    </Router>
    <GlobalStyles />
  </React.StrictMode>
);

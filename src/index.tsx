import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalStyles, Layout, Header } from "./components";

import MainPage from "./pages/main";
import InstalationPage from "./pages/instalation";
import ProviderPage from "./pages/provider";
import FormPage from "./pages/form";
import FormCustomItemPage from "./pages/custom-form-item";
import AvatarPage from "./pages/avatar";
import BadgePage from "./pages/badge";
import ButtonPage from "./pages/button";
import FlatListPage from "./pages/flatList";
import ImagePage from "./pages/image";
import InputPage from "./pages/input";
import PickerPage from "./pages/picker";
import RadioPage from "./pages/radio";
import SliderPage from "./pages/slider";
import SwitchPage from "./pages/switch";
import TagPage from "./pages/tag";
import ToastPage from "./pages/toast";
import HexToRgbaPage from "./pages/hexToRgba";
import NormalizePage from "./pages/normalize";
import ThemesPage from "./pages/themes";

import "react-modern-drawer/dist/index.css";

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
          path="/custom-form-item"
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
        <Route
          path="/input"
          element={
            <Layout>
              <InputPage />
            </Layout>
          }
        />
        <Route
          path="/picker"
          element={
            <Layout>
              <PickerPage />
            </Layout>
          }
        />
        <Route
          path="/radio-button"
          element={
            <Layout>
              <RadioPage />
            </Layout>
          }
        />
        <Route
          path="/slider"
          element={
            <Layout>
              <SliderPage />
            </Layout>
          }
        />
        <Route
          path="/switch"
          element={
            <Layout>
              <SwitchPage />
            </Layout>
          }
        />
        <Route
          path="/tag"
          element={
            <Layout>
              <TagPage />
            </Layout>
          }
        />
        <Route
          path="/toast"
          element={
            <Layout>
              <ToastPage />
            </Layout>
          }
        />
        <Route
          path="/hex-to-rgba"
          element={
            <Layout>
              <HexToRgbaPage />
            </Layout>
          }
        />
        <Route
          path="/normalize"
          element={
            <Layout>
              <NormalizePage />
            </Layout>
          }
        />
        <Route
          path="/themes"
          element={
            <Layout>
              <ThemesPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
    <GlobalStyles />
  </React.StrictMode>
);

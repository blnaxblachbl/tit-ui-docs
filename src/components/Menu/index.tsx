import { Link } from "react-router-dom";
import styled from "styled-components";

import { ButtonProps, MenuProps } from "./types";

const Container = styled.div`
  padding: 12px 0;
  background-color: whitesmoke;
  box-sizing: border-box;

  a {
    text-decoration: none;
    color: #262c36;
  }

  .subtitle {
    width: 100%;
    padding: 12px;
    color: #959595;
    box-sizing: border-box;
    border-bottom: solid 1px whitesmoke;
  }
`;

const Button = styled.div<ButtonProps>`
  width: 100%;
  padding: 12px 24px;
  box-sizing: border-box;
  color: #000;
  background-color: ${({ selected }) => (selected ? "#282c34" : undefined)};
  color: ${({ selected }) => (selected ? "#fff" : undefined)};
`;

export const Manu = ({ toggleDrawer }: MenuProps) => {
  const page = window.location.pathname.replace("/docs", "");

  return (
    <Container>
      <div className="subtitle">General</div>
      <Link to="/">
        <Button onClick={toggleDrawer} selected={page === "" || page === "/"}>
          Introduction
        </Button>
      </Link>
      <Link to="/instalation">
        <Button onClick={toggleDrawer} selected={page === "/instalation"}>
          Instalation
        </Button>
      </Link>
      <div className="subtitle">Components</div>
      <Link to="/provider">
        <Button onClick={toggleDrawer} selected={page === "/provider"}>
          Provider
        </Button>
      </Link>
      <Link to="/form">
        <Button onClick={toggleDrawer} selected={page.includes("/form")}>
          Form
        </Button>
      </Link>
      <Link to="/avatar">
        <Button onClick={toggleDrawer} selected={page === "/avatar"}>
          Avatar
        </Button>
      </Link>
      <Link to="/badge">
        <Button onClick={toggleDrawer} selected={page === "/badge"}>
          Badge
        </Button>
      </Link>
      <Link to="/button">
        <Button onClick={toggleDrawer} selected={page === "/button"}>
          Button
        </Button>
      </Link>
      <Link to="/flatlist">
        <Button onClick={toggleDrawer} selected={page === "/flatlist"}>
          FlatList
        </Button>
      </Link>
      <Link to="/image">
        <Button onClick={toggleDrawer} selected={page === "/image"}>
          Image
        </Button>
      </Link>
      <Link to="/input">
        <Button onClick={toggleDrawer} selected={page === "/input"}>
          Input
        </Button>
      </Link>
      <Link to="/picker">
        <Button onClick={toggleDrawer} selected={page === "/picker"}>
          Picker
        </Button>
      </Link>
      <Link to="/radio-button">
        <Button onClick={toggleDrawer} selected={page === "/radio-button"}>
          Radio Button
        </Button>
      </Link>
      <Link to="/slider">
        <Button onClick={toggleDrawer} selected={page === "/slider"}>
          Slider
        </Button>
      </Link>
      <Link to="/switch">
        <Button onClick={toggleDrawer} selected={page === "/switch"}>
          Switch
        </Button>
      </Link>
      <Link to="/tag">
        <Button onClick={toggleDrawer} selected={page === "/tag"}>
          Tag
        </Button>
      </Link>
      <Link to="/toast">
        <Button onClick={toggleDrawer} selected={page === "/toast"}>
          Toast
        </Button>
      </Link>
      <div className="subtitle">Functions</div>
      <Link to="/hex-to-rgba">
        <Button onClick={toggleDrawer} selected={page === "/hex-to-rgba"}>
          Hex to RGBA
        </Button>
      </Link>
      <Link to="/normalize">
        <Button onClick={toggleDrawer} selected={page === "/normalize"}>
          Noramalize
        </Button>
      </Link>
      <div className="subtitle">Theme</div>
      <Link to="/themes">
        <Button onClick={toggleDrawer} selected={page === "/themes"}>
          Themes
        </Button>
      </Link>
      <div className="subtitle">Hooks</div>
      <Link to="/styles">
        <Button onClick={toggleDrawer} selected={page === "/styles"}>
          Styles in Props
        </Button>
      </Link>
    </Container>
  );
};

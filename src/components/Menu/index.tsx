import { Link } from "react-router-dom";
import styled from "styled-components";

import { ButtonProps } from "./types";

const Container = styled.div`
  height: calc(100vh - 70px);
  padding: 12px 0;
  background-color: whitesmoke;
  box-sizing: border-box;
  overflow-y: scroll;

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
  padding: 12px;
  box-sizing: border-box;
  color: #000;
  background-color: ${({ selected }) => (selected ? "#262c36" : undefined)};
  color: ${({ selected }) => (selected ? "#fff" : undefined)};
`;

export const Manu = () => {
  const page = window.location.pathname;

  return (
    <Container>
      <div className="subtitle">General</div>
      <Link to="/">
        <Button selected={page === "/"}>Introduction</Button>
      </Link>
      <Link to="/instalation">
        <Button selected={page === "/instalation"}>Instalation</Button>
      </Link>
      <div className="subtitle">Components</div>
      <Link to="/provider">
        <Button selected={page === "/provider"}>Provider</Button>
      </Link>
      <Link to="/form">
        <Button selected={page === "/form"}>Form</Button>
      </Link>
      <Link to="/avatar">
        <Button selected={page === "/avatar"}>Avatar</Button>
      </Link>
      <Link to="/badge">
        <Button selected={page === "/badge"}>Badge</Button>
      </Link>
      <Link to="/button">
        <Button selected={page === "/button"}>Button</Button>
      </Link>
      <Link to="/flatlist">
        <Button selected={page === "/flatlist"}>FlatList</Button>
      </Link>
      <Link to="/image">
        <Button selected={page === "/image"}>Image</Button>
      </Link>
      <Link to="/input">
        <Button selected={page === "/input"}>Input</Button>
      </Link>
      <Link to="/picker">
        <Button selected={page === "/picker"}>Picker</Button>
      </Link>
      <Link to="/radio-button">
        <Button selected={page === "/radio-button"}>Radio Button</Button>
      </Link>
      <Link to="/slider">
        <Button selected={page === "/slider"}>Slider</Button>
      </Link>
      <Link to="/switch">
        <Button selected={page === "/switch"}>Switch</Button>
      </Link>
      <Link to="/tag">
        <Button selected={page === "/tag"}>Tag</Button>
      </Link>
      <Link to="/toast">
        <Button selected={page === "/toast"}>Toast</Button>
      </Link>
    </Container>
  );
};

import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 70px);
  padding: 12px 0;
  position: sticky;
  background-color: whitesmoke;
  box-sizing: border-box;

  a {
    text-decoration: none;
    color: #262c36;
  }

  .link-button {
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    color: #000;
  }
  .subtitle {
    width: 100%;
    padding: 12px;
    color: #959595;
    box-sizing: border-box;
    border-bottom: solid 1px whitesmoke;
  }
`;

export const Manu = () => {
  return (
    <Container>
      <div className="subtitle">General</div>
      <Link to="/">
        <div className="link-button">Introduction</div>
      </Link>
      <Link to="/instalation">
        <div className="link-button">Instalation</div>
      </Link>
      <Link to="/provider">
        <div className="link-button">Provider</div>
      </Link>
      <Link to="/form">
        <div className="link-button">Form</div>
      </Link>
      <div className="subtitle">UI components</div>
      <Link to="/switch">
        <div className="link-button">Switch</div>
      </Link>
      <Link to="/input">
        <div className="link-button">Input</div>
      </Link>
    </Container>
  );
};

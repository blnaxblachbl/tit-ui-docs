import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.header`
  display: flex;
  height: 70px;
  background-color: #282c34;
  align-items: center;
  justify-content: space-between;
  color: #ebebeb;
  padding: 0 24px;

  .logo {
    font-family: "Quicksand", sans-serif;
    font-weight: 700;
    font-size: 21px;
    margin-right: 12px;
  }

  a {
    text-decoration: none;
    color: #ebebeb;
  }
`;

export const Header = () => {
  return (
    <Container>
      <Link to={"/"}>
        <span className="logo">{"{ . }"}</span>TIT-UI
      </Link>
    </Container>
  );
};

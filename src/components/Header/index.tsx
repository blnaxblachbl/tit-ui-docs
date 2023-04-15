import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.header`
  display: flex;
  height: 70px;
  background-color: #262c36;
  align-items: center;
  justify-content: space-between;
  color: #ebebeb;
  padding: 0 24px;

  a {
    text-decoration: none;
    color: #ebebeb;
  }
`;

export const Header = () => {
  return (
    <Container>
      <Link to={"/"}>TIT-UI</Link>
    </Container>
  );
};

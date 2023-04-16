import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";

import { Manu } from "../Menu";

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
  .button {
    padding: 0;
    background-color: transparent;
    border: none;
    color: #ebebeb;
    display: none;
  }
  @media (max-width: 1000px) {
    .button {
      display: block;
    }
    .link {
      display: none;
    }
  }
`;

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Container>
        <Link className="link" to={"/"}>
          <span className="logo">{"{ . }"}</span>TIT-UI
        </Link>
        <button className="button" onClick={toggleDrawer}>
          <span className="logo">{"{ . }"}</span>TIT-UI
        </button>
      </Container>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        lockBackgroundScroll
        style={{ overflow: "scroll" }}
      >
        <Manu toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
};

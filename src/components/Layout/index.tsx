import { useEffect } from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";

import { Manu } from "../Menu";
import { LayoutProps } from "./types";

import { useRouteQuery } from "../../utils/hooks";

const Container = styled.div`
  display: flex;
  padding: 12;
  box-sizing: border-box;
  .left {
    width: 18%;
    overflow-y: scroll;
    height: calc(100vh - 70px);
  }
  .right {
    width: 82%;
    overflow-y: scroll;
    height: calc(100vh - 70px);
    padding: 24px;
    box-sizing: border-box;
  }
  @media (max-width: 1000px) {
    .left {
      display: none;
    }
    .right {
      padding: 12px;
      width: 100%;
    }
  }
`;

export const Layout = ({ children }: LayoutProps) => {
  const { page } = useRouteQuery();

  if (page) {
    return <Navigate to={`/${page}`} />;
  }

  return (
    <Container>
      <div className="left">
        <Manu />
      </div>
      <div className="right">{children}</div>
    </Container>
  );
};

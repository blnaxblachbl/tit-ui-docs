import styled from "styled-components";

import { Manu } from "../Menu";
import { LayoutProps } from "./types";

const Container = styled.div`
  display: flex;
  padding: 12;
  box-sizing: border-box;
  .left {
    width: 18%;
  }
  .right {
    width: 82%;
    overflow-y: scroll;
    height: calc(100vh - 70px);
  }
`;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <div className="left">
        <Manu />
      </div>
      <div className="right">{children}</div>
    </Container>
  );
};

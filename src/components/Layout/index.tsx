import styled from "styled-components";

import { Manu } from "../Menu";
import { LayoutProps } from "./types";

const Container = styled.div`
  display: flex;
  padding: 12;
  .left {
    width: 17%;
  }
  .right {
    width: 83%;
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

import styled from "styled-components";

import { Manu } from "../Menu";
import { LayoutProps } from "./types";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12;
  .left {
    width: 15%;
  }
  .right {
    width: 85%;
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

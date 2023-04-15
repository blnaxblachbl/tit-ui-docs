import styled from "styled-components";

import { LayoutProps } from "./types";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12;
`;

export const Layout = ({children}: LayoutProps) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
import { useEffect, useState } from "react";
import styled from "styled-components";

import { MarkDown, Spinner } from "../../components";

const Container = styled.div`
  line-height: 24px;
  text-align: justify;
  max-width: 800px;
`;

const Provider = () => {
  const [children, setChildren] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/blnaxblachbl/tit-ui/main/docs/provider.md"
    )
      .then((response) => response.text())
      .then((result) => {
        setChildren(result);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  if (!children) {
    return <Spinner />;
  }

  return (
    <Container>
      <MarkDown children={children} />
    </Container>
  );
};

export default Provider;

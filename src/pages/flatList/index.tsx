import { useEffect, useState } from "react";
import styled from "styled-components";

import { MarkDown, Spinner } from "../../components";

const Container = styled.div`
  line-height: 24px;
  text-align: justify;
  max-width: 800px;
`;

const FlatList = () => {
  const [children, setChildren] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/blnaxblachbl/tit-ui/main/docs/flatlist.md"
    )
      .then((res) => res.text())
      .then((md) => {
        setChildren(md);
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

export default FlatList;

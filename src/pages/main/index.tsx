import styled from "styled-components";

const Container = styled.div`
  padding: 24px;
  box-sizing: border-box;
  line-height: 24px;
  text-align: justify;
  max-width: 800px;
`;

const MainPage = () => {
  return (
    <Container>
      <h1>Welcome to the TIT-UI lib!</h1>
      <p>
        tit-ui is a simple library that contains a set of UI components,
        functions and Form creating functionality.
      </p>
      {/* <span>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </span> */}
    </Container>
  );
};

export default MainPage;

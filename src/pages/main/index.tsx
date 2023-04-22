import styled from "styled-components";

const Container = styled.div`
  line-height: 24px;
  text-align: justify;
  max-width: 800px;

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
    grid-template-rows: repeat(auto-fit, 1fr);
  }

  img {
    max-width: 100%;
    border: solid 1px whitesmoke;
  }

  @media (max-width: 1000px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;

const MainPage = () => {
  return (
    <Container>
      <h1>Welcome to the TIT-UI lib!</h1>
      <p>
        TIT-UI is a simple library that contains a set of UI components,
        functions, Form creating and global state managment functionality.
      </p>
      <div className="grid">
        <div>
          <img src="https://github.com/blnaxblachbl/tit-ui/blob/main/images/avatar.jpg?raw=true" />
          <img src="https://github.com/blnaxblachbl/tit-ui/blob/main/images/badge.jpg?raw=true" />
          <img src="https://github.com/blnaxblachbl/tit-ui/blob/main/images/button.png?raw=true" />
          <img src="https://github.com/blnaxblachbl/tit-ui/blob/main/gifs/picker.gif?raw=true" />
        </div>
        <img src="https://github.com/blnaxblachbl/tit-ui/blob/main/gifs/toasts.gif?raw=true" />
        <img src="https://github.com/blnaxblachbl/tit-ui/blob/main/gifs/image.gif?raw=true" />
        <div>
          <img src="https://github.com/blnaxblachbl/tit-ui/blob/main/gifs/picker.gif?raw=true" />
          <img src="https://github.com/blnaxblachbl/tit-ui/blob/main/gifs/radioButtons.gif?raw=true" />
          <img src="https://github.com/blnaxblachbl/tit-ui/blob/main/gifs/slider.gif?raw=true" />
        </div>
        <div>
          <img src="https://github.com/blnaxblachbl/tit-ui/blob/main/gifs/switch.gif?raw=true" />
          <img src="https://github.com/blnaxblachbl/tit-ui/blob/main/images/tag.jpg?raw=true" />
          <img src="https://github.com/blnaxblachbl/tit-ui/blob/main/images/provider.jpg?raw=true" />
        </div>
        <img src="https://github.com/blnaxblachbl/tit-ui/blob/main/gifs/flat-list.gif?raw=true" />
      </div>
    </Container>
  );
};

export default MainPage;

import Header from "./components/header/Header";
import Content from "./components/content/Content";
import styled from "styled-components";

function App() {
  return (
    <Background>
      <Header />
      <Content />
    </Background>
  );
}

export default App;

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eaf0ff;
`;

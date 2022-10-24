import Header from "./components/Header";
import Nav from "./components/Nav";
import styled from "styled-components";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Title>Hello</Title>
    </>
  );
}

export default App;

const Title = styled.h1`
  color: blue;
`;

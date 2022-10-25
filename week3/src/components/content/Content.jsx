import { Main, Score, Bottom } from "./components/index";
import styled from "styled-components";

export default function Content() {
  return (
    <Background>
      <Score></Score>
      <Main></Main>
      <Bottom></Bottom>
    </Background>
  );
}

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #9292d4;
`;

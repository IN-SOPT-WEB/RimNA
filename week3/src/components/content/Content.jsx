import { Main, Score, Bottom } from "./components/index";
import styled from "styled-components";

export default function Content() {
  const questionList = [
    {
      img: "짱구.jpeg",
      answer: "짱구",
      choices: ["짱구", "유리", "훈이", "맹구", "철수"],
    },
    {
      img: "피카츄.jpeg",
      answer: "피카츄",
      choices: ["리자몽", "피카츄", "팽도리", "라이츄", "지우"],
    },
  ];

  return (
    <Background>
      <Score></Score>
      <Main questionList={questionList}></Main>
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
  background-color: #eaf0ff;
`;

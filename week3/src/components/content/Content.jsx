import { Main, Score, Bottom } from "./components/index";
import styled from "styled-components";
import { useEffect, useState } from "react";

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
    {
      img: "쿠로미.jpeg",
      answer: "쿠로미",
      choices: ["폼폼푸린", "시나모롤", "쿠로미", "바츠마루", "헬로키티"],
    },
    {
      img: "미소.jpeg",
      answer: "미소",
      choices: ["미소", "웃음", "행복", "키키", "우하하"],
    },
  ];

  const [score, setScore] = useState(0);

  useEffect(() => {}, [score, setScore]);

  return (
    <Background>
      <Score score={score}></Score>
      <Main
        questionList={questionList}
        score={score}
        setScore={setScore}
      ></Main>
      <Bottom
        score={score}
        setScore={setScore}
      ></Bottom>
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

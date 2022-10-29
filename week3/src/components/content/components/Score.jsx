import React from "react";
import styled from "styled-components";

function Score({ score }) {
  return (
    <Background>
      <ScoreText>현재 점수 : {score}점</ScoreText>
    </Background>
  );
}

export default Score;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 2rem 0.5rem 2rem;
  border-radius: 30px;
  color: #3a3a3a;
  background-color: #dad4f9;
`;

const ScoreText = styled.h3`
  margin: 0px;
`;

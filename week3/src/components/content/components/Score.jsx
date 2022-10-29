import React from "react";
import styled from "styled-components";

function Score({ score }) {
  return (
    <Background>
      <h3>현재 점수 : {score}점</h3>
    </Background>
  );
}

export default Score;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem 3rem 0.1rem 3rem;
  border-radius: 30px;
  color: #4e4e4e;
  background-color: #dad4f9;
`;

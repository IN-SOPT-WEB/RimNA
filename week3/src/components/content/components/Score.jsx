import React from "react";
import styled from "styled-components";

function Score() {
  return (
    <Background>
      <h3>현재 점수 : 0점</h3>
    </Background>
  );
}

export default Score;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #8686ff; */
`;

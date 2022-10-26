import React from "react";
import styled from "styled-components";

export default function Main({ questionList }) {
  return (
    <>
      <ImageBox src={questionList[0].img} />
      <AnswerContatiner>
        {questionList[0].choices.map((value, key) => (
          <AnswerBox>{value}</AnswerBox>
        ))}
      </AnswerContatiner>
    </>
  );
}

const AnswerContatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const AnswerBox = styled.button`
  display: flex;
  width: 3rem;
  padding: 7px;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: #5b5b5b;
  background-color: #ffffff;
  border-radius: 15px;
`;

const ImageBox = styled.img`
  width: 15rem;
  border-radius: 15px;
`;

import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ModalPortal from "./Portal";
import Modal from "./Modal";

export default function Main({ questionList, setScore, score }) {
  const onAnswerClick = (value) => {
    if (value === questionList[score].answer) {
      setModalMessage("정답");
      setModalOn(!modalOn);
      const newScore = score + 1;
      setScore(newScore);
    } else {
      setModalMessage("오답");
      setModalOn(!modalOn);
    }
  };

  const [modalOn, setModalOn] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleModal = () => {
    setModalOn(!modalOn);
  };

  return (
    <>
      <ModalPortal>
        {modalOn && (
          <Modal
            onClose={handleModal}
            modalMessage={modalMessage}
          />
        )}
      </ModalPortal>
      {score === 4 ? (
        <>
          <Finish>왕 다 맞췄다</Finish>
        </>
      ) : (
        <>
          <ImageBox src={questionList[score].img} />
          <AnswerContatiner>
            {questionList[score].choices.map((value, key) => (
              <AnswerBox onClick={() => onAnswerClick(value)}>
                {value}
              </AnswerBox>
            ))}
          </AnswerContatiner>
        </>
      )}
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
  width: 4rem;
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

const Finish = styled.div`
  width: 15rem;
  height: 15rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

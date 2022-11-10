import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ModalPortal from "../../modal/Portal";
import Modal from "../../modal/Modal";

export default function Main({ questionList, setScore, score }) {
  const [modalOn, setModalOn] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const onAnswerClick = (value) => {
    if (value === questionList[score].answer) {
      setModalMessage("정답");
      setModalOn(!modalOn);
    } else {
      setModalMessage("오답");
      setModalOn(!modalOn);
    }
  };

  const handleModal = (modalMessage) => {
    if (modalMessage === "정답") {
      setModalOn(!modalOn);
      const newScore = score + 1;
      setScore(newScore);
    } else {
      setModalOn(!modalOn);
    }
  };

  return (
    <>
      <ModalPortal>
        {modalOn && (
          <Modal
            onClose={() => handleModal(modalMessage)}
            modalMessage={modalMessage}
          />
        )}
      </ModalPortal>
      {score === 5 ? (
        <>
          <ImageBox src="축하.gif" />
          <h2>축하합니다! 문제를 다 맞췄어요!</h2>
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
  box-shadow: 0px 4px 4px rgba(223, 223, 223, 0.25);
  background-color: #ffffff;
  border-radius: 15px;
`;

const ImageBox = styled.img`
  width: 15rem;
  border-radius: 15px;
  box-shadow: 0px 5px 4px 0px rgba(197, 179, 223, 0.25);
`;

const Finish = styled.div`
  width: 15rem;
  height: 15rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

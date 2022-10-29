import React from "react";
import styled from "styled-components";

const Modal = ({ onClose, modalMessage }) => {
  return (
    <Background>
      <ModalContatiner>
        {modalMessage === "정답" ? (
          <Content>정답이에요 !! 🥳 🎉</Content>
        ) : (
          <Content>틀렸어요 !! 🙀 🔥</Content>
        )}
        <DeleteButton onClick={() => onClose()}>나가기</DeleteButton>
      </ModalContatiner>
    </Background>
  );
};

export default Modal;

const Background = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContatiner = styled.div`
  display: flex;
  width: 15rem;
  padding: 3.5rem 2rem 0rem 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 2px rgba(123, 123, 123, 0.1);
`;

const Content = styled.div`
  font-weight: bold;
  color: #b290d4;
  font-size: large;
`;

const DeleteButton = styled.button`
  background: #d2c8dc;
  padding: 0.5rem;
  margin-top: 20px;
  margin-bottom: 15px;
  border-radius: 30px;
  font-weight: bold;
  border: none;
  color: white;
  cursor: pointer;
`;

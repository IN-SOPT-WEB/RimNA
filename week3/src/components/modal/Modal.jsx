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
        <Delete onClick={() => onClose()}>나가기</Delete>
      </ModalContatiner>
    </Background>
  );
};

export default Modal;

//아래는 styled-components를 통한 스타일링

const Background = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  /* background: #000000; */
  text-align: center;
`;

const ModalContatiner = styled.div`
  display: flex;
  width: 15rem;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 2px rgba(123, 123, 123, 0.1);
`;

const Content = styled.p`
  /* height: 100%; */
  /* width: 950px; */
  position: relative;
  font-weight: bold;
  /* background: #e0e0e0; */
  color: #b290d4;
`;

const Delete = styled.button`
  /* height: 100%; */
  /* width: 200px; */
  background: #d2c8dc;
  padding: 1rem;
  border-radius: 30px;
  font-weight: bold;
  border: none;
  color: white;
  cursor: pointer;
`;

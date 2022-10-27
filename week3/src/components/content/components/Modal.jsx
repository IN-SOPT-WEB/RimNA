import React from "react";
import styled from "styled-components";

const Modal = ({ onClose, modalMessage }) => {
  return (
    <Background>
      <Delete onClick={() => onClose()}>나가기</Delete>
      {modalMessage === "정답" ? (
        <Content>정답이에여</Content>
      ) : (
        <Content>틀렸어여</Content>
      )}
    </Background>
  );
};

export default Modal;

//아래는 styled-components를 통한 스타일링

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
`;

const Content = styled.div`
  height: 100%;
  width: 950px;
  margin-top: 70px;
  position: relative;
  overflow: scroll;
  background: #141414;
  color: white;
`;

const Delete = styled.button`
  height: 100%;
  width: 200px;
  margin-top: 70px;
  position: relative;
  overflow: scroll;
  background: #141414;
  color: white;
  cursor: pointer;
`;

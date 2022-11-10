import styled from "styled-components";

export default function Bottom({ score, setScore }) {
  const onReset = () => {
    setScore(0);
  };
  return <RestartButton onClick={() => onReset()}>다시하기</RestartButton>;
}

const RestartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b4a0ca;
  border: none;
  font-weight: bold;
  padding: 10px;
  border-radius: 20px;
  color: #ffffff;
  cursor: pointer;
`;

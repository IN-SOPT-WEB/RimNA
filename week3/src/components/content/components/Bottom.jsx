import styled from "styled-components";

export default function Bottom() {
  return <RestartButton>다시하기</RestartButton>;
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

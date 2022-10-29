import styled from "styled-components";

export default function Header() {
  return (
    <Background>
      <Title
        src="로고.png"
        alt="logo"
      ></Title>
    </Background>
  );
}

const Background = styled.div`
  padding: 0.1rem;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
  background-color: #cdcdea;
`;

const Title = styled.img`
  height: 5em;
`;

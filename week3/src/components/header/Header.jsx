import styled from "styled-components";

export default function Header() {
  return (
    <Background>
      <Title
        src="Logo.png"
        alt="logo"
      ></Title>
    </Background>
  );
}

const Background = styled.div`
  padding: 1rem;
`;

const Title = styled.img`
  /* color: #404040; */
  /* width: 100px; */
  height: 7em;
`;

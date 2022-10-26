import styled from "styled-components";

export default function Header() {
  return (
    <Background>
      <Title>나 누구겡 👁👅👁</Title>
    </Background>
  );
}

const Background = styled.div`
  padding: 3rem;
`;

const Title = styled.h2`
  color: #404040;
`;

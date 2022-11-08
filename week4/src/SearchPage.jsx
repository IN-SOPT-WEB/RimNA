import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function SearchPage() {
  return (
    <Background>
      <p>SearchPage</p>
      <Outlet />
    </Background>
  );
}

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e2eaff;
`;

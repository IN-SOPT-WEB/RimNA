import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DetailBox from "./DetailBox";

export default function SearchPage() {
  const [userName, setUserName] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [historyVisible, setHistoryVisible] = useState(false);
  const outside = useRef();

  const navigage = useNavigate();

  const onChangeName = (e) => {
    if (e.key === "Enter") {
      const newText = e.target.value;
      setUserName(newText);
      setSearchHistory([...searchHistory, newText]);
      setHistoryVisible(false);
      navigage(`/search/${newText}`);
      e.preventDefault();
    }
  };

  const onClickHistory = (history) => {
    setUserName(history);
    navigage(`/search/${history}`);
  };

  const onDeleteHistory = (history) => {
    const newHistory = searchHistory.filter((item) => item !== history);
    setSearchHistory(newHistory);
  };

  const handleModalClose = (e) => {
    if (historyVisible && outside.current === e.target) {
      setHistoryVisible(false);
    }
  };

  return (
    <Background
      ref={outside}
      onClick={(e) => handleModalClose(e)}
    >
      <Container>
        <Title>Github Profile Finder</Title>
        <SearchContainer onFocus={() => setHistoryVisible(true)}>
          <SearchBox
            placeholder="Github Username..."
            onChange={(e) => setUserName(e.target.value)}
            onKeyPress={(e) => onChangeName(e)}
            value={userName}
          ></SearchBox>
          {historyVisible ? (
            <SearchHistoryUl>
              {searchHistory.map((history, index) => (
                <SearchHistory key={index}>
                  <div onClick={(e) => onClickHistory(history)}>{history}</div>
                  <DeleteBtn onClick={(e) => onDeleteHistory(history)}>
                    X
                  </DeleteBtn>
                </SearchHistory>
              ))}
            </SearchHistoryUl>
          ) : (
            <></>
          )}
        </SearchContainer>
      </Container>
      <DetailBox />
    </Background>
  );
}

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #c2ddcb;
`;

const Container = styled.div`
  height: 8rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(176, 206, 191, 0.7);
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.3);
`;

const Title = styled.p`
  margin: 0;
  color: #59855f;
  font-weight: bold;
  font-size: 2em;
`;
const SearchContainer = styled.div``;

const SearchBox = styled.input`
  height: 2em;
  width: 10em;
  padding: 0;
  color: white;
  background-color: rgba(127, 168, 147, 0.7);
  border-radius: 10px;
  border: none;
  padding-left: 1em;
  font-size: 20px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: rgba(250, 250, 250, 0.7);
    font-size: medium;
  }
`;

const SearchHistoryUl = styled.ul`
  position: absolute;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const SearchHistory = styled.div`
  height: 3em;
  width: 12.8em;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  border-radius: 5px;
  position: relative;
  padding-left: 1em;
  background: rgba(74, 105, 89, 0.7);
  border-top: none;
  /* border: 0.1px solid white; */
  cursor: pointer;
`;

const DeleteBtn = styled.button`
  flex: none;
  height: 20px;
  width: 20px;
  cursor: pointer;
  margin-right: 10%;
  background: none;
  border: none;
  font-size: large;
  color: white;
`;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

export default function DetailBox() {
  const { userName } = useParams();
  const [userInfo, setUserInfo] = useState({});
  const navigage = useNavigate();

  useEffect(() => {
    getUserInfo();
  }, [userName]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const result = await response.json();
      setUserInfo(result);
    } catch (error) {
      console.log("에에에엥에엥 에러발새애애앵");
    }
  };

  const onDeleteBox = () => {
    navigage(`/search`);
  };

  return (
    <>
      {userName !== undefined ? (
        <Background>
          <DeleteBtn onClick={onDeleteBox}>X</DeleteBtn>
          <Image src={userInfo.avatar_url}></Image>
          <Nickname>{userInfo.name}</Nickname>
          <Name>{userInfo.login}</Name>
          <VisitBtn href={userInfo.html_url}>Visit {userInfo.login}</VisitBtn>
          <BottomContainer>
            <FollowContatiner>
              <BottomTitleText>Followers</BottomTitleText>
              <BottomInfoText>{userInfo.followers}</BottomInfoText>
            </FollowContatiner>
            <FollowContatiner>
              <BottomTitleText>Following</BottomTitleText>
              <BottomInfoText>{userInfo.following}</BottomInfoText>
            </FollowContatiner>
            <FollowContatiner>
              <BottomTitleText>Repos</BottomTitleText>
              <BottomInfoText>{userInfo.public_repos}</BottomInfoText>
            </FollowContatiner>
          </BottomContainer>
        </Background>
      ) : (
        <HiddenBackground></HiddenBackground>
      )}
    </>
  );
}

const HiddenBackground = styled.div`
  width: 30em;
  height: 30em;
`;
const Background = styled.div`
  /* flex-grow: 1; */
  width: 30em;
  height: 30em;
  background-color: rgba(148, 178, 163, 0.7);
  flex-direction: column;
  align-items: center;
  display: flex;
  padding-bottom: 10px;
  border-radius: 15px;
  justify-content: space-evenly;
  box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
`;

const Image = styled.img`
  /* flex-grow: 1; */
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
`;
const FollowContatiner = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  width: 20%;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.2);
`;

const DeleteBtn = styled.button`
  flex: none;
  height: 20px;
  width: 20px;
  cursor: pointer;
  align-self: flex-end;
  margin-right: 5%;
  background: none;
  border: none;
  font-size: large;
  color: white;
`;

const Nickname = styled.h2`
  font-weight: bold;
  margin: 0;
  color: #ffffff;
`;

const Name = styled.h2`
  font-weight: bold;
  margin: 0;
  color: #ffffff;
`;

const VisitBtn = styled.a`
  background-color: rgba(179, 228, 180, 0.2);
  border: 2px solid #8ead93;
  cursor: pointer;
  padding: 10px;
  text-decoration: none;
  color: white;
  font-size: medium;
  border-radius: 20px;
`;

const BottomTitleText = styled.div`
  color: white;
  font-weight: bold;
`;

const BottomInfoText = styled.h2`
  color: white;
  font-weight: normal;
  /* font-size: large; */
  margin: 0;
`;

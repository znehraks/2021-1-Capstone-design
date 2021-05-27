import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { Burger, Menu } from "./HamburgerMenu";
import logo from "./Styles/images/logo_white.png";

const Wrapper = styled.div`
  width: 100vw;
  height: 6vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: ${(props) => props.theme.headerBgColor};
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

const LogoContainer = styled(Link)`
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 6vw;
  height: auto;
`;

const MenuContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const HamburgerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5vw;
`;

const MenuSpan = styled(Link)`
  font-size: 1vw;
  color: ${(props) => (props.selected ? `black` : `white`)};
  :hover {
    color: black;
  }
`;

const BurgerComponent = styled(Burger)``;

const MenuComponent = styled(Menu)``;
const Header = withRouter(({ location }) => {
  const [open, setOpen] = useState(false);
  const Logout = () => {
    localStorage.removeItem("userId");
    window.location.href = "/";
  };
  return (
    <Wrapper>
      <LogoContainer to="/">
        <LogoImage src={logo}></LogoImage>
      </LogoContainer>
      {localStorage.getItem("userId") ? (
        <MenuContainer>
          <MenuSpan>{localStorage.getItem("userId")}님 안녕하세요!</MenuSpan>
        </MenuContainer>
      ) : (
        <></>
      )}
      <MenuContainer>
        <MenuSpan to="/AboutUs" selected={location.pathname === "/AboutUs"}>
          프로젝트 및 팀 소개
        </MenuSpan>
      </MenuContainer>
      <MenuContainer>
        <MenuSpan
          to="/RecommendationIntro"
          selected={
            location.pathname === "/RecommendationIntro" ||
            location.pathname === "/Recommendation" ||
            location.pathname === "/RecommendationResult"
          }
        >
          자취방 추천 받기
        </MenuSpan>
      </MenuContainer>
      <MenuContainer>
        <MenuSpan
          to="/ResultHistory"
          selected={location.pathname === "/ResultHistory"}
        >
          추천 이력 조회
        </MenuSpan>
      </MenuContainer>
      <MenuContainer>
        {localStorage.getItem("userId") ? (
          <MenuSpan
            onClick={() => {
              Logout();
            }}
          >
            로그아웃
          </MenuSpan>
        ) : (
          <MenuSpan to="/Auth" selected={location.pathname === "/Auth"}>
            로그인
          </MenuSpan>
        )}
      </MenuContainer>
      <HamburgerContainer>
        <BurgerComponent open={open} setOpen={setOpen} />
        <MenuComponent open={open} setOpen={setOpen} />
      </HamburgerContainer>
    </Wrapper>
  );
});

export default Header;

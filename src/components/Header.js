import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Burger, Menu } from "./HamburgerMenu";
import logo from "./Styles/images/logo.PNG";

const Wrapper = styled.div`
  width: 100vw;
  height: 6vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
`;

const LogoContainer = styled(Link)`
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 10vw;
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
  font-size: 1.1vw;
  :hover {
    color: red;
  }
`;

const BurgerComponent = styled(Burger)``;

const MenuComponent = styled(Menu)``;
const Header = () => {
  const [open, setOpen] = useState(false);

  // useOnClickOutside(node, () => setOpen(false));
  return (
    <Wrapper>
      <LogoContainer to="/">
        <LogoImage src={logo}></LogoImage>
      </LogoContainer>
      <MenuContainer>
        <MenuSpan to="/AboutUs">프로젝트 및 팀 소개</MenuSpan>
      </MenuContainer>
      <MenuContainer>
        <MenuSpan to="/RecommendationIntro">자취방 추천 받기</MenuSpan>
      </MenuContainer>
      <MenuContainer>
        <MenuSpan to="/Login">추천 이력 조회</MenuSpan>
      </MenuContainer>
      <HamburgerContainer>
        <BurgerComponent open={open} setOpen={setOpen} />
        <MenuComponent open={open} setOpen={setOpen} />
      </HamburgerContainer>
    </Wrapper>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 30vw;
  height: 108vh;
  background: #000;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemList = styled.div`
  width: 100%;
  height: 70%;
  margin-top: 6vw;
  padding-left: 1vw;
  display: flex;
  flex-direction: column;
`;
const ItemBlank = styled.div`
  margin-bottom: 2vw;
`;
const TitleItem = styled.span`
  font-size: 2vw;
`;
const Item = styled.span`
  color: #888;
  padding-left: 1vw;
  font-size: 1.5vw;
  margin-top: 1vw;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  cursor: pointer;
  :hover {
    color: #fff;
    font-style: italic;
    font-weight: 800;
  }
`;

const Menu = ({ open, setOpen, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  return (
    <>
      <StyledMenu
        open={open}
        setOpen={setOpen}
        aria-hidden={!isHidden}
        {...props}
      >
        <Wrapper>
          <ItemList>
            <TitleItem>자취지역 추천</TitleItem>
            <Item>-커스텀 자취지역 추천</Item>
            <Item>-학우들이 인정한 지역 찾기</Item>
            <Item>-테마별로 찾기</Item>
            <ItemBlank />
            <TitleItem>내 추천 이력 보기</TitleItem>
            <Item>-나의 최애 자취지역</Item>
            <Item>-찜목록</Item>
            <Item>-테마별로 찾기</Item>
          </ItemList>
        </Wrapper>
      </StyledMenu>
    </>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;

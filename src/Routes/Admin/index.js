import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import homeEx from "../../components/Styles/images/homeEx.jpg";
import homeEx2 from "../../components/Styles/images/homeEx2.jpg";
import useInput from "../../Hooks/useInput";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 45vw;
  margin-top: 6vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
`;

const Article = styled.div`
  width: 100%;
  height: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: red;
`;
const TitleSpan = styled.span`
  font-size: 3vw;
  margin-bottom: 3vw;
`;
const InputContainer = styled.div`
  width: 50vw;
  height: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
`;
const InputItemContainer = styled.div`
  width: 60%;
  height: 3vw;
  margin-bottom: 1vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const InputDesc = styled.span`
  width: 40%;
  font-size: 1.5vw;
`;

const InputBox = styled.input`
  width: 100%;
  height: 3vw;
  background: transparent;
  border: none;
  border-bottom: 2px solid black;
  font-size: 2vw;
  :focus {
    border-bottom: 2px solid white;
    transition-duration: 0.5s;
  }
`;
const Button = styled.span`
  font-size: 1.2vw;
  border: 2px solid black;
  padding: 0.6vw 1vw;
  margin-top: 2vw;
  margin-bottom: 2vw;
  :hover {
    color: white;
    background: black;
  }
  cursor: pointer;
`;

const SmallSpan = styled.span`
  font-size: 1.2vw;
  cursor: pointer;
`;

const ItemSpan = styled.span`
  font-size: 3vw;
  margin-bottom: 2vw;
  cursor: pointer;
  :hover {
    color: white;
  }
`;

const Admin = () => {
  const [mode, setMode] = useState("login");

  const id = useInput("");
  const pwd = useInput("");
  const email = useInput("");

  return (
    <Wrapper>
      {mode === "login" && (
        <Article>
          <InputContainer>
            <TitleSpan>??????????????????</TitleSpan>
            <InputItemContainer>
              <InputDesc>?????????: </InputDesc>
              <InputBox placeholder={""} {...id}></InputBox>
            </InputItemContainer>
            <InputItemContainer>
              <InputDesc>????????????:</InputDesc>
              <InputBox placeholder={""} {...pwd}></InputBox>
            </InputItemContainer>
            <Button onClick={() => setMode("admin")}>??????</Button>
          </InputContainer>
        </Article>
      )}
      {mode === "admin" && (
        <>
          <Article>
            <ItemSpan
              onClick={() => {
                setMode("member");
              }}
            >
              ????????????
            </ItemSpan>
            <ItemSpan
              onClick={() => {
                setMode("recommendation");
              }}
            >
              ??????????????????
            </ItemSpan>
          </Article>
        </>
      )}
      {mode === "member" && (
        <>
          <Article>
            <TitleSpan>????????????</TitleSpan>
          </Article>
        </>
      )}
      {mode === "recommendation" && (
        <>
          <Article>
            <TitleSpan>??????????????????</TitleSpan>
          </Article>
        </>
      )}
    </Wrapper>
  );
};

export default Admin;

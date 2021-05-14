import React, { useState } from "react";
import { Helmet } from "react-helmet";
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
  text-decoration: none;
  :focus {
    border-bottom: 3px solid ${(props) => props.theme.headerBgColor};
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

const Auth = () => {
  const [mode, setMode] = useState("login");

  const id = useInput("");
  const pwd = useInput("");
  const email = useInput("");
  //로그인 성공 시 LocalStorage에 isLoggedIn 이랑
  //webtoken 저장.
  return (
    <>
      <Helmet>
        <title>Auth</title>
      </Helmet>
      <Wrapper>
        {mode === "login" && (
          <Article>
            <InputContainer>
              <TitleSpan>로그인</TitleSpan>
              <InputItemContainer>
                <InputDesc>아이디: </InputDesc>
                <InputBox placeholder={""} {...id}></InputBox>
              </InputItemContainer>
              <InputItemContainer>
                <InputDesc>비밀번호:</InputDesc>
                <InputBox
                  placeholder={""}
                  type={"password"}
                  {...pwd}
                ></InputBox>
              </InputItemContainer>
              <Button>확인</Button>
              <SmallSpan
                onClick={() => {
                  setMode("registration");
                }}
              >
                아직 회원이 아니신가요?
              </SmallSpan>
            </InputContainer>
          </Article>
        )}
        {mode === "registration" && (
          <Article>
            <InputContainer>
              <TitleSpan>회원가입</TitleSpan>
              <InputItemContainer>
                <InputDesc>아이디: </InputDesc>
                <InputBox placeholder={""} {...id}></InputBox>
              </InputItemContainer>
              <InputItemContainer>
                <InputDesc>비밀번호:</InputDesc>
                <InputBox placeholder={""} {...pwd}></InputBox>
              </InputItemContainer>
              <InputItemContainer>
                <InputDesc>이메일:</InputDesc>
                <InputBox placeholder={""} type={"email"} {...email}></InputBox>
              </InputItemContainer>
              <Button>가입하기</Button>
              <SmallSpan
                onClick={() => {
                  setMode("login");
                }}
              >
                이미 회원이신가요?
              </SmallSpan>
            </InputContainer>
          </Article>
        )}
      </Wrapper>
    </>
  );
};

export default Auth;

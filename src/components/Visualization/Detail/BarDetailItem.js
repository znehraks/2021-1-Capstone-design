import React, { useState } from "react";
import styled from "styled-components";
import Bar from "../Bar";
const DetailItem = styled.div`
  width: 100%;
  display: ${(props) =>
    (props.mode === "main") | (props.mode === "Bar") ? `flex` : "none"};
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.align ? `flex-start` : `center`)};
  @media (max-width: 500px) {
    height: 30vw;
  }
`;

const SubTitleSpan = styled.span`
  font-size: 1vw;
  margin-top: 0.5vw;
  @media (max-width: 500px) {
    font-size: 3vw;
    margin-bottom: 1vw;
    padding: 0 3vw;
  }
`;
const CheckSpan = styled.span`
  font-size: 0.8vw;
  color: ${(props) => (props.fontColor ? `${props.theme.headerBgColor}` : ``)};
  margin-bottom: 0.5vw;
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 2vw;
  }
`;

const BarChartYaxisSpan = styled.span`
  position: relative;
  top: 1vw;
  left: -13.5vw;
  font-size: 0.3vw;
  font-weight: bold;
  @media (max-width: 500px) {
    font-size: 2vw;
    top: 10vw;
    left: -36.5vw;
  }
`;

const CheckSpanDiv = styled.div`
  width: 7vw;
  height: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  top: 5vw;
  left: 14vw;
  @media (max-width: 500px) {
    width: 19vw;
    left: 35vw;
    height: 39vw;
    top: 10vw;
  }
`;
const DetailSpan = styled.span`
  font-size: 1.5vw;
`;
const GridLine = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const GridColumn = styled.div`
  flex: ${(props) => (props.flex ? `${props.flex}` : `1`)};
  width: 100%;
  height: 100%;
  padding-top: 1vw;
  margin-bottom: 1vw;
  text-align: center;
  font-size: 1.5vw;
  @media (max-width: 500px) {
    font-size: 4vw;
  }
`;
const Detail = ({
  isChecked,
  setIsChecked,
  isClicked,
  monthlyDeposit,
  monthlyPay,
  reservDeposit,
  price,
  mode,
  setMode,
}) => {
  const [detailData, setDetailData] = useState();
  return (
    <>
      <DetailItem mode={mode}>
        <CheckSpanDiv>
          {detailData && detailData[15] > 0 && (
            <CheckSpan
              fontColor={isChecked === "monthReserv" ? `${true}` : ``}
              onClick={() => setIsChecked("monthReserv")}
            >
              ??????(?????????)
            </CheckSpan>
          )}
          {detailData && detailData[16] > 0 && (
            <CheckSpan
              fontColor={isChecked === "monthPay" ? `${true}` : ``}
              onClick={() => setIsChecked("monthPay")}
            >
              ??????
            </CheckSpan>
          )}
          {detailData && detailData[17] > 0 && (
            <CheckSpan
              fontColor={isChecked === "reserv" ? `${true}` : ``}
              onClick={() => setIsChecked("reserv")}
            >
              ??????
            </CheckSpan>
          )}
        </CheckSpanDiv>
        <SubTitleSpan>???/?????? ?????? ??????</SubTitleSpan>
        <BarChartYaxisSpan>?????? ??? ???</BarChartYaxisSpan>
        {/* <CheckSpan onClick={() => setIsChecked("price")}>
                                  ??????
                                </CheckSpan> */}
        <Bar
          mode={mode}
          setMode={setMode}
          setDetailData={setDetailData}
          isChecked={isChecked}
          isClicked={isClicked}
          monthlyDeposit={monthlyDeposit}
          monthlyPay={monthlyPay}
          reservDeposit={reservDeposit}
          price={price}
        />
      </DetailItem>
      {mode === "Bar" && (
        <DetailItem align={"flex-start"} mode={mode}>
          <GridLine>
            <GridColumn>??????</GridColumn>
            <GridColumn>?????????</GridColumn>
            <GridColumn>?????????</GridColumn>
            <GridColumn>?????? ???</GridColumn>
          </GridLine>
          {detailData && detailData[15] > 0 && (
            <>
              <GridLine>
                <GridColumn>??????(?????????)</GridColumn>
                <GridColumn>
                  {detailData[0] >= 10000
                    ? `${detailData[0] / 10000}?????? `
                    : `${detailData[0]}??????`}
                </GridColumn>
                <GridColumn>
                  {detailData[12] >= 10000
                    ? `${detailData[12] / 10000}?????? `
                    : `${detailData[12]}??????`}
                </GridColumn>
                <GridColumn>{`${detailData[15]}???`}</GridColumn>
              </GridLine>
              <GridLine>
                <GridColumn>??????</GridColumn>
                <GridColumn>
                  {detailData[1] >= 10000
                    ? `${detailData[1] / 10000}?????? `
                    : `${detailData[1]}??????`}
                </GridColumn>
                <GridColumn>
                  {detailData[13] >= 10000
                    ? `${detailData[13] / 10000}?????? `
                    : `${detailData[13]}??????`}
                </GridColumn>
                <GridColumn>{``}</GridColumn>
              </GridLine>
            </>
          )}
          {detailData && detailData[17] > 0 && (
            <GridLine>
              <GridColumn>??????</GridColumn>
              <GridColumn>
                {detailData[2] >= 10000
                  ? `${detailData[2] / 10000}?????? `
                  : `${detailData[2]}??????`}
              </GridColumn>
              <GridColumn>
                {detailData[14] >= 10000
                  ? `${detailData[14] / 10000}?????? `
                  : `${detailData[14]}??????`}
              </GridColumn>
              <GridColumn>{`${detailData[17]}???`}</GridColumn>
            </GridLine>
          )}

          {detailData && detailData[15] > 0 && (
            <>
              <SubTitleSpan>{`??? ????????? ??????(?????????)?????? ????????? ?????? ?????? ???????????? ??? ${
                detailData[3] - detailData[9] >= 10000
                  ? `${
                      detailData[3] - detailData[9] > 0
                        ? `${Number(
                            Math.abs(detailData[3] - detailData[9]) / 10000
                          )}?????? ????????????.`
                        : `${Math.abs(
                            Number(detailData[3] - detailData[9]) / 10000
                          )}?????? ?????????.`
                    }`
                  : `${
                      detailData[3] - detailData[9] > 0
                        ? `${Math.abs(
                            detailData[3] - detailData[9]
                          )}?????? ????????????.`
                        : `${Math.abs(
                            detailData[3] - detailData[9]
                          )}?????? ?????????.`
                    }`
              }`}</SubTitleSpan>
              <SubTitleSpan>{`??? ????????? ?????? ?????? ????????? ?????? ?????? ???????????? ??? ${
                detailData[4] - detailData[10] > 0
                  ? `${Math.abs(detailData[4] - detailData[10])}?????? ????????????.`
                  : `${Math.abs(detailData[4] - detailData[10])}?????? ?????????.`
              }`}</SubTitleSpan>
            </>
          )}

          {detailData && detailData[17] > 0 && (
            <SubTitleSpan>{`??? ????????? ?????? ?????? ????????? ?????? ?????? ???????????? ??? ${
              detailData[5] - detailData[11] > 0
                ? `${Math.abs(detailData[5] - detailData[11])}?????? ????????????.`
                : `${Math.abs(detailData[5] - detailData[11])}?????? ?????????.`
            }`}</SubTitleSpan>
          )}
          <SubTitleSpan>
            ?????? ??? {detailData[15] + detailData[17]}??? ????????? ????????? ?????????.
          </SubTitleSpan>
        </DetailItem>
      )}
    </>
  );
};

export default Detail;

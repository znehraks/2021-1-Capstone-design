import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Api } from "../../api";
import styled from "styled-components";
import PieRoom from "../../components/Visualization/PieRoom";
import Bar from "../../components/Visualization/Bar";
import Loader from "../../components/Loader";
import Map from "../../components/Kakao/Map";
import Arrow from "../../components/Arrow";
import Back from "../../components/Styles/images/back.png";
import BarDetailItem from "../../components/Visualization/Detail/BarDetailItem";
import PieDetailItem from "../../components/Visualization/Detail/PieDetailItem";
import WordcloudDetailItem from "../../components/Visualization/Detail/WordcloudDetailItem";
import { Helmet } from "react-helmet";
import RadarArticle from "../../components/Visualization/RadarArticle";
import Wordcloud from "../../components/Visualization/Wordcloud";
import QuestionPopup from "../../components/QuestionPopup";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
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
  height: 37vw;
  margin-top: 2vw;
`;

const ArticleContentContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const RightContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;

const DetailArticle = styled.div`
  width: 100%;
  height: ${(props) => (props.height ? `${props.height}` : `45vw`)};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const DetailItemContainer = styled.div`
  width: 100%;
  height: 66%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const DetailItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DetailTitleSpan = styled.span`
  font-size: 1.5vw;
`;
const DetailContentSpan = styled.span`
  font-size: 1.2vw;
`;
const RightFloatingDiv = styled.div`
  width: 5vw;
  height: 5vw;
  position: absolute;
  top: 11vw;
  right: 30vw;
  cursor: pointer;
  display: ${(props) => (props.isClicked ? `flex` : `none`)};
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const RightFloatingDiv02 = styled.div`
  width: 5vw;
  height: 5vw;
  position: absolute;
  top: 8vw;
  right: 15vw;
  cursor: pointer;
  display: ${(props) => (props.isClicked ? `none` : `flex`)};
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const BackArrow = styled.div`
  width: 3vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 2vw;
  }
`;
const MagnifyDiv = styled.div`
  width: 4vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 3vw;
  }
`;

const OptionSpan = styled.span`
  font-size: 0.5vw;
`;

const TitleSpan = styled.span`
  font-size: 2vw;
  margin-top: 2vw;
  margin-bottom: 1vw;
`;
const TitleSpan02 = styled.span`
  font-size: 2vw;
  margin-top: 4vw;
  margin-bottom: 1vw;
`;
const TitleSpan03 = styled.span`
  font-size: 2vw;
  margin-bottom: 2vw;
`;
const SubTitleSpan = styled.span`
  font-size: 0.9vw;
`;
const CheckSpan = styled.span`
  font-size: 0.8vw;
  color: ${(props) => (props.fontColor ? `${props.theme.headerBgColor}` : ``)};
  margin-bottom: 0.5vw;
  cursor: pointer;
`;

const BarChartTitleSpan = styled.span`
  font-size: 1vw;
  font-weight: bold;
`;
const BarChartYaxisSpan = styled.span`
  position: relative;
  top: 1vw;
  left: -13.5vw;
  font-size: 0.3vw;
  font-weight: bold;
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
`;
const RecommendationResult = withRouter(
  ({
    match: {
      params: {
        univ_name,
        univ_lat,
        univ_lon,
        Q2Answer,
        Q3Answer,
        Q4Answer,
        Q5Answer,
        w1,
        w2,
        w3,
        w4,
        w5,
      },
    },
    setDetail,
  }) => {
    const [data, setData] = useState();
    const [newData, setNewData] = useState();
    const [hashtags, setHashtags] = useState();

    const [isChecked, setIsChecked] = useState("monthReserv");
    const [monthlyDeposit, setMonthlyDeposit] = useState();
    const [monthlyPay, setMonthlyPay] = useState();
    const [reservDeposit, setReservDeposit] = useState();
    const [price, setPrice] = useState();
    const [isClicked, setIsClicked] = useState("");
    const [isHovered, setIsHovered] = useState("");
    const [count, setCount] = useState(0);
    const [mode, setMode] = useState("main");

    const [popup, setPopup] = useState(false);
    const [qComplete, setQComplete] = useState(false);
    const [canceled, setCanceled] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [QuestionNumber, setQuestionNumber] = useState();
    const [Question01, setQuestion01] = useState();
    const [Question02, setQuestion02] = useState();
    const [Question03, setQuestion03] = useState();
    const [Question04, setQuestion04] = useState();
    const [Question05, setQuestion05] = useState();
    const [TotalWeightAvg, setTotalWeightAvg] = useState();
    const [TotalWeightRank01, setTotalWeightRank01] = useState();
    const [TotalWeightRank02, setTotalWeightRank02] = useState();
    const [TotalWeightRank03, setTotalWeightRank03] = useState();
    const [TotalWeightRank04, setTotalWeightRank04] = useState();
    const [TotalWeightRank05, setTotalWeightRank05] = useState();
    console.log(newData);
    const SubmitEvaluation = (
      evaluation_category_no,
      univ_name,
      T_set,
      rank01_score,
      rank02_score,
      rank03_score,
      rank04_score,
      rank05_score
    ) => {
      Api.addEval(
        evaluation_category_no,
        univ_name,
        T_set,
        rank01_score,
        rank02_score,
        rank03_score,
        rank04_score,
        rank05_score
      ).then((response) => {
        if (response.status === 200) {
          console.log("DB ?????? ?????? ??????");
          console.log(response.data);
          setSubmitted(true);
        }
      });
    };
    useEffect(() => {
      if (count === 0) {
        Api.addDIYRecoHistory(
          9999,
          50,
          30,
          20,
          w1,
          w2,
          w3,
          w4,
          w5,
          Number(w1) + Number(w2) + Number(w3) + Number(w4) + Number(w5),
          univ_name,
          Q2Answer,
          Q3Answer,
          Q4Answer,
          Q5Answer,
          univ_lat,
          univ_lon,
          "T" +
            Q3Answer.split("T")[1] +
            Q4Answer.split("T")[1] +
            Q5Answer.split("T")[1]
        ).then((response) => {
          if (response.status === 200) {
            console.log("DB?????? ??????");
            console.log(response.data);
          }
        });
      }
      if (!popup & !qComplete & !canceled) {
        setTimeout(() => {
          setPopup(true);
        }, 15000);
      }
      if (qComplete & !submitted) {
        SubmitEvaluation(
          1,
          univ_name,
          "T" +
            Q3Answer.split("T")[1] +
            Q4Answer.split("T")[1] +
            Q5Answer.split("T")[1],
          Question01.score,
          Question02.score,
          Question03.score,
          Question04.score,
          Question05.score
        );
      }
      if (count === 1) {
        //???????????? ??????
        const hashtagsTemp = [];

        //???????????????
        const monthlyDepositTemp = [];

        //??????
        const monthlyPayTemp = [];

        //??????
        const reservDepositTemp = [];

        //??????
        const priceTemp = [];

        for (let i = 0; i < data.length; i++) {
          try {
            for (let j = 0; j < data[i].rooms_hash_tags.length; j++) {
              hashtagsTemp.push(data[i].rooms_hash_tags[j]);
            }

            for (let j = 0; j < data[i].rooms_desc.length; j++) {
              hashtagsTemp.push(data[i].rooms_desc[j].split("|")[0].trim());

              hashtagsTemp.push(data[i].rooms_desc2[j].split(",")[0].trim());

              if (data[i].rooms_selling_type[j] == 0) {
                if (data[i].rooms_price_title[j].includes("???")) {
                  monthlyDepositTemp.push(
                    Number(data[i].rooms_price_title[j].split("???")[0]) * 10000
                  );
                  monthlyPayTemp.push(
                    Number(data[i].rooms_price_title[j].split("???")[0]) * 10000
                  );
                } else {
                  monthlyDepositTemp.push(
                    Number(data[i].rooms_price_title[j].split("/")[0])
                  );
                  monthlyPayTemp.push(
                    Number(data[i].rooms_price_title[j].split("/")[1])
                  );
                }
              } else if (data[i].rooms_selling_type[j] == 1) {
                if (data[i].rooms_price_title[j].includes("???")) {
                  reservDepositTemp.push(
                    Number(data[i].rooms_price_title[j].split("???")[0]) * 10000
                  );
                } else {
                  reservDepositTemp.push(Number(data[i].rooms_price_title[j]));
                }
              } else {
                if (data[i].rooms_price_title[j].includes("???")) {
                  priceTemp.push(
                    Number(data[i].rooms_price_title[j].split("???")[0]) * 10000
                  );
                } else {
                  priceTemp.push(Number(data[i].rooms_price_title[j]));
                }
              }
            }
          } catch (e) {}
        }
        setMonthlyDeposit(monthlyDepositTemp);
        setMonthlyPay(monthlyPayTemp);
        setReservDeposit(reservDepositTemp);
        setPrice(priceTemp);
        setHashtags(hashtagsTemp.sort());
        let temp = [];
        if (data.length === 5) {
          temp = [
            {
              weight: "??????",
              "1???": data[0].T1,
              "2???": data[1].T1,
              "3???": data[2].T1,
              "4???": data[3].T1,
              "5???": data[4].T1,
              ??????: Math.round(data[0].T1_avg),
            },
            {
              weight: "?????????",
              "1???": data[0].T2,
              "2???": data[1].T2,
              "3???": data[2].T2,
              "4???": data[3].T2,
              "5???": data[4].T2,
              ??????: Math.round(data[0].T2_avg),
            },
            {
              weight: "?????????",
              "1???": data[0].T3,
              "2???": data[1].T3,
              "3???": data[2].T3,
              "4???": data[3].T3,
              "5???": data[4].T3,
              ??????: Math.round(data[0].T3_avg),
            },
            {
              weight: "??????",
              "1???": data[0].T4,
              "2???": data[1].T4,
              "3???": data[2].T4,
              "4???": data[3].T4,
              "5???": data[4].T4,
              ??????: Math.round(data[0].T4_avg),
            },
            {
              weight: "??????",
              "1???": data[0].T5,
              "2???": data[1].T5,
              "3???": data[2].T5,
              "4???": data[3].T5,
              "5???": data[4].T5,
              ??????: Math.round(data[0].T5_avg),
            },
          ];
        } else if (data.length === 4) {
          temp = [
            {
              weight: "??????",
              "1???": data[0].T1,
              "2???": data[1].T1,
              "3???": data[2].T1,
              "4???": data[3].T1,
              ??????: Math.round(data[0].T1_avg),
            },
            {
              weight: "?????????",
              "1???": data[0].T2,
              "2???": data[1].T2,
              "3???": data[2].T2,
              "4???": data[3].T2,
              ??????: Math.round(data[0].T2_avg),
            },
            {
              weight: "?????????",
              "1???": data[0].T3,
              "2???": data[1].T3,
              "3???": data[2].T3,
              "4???": data[3].T3,
              ??????: Math.round(data[0].T3_avg),
            },
            {
              weight: "??????",
              "1???": data[0].T4,
              "2???": data[1].T4,
              "3???": data[2].T4,
              "4???": data[3].T4,
              ??????: Math.round(data[0].T4_avg),
            },
            {
              weight: "??????",
              "1???": data[0].T5,
              "2???": data[1].T5,
              "3???": data[2].T5,
              "4???": data[3].T5,
              ??????: Math.round(data[0].T5_avg),
            },
          ];
          data.push(data[0]);
        } else if (data.length === 3) {
          temp = [
            {
              weight: "??????",
              "1???": data[0].T1,
              "2???": data[1].T1,
              "3???": data[2].T1,
              ??????: Math.round(data[0].T1_avg),
            },
            {
              weight: "?????????",
              "1???": data[0].T2,
              "2???": data[1].T2,
              "3???": data[2].T2,
              ??????: Math.round(data[0].T2_avg),
            },
            {
              weight: "?????????",
              "1???": data[0].T3,
              "2???": data[1].T3,
              "3???": data[2].T3,
              ??????: Math.round(data[0].T3_avg),
            },
            {
              weight: "??????",
              "1???": data[0].T4,
              "2???": data[1].T4,
              "3???": data[2].T4,
              ??????: Math.round(data[0].T4_avg),
            },
            {
              weight: "??????",
              "1???": data[0].T5,
              "2???": data[1].T5,
              "3???": data[2].T5,
              ??????: Math.round(data[0].T5_avg),
            },
          ];
          data.push(data[0]);
          data.push(data[0]);
        } else if (data.length === 2) {
          temp = [
            {
              weight: "??????",
              "1???": data[0].T1,
              "2???": data[1].T1,
              ??????: Math.round(data[0].T1_avg),
            },
            {
              weight: "?????????",
              "1???": data[0].T2,
              "2???": data[1].T2,
              ??????: Math.round(data[0].T2_avg),
            },
            {
              weight: "?????????",
              "1???": data[0].T3,
              "2???": data[1].T3,
              ??????: Math.round(data[0].T3_avg),
            },
            {
              weight: "??????",
              "1???": data[0].T4,
              "2???": data[1].T4,
              ??????: Math.round(data[0].T4_avg),
            },
            {
              weight: "??????",
              "1???": data[0].T5,
              "2???": data[1].T5,
              ??????: Math.round(data[0].T5_avg),
            },
          ];
          data.push(data[0]);
          data.push(data[0]);
          data.push(data[0]);
        } else if (data.length === 1) {
          temp = [
            {
              weight: "??????",
              "1???": data[0].T1,
              ??????: Math.round(data[0].T1_avg),
            },
            {
              weight: "?????????",
              "1???": data[0].T2,
              ??????: Math.round(data[0].T2_avg),
            },
            {
              weight: "?????????",
              "1???": data[0].T3,
              ??????: Math.round(data[0].T3_avg),
            },
            {
              weight: "??????",
              "1???": data[0].T4,
              ??????: Math.round(data[0].T4_avg),
            },
            {
              weight: "??????",
              "1???": data[0].T5,
              ??????: Math.round(data[0].T5_avg),
            },
          ];
          data.push(data[0]);
          data.push(data[0]);
          data.push(data[0]);
          data.push(data[0]);
        }
        setNewData(temp);
        setTotalWeightAvg(Math.round(data[0].total_weight_avg));
        setTotalWeightRank01(Math.round(data[0].total_weight));
        setTotalWeightRank02(Math.round(data[1].total_weight));
        setTotalWeightRank03(Math.round(data[2].total_weight));
        setTotalWeightRank04(Math.round(data[3].total_weight));
        setTotalWeightRank05(Math.round(data[4].total_weight));
        console.log(hashtags);
        return;
      }
      Api.getResidence(
        univ_name,
        univ_lon,
        univ_lat,
        Q2Answer,
        Q3Answer,
        Q4Answer,
        Q5Answer,
        w1,
        w2,
        w3,
        w4,
        w5
      ).then((response) => {
        let json;
        try {
          json = JSON.parse(response.data);
          setData(json);
          console.log(json);
          setCount(count + 1);
        } catch (e) {
          setCount(0);
        } finally {
        }
      });
    }, [count, isClicked, isHovered, qComplete]);
    //weightcode ????????????
    console.log(w1);
    console.log(w2);
    console.log(w3);
    console.log(w4);
    console.log(w5);

    console.log(isClicked);
    console.log(data);
    console.log(Question01);
    console.log(Question02);
    console.log(Question03);
    console.log(Question04);
    console.log(Question05);
    if (!data) {
      console.log(data);
    }
    //????????? ?????? ??????
    //????????? ????????? ???????????????
    //????????? ?????????????????? ??? ????????? ????????? 00?????? ??????, 00?????? ????????? ???????????? ????????????, ????????? ??????????????? ????????????! ?????? ?????? ??????

    //????????? ???????????? ????????? ????????? ??????(??????)
    return (
      <>
        <Helmet>
          <title>Result</title>
        </Helmet>
        <Wrapper>
          {popup && (
            <QuestionPopup
              popup={popup}
              setPopup={setPopup}
              setQComplete={setQComplete}
              setCanceled={setCanceled}
              QuestionNumber={QuestionNumber}
              setQuestionNumber={setQuestionNumber}
              Question01={Question01}
              setQuestion01={setQuestion01}
              Question02={Question02}
              setQuestion02={setQuestion02}
              Question03={Question03}
              setQuestion03={setQuestion03}
              Question04={Question04}
              setQuestion04={setQuestion04}
              Question05={Question05}
              setQuestion05={setQuestion05}
              TotalWeightAvg={TotalWeightAvg}
              TotalWeightRank01={TotalWeightRank01}
              TotalWeightRank02={TotalWeightRank02}
              TotalWeightRank03={TotalWeightRank03}
              TotalWeightRank04={TotalWeightRank04}
              TotalWeightRank05={TotalWeightRank05}
            />
          )}
          {data && (
            <>
              <>
                <RightFloatingDiv02 isClicked={isClicked}>
                  <BackArrow>
                    <img onClick={() => setDetail(false)} src={Back}></img>
                    <OptionSpan>????????????</OptionSpan>
                  </BackArrow>
                </RightFloatingDiv02>
                <TitleSpan>?????? "{univ_name}"?????? ?????? ???????????? Top5</TitleSpan>
                <SubTitleSpan>
                  ????????? ???????????? ???????????? ?????? ????????? ????????? ????????? ???
                  ????????????.
                </SubTitleSpan>
                <SubTitleSpan>
                  ????????? ???????????? ?????? ????????? ??????????????? ????????? ??? ????????????.
                </SubTitleSpan>
                <Article>
                  <ArticleContentContainer>
                    <LeftContainer>
                      <Map
                        setIsHovered={setIsHovered}
                        setIsClicked={setIsClicked}
                        data={data}
                        univ_lat={univ_lat}
                        univ_lon={univ_lon}
                      />
                    </LeftContainer>

                    <RightContainer>
                      <RadarArticle
                        data={newData}
                        isHovered={isHovered}
                        isClicked={isClicked}
                      />
                    </RightContainer>
                  </ArticleContentContainer>
                </Article>{" "}
                {isClicked && monthlyDeposit && monthlyPay && reservDeposit && (
                  <DetailArticle>
                    <TitleSpan02>?????? ?????? ??????</TitleSpan02>
                    {mode === "main" ? (
                      <SubTitleSpan>
                        ????????? ???????????? ????????? ????????? ??? ??? ????????????.
                      </SubTitleSpan>
                    ) : (
                      <SubTitleSpan>
                        ????????? ???????????? ?????? ????????? ???????????????.
                      </SubTitleSpan>
                    )}
                    <DetailItemContainer>
                      <BarDetailItem
                        isChecked={isChecked}
                        setIsChecked={setIsChecked}
                        isClicked={isClicked}
                        monthlyDeposit={monthlyDeposit}
                        monthlyPay={monthlyPay}
                        reservDeposit={reservDeposit}
                        price={price}
                        mode={mode}
                        setMode={setMode}
                      />
                      <WordcloudDetailItem
                        hashtags={hashtags}
                        mode={mode}
                        setMode={setMode}
                      />
                      <PieDetailItem
                        isClicked={isClicked}
                        mode={mode}
                        setMode={setMode}
                      />
                      <Arrow
                        bottom={"-10vw"}
                        height={window.innerHeight + window.innerHeight - 100}
                      />
                    </DetailItemContainer>
                  </DetailArticle>
                )}
              </>
              {hashtags && isClicked && (
                <DetailArticle>
                  <TitleSpan03>????????? ???????????? ?????? ??????</TitleSpan03>
                  <DetailItemContainer>
                    <DetailItem>
                      <SubTitleSpan>
                        ????????? ????????? ???????????? ??????????????????.
                      </SubTitleSpan>
                      <Wordcloud hashtags={hashtags} />
                    </DetailItem>
                    <DetailItem>
                      <SubTitleSpan>
                        ????????? ????????? ?????? ???????????????.
                      </SubTitleSpan>
                      <PieRoom isClicked={isClicked} />
                    </DetailItem>
                  </DetailItemContainer>
                </DetailArticle>
              )}
            </>
          )}
          {!data && (
            <Article>
              <Loader />
            </Article>
          )}
        </Wrapper>
      </>
    );
  }
);

export default RecommendationResult;

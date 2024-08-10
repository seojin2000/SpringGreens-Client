'use client';
import React from 'react';
import { styled } from '@mui/material/styles';
const Q1 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  flexDirection: `column`,
  width: `100vw`,
  height: `100vh`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  position: `relative`,
  overflow: `hidden`,
  '@media (max-width: 1024px)': {
    height: `auto`, // 더 작은 화면에서 자동 높이 조정
  },
  '@media (max-width: 768px)': {
    padding: `0 16px`, // 모바일 화면에서 패딩 추가
  },
});

const Rectangle47 = styled("div")({
  backgroundColor: `rgba(217, 223, 255, 1)`,
  borderRadius: `8px`,
  width: `310px`,
  height: `211px`,
  position: `absolute`,
  top: `134px`,
  '@media (max-width: 1024px)': {
    width: `90%`, // 화면에 맞게 조정
    height: `auto`,
    top: `20px`,
  },
  '@media (max-width: 768px)': {
    width: `100%`,
    top: `20px`,
  },
});

const Rectangle48 = styled("div")({
  backgroundColor: `rgba(255, 227, 194, 1)`,
  borderRadius: `8px`,
  width: `310px`,
  height: `211px`,
  position: `absolute`,
  top: `391px`,
  '@media (max-width: 1024px)': {
    width: `90%`,
    height: `auto`,
    top: `240px`,
  },
  '@media (max-width: 768px)': {
    width: `100%`,
    top: `240px`,
  },
});

const Q2 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  top: `52px`,
  '@media (max-width: 1024px)': {
    fontSize: `18px`,
    top: `10px`,
    textAlign: `center`,
    width: `90%`,
  },
  '@media (max-width: 768px)': {
    fontSize: `16px`,
    top: `10px`,
  },
});

const MingcuteLeftLine = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `32px`,
  height: `32px`,
  left: `9px`,
  top: `52px`,
  overflow: `hidden`,
  '@media (max-width: 1024px)': {
    left: `5px`,
  },
  '@media (max-width: 768px)': {
    left: `3px`,
  },
});

const Group = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `32px`,
  height: `32px`,
  left: `0px`,
  top: `0px`,
  '@media (max-width: 1024px)': {
    width: `28px`,
    height: `28px`,
  },
  '@media (max-width: 768px)': {
    width: `24px`,
    height: `24px`,
  },
});

const Vector = styled("img")({
  height: `32px`,
  width: `32px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
  '@media (max-width: 1024px)': {
    width: `28px`,
    height: `28px`,
  },
  '@media (max-width: 768px)': {
    width: `24px`,
    height: `24px`,
  },
});

const Vector1 = styled("img")({
  height: `17.75px`,
  width: `10.23px`,
  position: `absolute`,
  left: `11px`,
  top: `7px`,
  '@media (max-width: 1024px)': {
    width: `18px`,
    height: `10px`,
    left: `8px`,
    top: `5px`,
  },
  '@media (max-width: 768px)': {
    width: `16px`,
    height: `8px`,
    left: `6px`,
    top: `4px`,
  },
});

const Q3 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(48, 79, 254, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `65px`,
  height: `20px`,
  position: `absolute`,
  top: `158px`,
  '@media (max-width: 1024px)': {
    fontSize: `12px`,
    width: `60px`,
    top: `120px`,
  },
  '@media (max-width: 768px)': {
    fontSize: `10px`,
    width: `50px`,
    top: `100px`,
  },
});

const Q4 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 142, 60, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `65px`,
  height: `20px`,
  position: `absolute`,
  top: `415px`,
  '@media (max-width: 1024px)': {
    fontSize: `12px`,
    width: `60px`,
    top: `370px`,
  },
  '@media (max-width: 768px)': {
    fontSize: `10px`,
    width: `50px`,
    top: `340px`,
  },
});

const Group101 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `310px`,
  height: `60px`,
  top: `693px`,
  '@media (max-width: 1024px)': {
    width: `90%`,
    height: `50px`,
    top: `620px`,
  },
  '@media (max-width: 768px)': {
    width: `100%`,
    height: `45px`,
    top: `580px`,
  },
});

const Rectangle31 = styled("div")({
  backgroundColor: `rgba(48, 79, 254, 1)`,
  borderRadius: `6px`,
  width: `310px`,
  height: `60px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
  '@media (max-width: 1024px)': {
    width: `100%`,
    height: `50px`,
  },
  '@media (max-width: 768px)': {
    width: `100%`,
    height: `45px`,
  },
});

const Q5 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  top: `20px`,
  left: `0px`,
  right: `0px`,
  bottom: `0px`,
  '@media (max-width: 1024px)': {
    fontSize: `14px`,
    top: `15px`,
  },
  '@media (max-width: 768px)': {
    fontSize: `12px`,
    top: `10px`,
  },
});

const DomesticBusiness = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(48, 79, 254, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `300`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `145px`,
  height: `16px`,
  position: `absolute`,
  top: `178px`,
  '@media (max-width: 768px)': {
    fontSize: `10px`,
    width: `120px`,
    top: `150px`,
  },
});

const GeneralUser = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 142, 60, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `300`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `145px`,
  height: `16px`,
  position: `absolute`,
  top: `435px`,
  '@media (max-width: 768px)': {
    fontSize: `10px`,
    width: `120px`,
    top: `400px`,
  },
});

const Q6Span1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(48, 79, 254, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `300`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Q6Span2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `300`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Q6Span3 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(48, 79, 254, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `300`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Q6Span4 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `300`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Q6Span5 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(48, 79, 254, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `300`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Q6Span6 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `300`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Q6Span7 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(48, 79, 254, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `300`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Q6Span8 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `300`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Q6Span9 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(48, 79, 254, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `300`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Q6Span10 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `300`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Q6 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `300`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `266px`,
  height: `106px`,
  position: `absolute`,
  top: `224px`,
  lineHeight: `16px`,
  '@media (max-width: 768px)': {
    fontSize: `10px`,
    width: `100%`,
    height: `auto`,
    top: `180px`,
  },
});

const Q7Span1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 142, 60, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `300`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Q7Span2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `300`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Q7Span3 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 142, 60, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `300`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Q7Span4 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `300`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Q7Span5 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 142, 60, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `300`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Q7Span6 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `300`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Q7 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `300`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `276px`,
  height: `106px`,
  position: `absolute`,
  top: `481px`,
  lineHeight: `16px`,
  '@media (max-width: 768px)': {
    fontSize: `10px`,
    width: `100%`,
    height: `auto`,
    top: `380px`,
  },
});

const Line8 = styled("div")({
  border: `1px solid rgba(0, 0, 0, 0.06)`,
  width: `266px`,
  height: `0px`,
  position: `absolute`,
  top: `201px`,
  '@media (max-width: 768px)': {
    width: `100%`,
    top: `160px`,
  },
});

const Line9 = styled("div")({
  border: `1px solid rgba(0, 0, 0, 0.06)`,
  width: `266px`,
  height: `0px`,
  position: `absolute`,
  top: `458px`,
  '@media (max-width: 768px)': {
    width: `100%`,
    top: `380px`,
  },
});

function RegisterKind() {
  return (
    <Q1>
      <Rectangle47></Rectangle47>
      <Rectangle48></Rectangle48>
      <Q2>{`회원 유형 선택`}</Q2>
      <Q3>{`국내사업자`}</Q3>
      <Q4>{`일반사용자`}</Q4>
      <Group101>
        <Rectangle31></Rectangle31>
        <Q5>{`선택완료`}</Q5>
      </Group101>
      <DomesticBusiness>{`Domestic business`}</DomesticBusiness>
      <GeneralUser>{`General user`}</GeneralUser>
      <Q6>
        <Q6Span1>{`도매업자`}</Q6Span1>
        <Q6Span2>{` 및 `}</Q6Span2>
        <Q6Span3>{`소매업자`}</Q6Span3>
        <Q6Span4>{`를 위한 회원 유형입니다. 
이 유형을 선택하면 `}</Q6Span4>
        <Q6Span5>{`사업자 등록증`}</Q6Span5>
        <Q6Span6>{` 확인이 필요합니다. 
`}</Q6Span6>
        <Q6Span7>{`실시간 광고 등록 시스템`}</Q6Span7>
        <Q6Span8>{`으로 광고 효과를 극대화합니다.
현재 입장한 `}</Q6Span8>
        <Q6Span9>{`구독 사용자들`}</Q6Span9>
        <Q6Span10>{`에게 알림을 전달할 수 있습니다.
사업 관련 최신 정보를 받아보세요.`}</Q6Span10>
      </Q6>
      <Q7>
        <Q7Span1>{`사업자가 아닌 모든 사람들`}</Q7Span1>
        <Q7Span2>{`을 위한 유형입니다.
`}</Q7Span2>
        <Q7Span3>{`분 단위로 변하는 상품`}</Q7Span3>
        <Q7Span4>{`을 한 눈에 확인할 수 있습니다.
관심있는 `}</Q7Span4>
        <Q7Span5>{`가게를 구독하고 알림`}</Q7Span5>
        <Q7Span6>{`을 받아볼 수 있습니다.

`}</Q7Span6>
      </Q7>
      <Line8></Line8>
      <Line9></Line9>
    </Q1>
  );
}

export default RegisterKind;

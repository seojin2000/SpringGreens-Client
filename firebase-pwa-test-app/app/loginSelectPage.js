'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { styled, keyframes } from '@mui/material/styles';

// 애니메이션 정의
const scaleUp = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1.05);
  }
`;


const Q1 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  flexDirection: `column`, // 수직 정렬을 위한 flexDirection
  width: `100vw`,
  height: `100dvh`, // 전체 화면 높이
  justifyContent: `center`, // 중앙 정렬
  alignItems: `center`, // 중앙 정렬
  padding: `0px`,
  boxSizing: `border-box`,
  position: `relative`, // 내부 요소들이 이 요소를 기준으로 위치를 잡음
  overflow: `hidden` // 화면 넘침 방지
});

const Rectangle47 = styled("div")(({ isActive }) => ({
  backgroundColor: `rgba(217, 223, 255, 1)`,
  borderRadius: `8px`,
  width: `310px`,
  height: `211px`,
  position: `absolute`,
  top: `134px`,
  transition: `transform 0.3s ease`,
  transform: isActive ? `scale(1.05)` : `scale(1)`,
  animation: isActive ? `${scaleUp} 0.6s ease` : 'none',
}));

const Rectangle48 = styled("div")(({ isActive }) => ({
  backgroundColor: `rgba(255, 227, 194, 1)`,
  borderRadius: `8px`,
  width: `310px`,
  height: `211px`,
  position: `absolute`,
  top: `391px`,
  transition: `transform 0.3s ease`,
  transform: isActive ? `scale(1.05)` : `scale(1)`,
  animation: isActive ? `${scaleUp} 0.6s ease` : 'none',
}));

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
});

const Vector = styled("img")({
  height: `32px`,
  width: `32px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Vector1 = styled("img")({
  height: `17.75px`,
  width: `10.23px`,
  position: `absolute`,
  left: `11px`,
  top: `7px`,
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
});

const Rectangle31 = styled("div")({
  backgroundColor: `rgba(48, 79, 254, 1)`,
  borderRadius: `6px`,
  width: `310px`,
  height: `60px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Q5 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  position: `absolute`,
  left: `113px`,
  top: `18px`,
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
  lineHeight: `16px`
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
  lineHeight: `16px`
});

const Line8 = styled("div")({
  border: `1px solid rgba(0, 0, 0, 0.06)`,
  width: `266px`,
  height: `0px`,
  position: `absolute`,
  top: `201px`,
});

const Line9 = styled("div")({
  border: `1px solid rgba(0, 0, 0, 0.06)`,
  width: `266px`,
  height: `0px`,
  position: `absolute`,
  top: `458px`,
});

function RegisterKind() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);

  const handleSelection = (type) => {
    setSelected(type);
  };

  const handleSubmit = () => {
    if (selected === 'domestic') {
      router.push('/domestic');
    } else if (selected === 'general') {
      router.push('/general');
    }
  };



  return (
    <Q1>
      <Rectangle47 
        isActive={selected === 'domestic'} 
        onClick={() => handleSelection('domestic')} 
      />
      <Rectangle48 
        isActive={selected === 'general'} 
        onClick={() => handleSelection('general')} 
      />
      <Q3>{`국내사업자`}</Q3>
      <Q4>{`일반사용자`}</Q4>
      <Group101 onClick={() => handleSubmit()}>
        <Rectangle31 ></Rectangle31>
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

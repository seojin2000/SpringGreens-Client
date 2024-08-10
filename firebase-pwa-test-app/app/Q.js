"use client";
import React from 'react';
import { styled } from '@mui/material/styles';

// 스타일 정의
const Q1 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `360px`,
  height: `800px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Group82 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `261px`,
  height: `18px`,
  left: `50px`,
  top: `517px`,
});

const ListItemForgotYour = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(136, 136, 136, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`, // 새로운 글씨체 적용
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.5px`,
  textDecoration: `none`,
  lineHeight: `17px`,
  textTransform: `none`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const ListItemLinkSignUp = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(136, 136, 136, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`, // 새로운 글씨체 적용
  fontWeight: `400`,
  fontSize: `13.234375px`,
  letterSpacing: `-0.5px`,
  textDecoration: `underline`,
  lineHeight: `17px`,
  textTransform: `none`,
  position: `absolute`,
  left: `190px`,
  top: `1px`,
});

const ListItem = styled("div")({
  backgroundColor: `rgba(218, 218, 218, 1)`,
  borderRadius: `0.5px`,
  width: `1px`,
  height: `12px`,
  position: `absolute`,
  left: `181px`,
  top: `4px`,
});

const TabpanelButton = styled("div")({
  backgroundColor: `rgba(48, 79, 254, 1)`,
  border: `1px solid rgba(0, 0, 0, 0.15)`,
  boxSizing: `border-box`,
  borderRadius: `6px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,  // 버튼 중앙 정렬
  alignItems: `center`,
  padding: `0px`,
  width: `300px`,
  height: `43px`,
  left: `30px`,
  top: `388px`,
});

const Q2 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`, // 새로운 글씨체 적용
  fontWeight: `400`,
  fontSize: `15px`,
  letterSpacing: `-0.5px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
});

const TabpanelButton1 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(0, 0, 0, 0.15)`,
  boxSizing: `border-box`,
  borderRadius: `6px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `center`,  // 버튼 중앙 정렬
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  width: `300px`,
  height: `43px`,
  left: `30px`,
  top: `444px`,
});

const Q3 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`, // 새로운 글씨체 적용
  fontWeight: `400`,
  fontSize: `15px`,
  letterSpacing: `-0.5px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
});

const Tabpanel = styled("div")({
    border: `1px solid rgba(34, 34, 34, 0.12)`,
    boxSizing: `border-box`,
    borderRadius: `6px 6px 0px 0px`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    width: `298px`,
    height: `48px`,
    left: `30px`,
    top: `182px`,
    backgroundColor: `rgba(255, 255, 255, 1)`,  // 하얀색 배경 추가
});
  

const SpanIconId = styled("img")({
  height: `16px`,
  width: `16px`,
  position: `absolute`,
  left: `18px`,
  top: `16px`,
});

const InputField = styled("input")({
    width: `100%`,
    height: `100%`,
    border: `none`,
    outline: `none`,
    fontFamily: `Arial`, // 새로운 글씨체 적용
    fontSize: `14px`,
    color: `rgba(0, 0, 0, 1)`,
    padding: `5px 10px`,
    backgroundColor: `rgba(255, 255, 255, 1)`,  // 배경색을 흰색으로 설정
  });

const Tabpanel1 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,  // 하얀색 배경 추가
    boxShadow: `0px 2px 6px rgba(68, 68, 68, 0.08)`,
    border: `1px solid rgba(34, 34, 34, 0.12)`,
    boxSizing: `border-box`,
    borderRadius: `0px 0px 6px 6px`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    width: `298px`,
    height: `48px`,
    left: `30px`,
    top: `242px`,
  });

const SpanIconPw = styled("img")({
  height: `16px`,
  width: `16px`,
  position: `absolute`,
  left: `18px`,
  top: `16px`,
});

const TabpanelLabelStaySig = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(34, 34, 34, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`, // 새로운 글씨체 적용
  fontWeight: `500`,
  fontSize: `13px`,
  letterSpacing: `-0.5px`,
  textDecoration: `none`,
  lineHeight: `17px`,
  textTransform: `none`,
  width: `83.5px`,
  height: `17px`,
  position: `absolute`,
  left: `55px`,
  top: `306px`,
});

const Q6 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`, // 새로운 글씨체 적용
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `70px`,
  height: `46px`,
  position: `absolute`,
  left: `153px`,
  top: `124px`,
});

function Q() {
  return (
    <Q1>
      <Group82>
        <ListItemForgotYour>
          {`혹시 비밀번호를 잃어버렸나요?`}
        </ListItemForgotYour>
        <ListItemLinkSignUp>
          {`비밀번호찾기`}
        </ListItemLinkSignUp>
        <ListItem />
      </Group82>
      <TabpanelButton>
        <Q2>{`로그인`}</Q2>
      </TabpanelButton>
      <TabpanelButton1>
        <Q3>{`회원가입`}</Q3>
      </TabpanelButton1>
      <Tabpanel>
        {/* <SpanIconId src="/id-icon.png" alt="ID Icon" /> */}
        <InputField type="email" placeholder="이메일을 입력하세요" />
      </Tabpanel>
      <Tabpanel1>
        {/* <SpanIconPw src="/pw-icon.png" alt="Password Icon" /> */}
        <InputField type="password" placeholder="비밀번호를 입력하세요" />
      </Tabpanel1>
      <TabpanelLabelStaySig>{`로그인 상태 유지`}</TabpanelLabelStaySig>
      <Q6>{`로그인`}</Q6>
    </Q1>
  );
}

export default Q;

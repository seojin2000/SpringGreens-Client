"use client";
import React from 'react';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation'
// 스타일 정의
const Q1 = styled("div")(({ theme }) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  justifyContent: `center`,
  padding: `20px`,
  boxSizing: `border-box`,
  width: `100vw`,  // viewport 너비에 맞추기
  height: `100vh`, // viewport 높이에 맞추기
  overflow: `auto`,
}));

const Group82 = styled("div")(({ theme }) => ({
  display: `flex`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  width: `100%`,
  marginBottom: `20px`,
}));

const ListItemForgotYour = styled("div")({
  textAlign: `center`,
  color: `rgba(136, 136, 136, 1)`,
  fontFamily: `Arial`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `-0.5px`,
  lineHeight: `17px`,
  marginTop: `30px`,
});

const ListItemLinkSignUp = styled("div")({
  textAlign: `center`,
  color: `rgba(136, 136, 136, 1)`,
  fontFamily: `Arial`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `-0.5px`,
  textDecoration: `underline`,
  lineHeight: `17px`,
  marginTop: `30px`,
  marginLeft: `10px`
});


const TabpanelButton = styled("div")(({ theme }) => ({
  backgroundColor: `rgba(48, 79, 254, 1)`,
  border: `1px solid rgba(0, 0, 0, 0.15)`,
  borderRadius: `6px`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0`,
  width: `100%`,
  maxWidth: `300px`,
  height: `43px`,
  marginTop: `50px`,
}));

const Q2 = styled("div")({
  textAlign: `center`,
  color: `rgba(255, 255, 255, 1)`,
  fontFamily: `Arial`,
  fontWeight: `400`,
  fontSize: `15px`,
  letterSpacing: `-0.5px`,
  lineHeight: `24px`,
});

const TabpanelButton1 = styled("div")(({ theme }) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(0, 0, 0, 0.15)`,
  borderRadius: `6px`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0`,
  width: `100%`,
  maxWidth: `300px`,
  height: `43px`,
  marginTop: `10px`,
}));

const Q3 = styled("div")({
  textAlign: `center`,
  color: `rgba(0, 0, 0, 1)`,
  fontFamily: `Arial`,
  fontWeight: `400`,
  fontSize: `15px`,
  letterSpacing: `-0.5px`,
  lineHeight: `24px`,
});

const Tabpanel = styled("div")(({ theme }) => ({
  border: `1px solid rgba(34, 34, 34, 0.12)`,
  borderRadius: `6px 6px 0 0`,
  display: `flex`,
  alignItems: `center`,
  padding: `0`,
  width: `100%`,
  maxWidth: `298px`,
  height: `48px`,
  marginTop: `20px`,
  backgroundColor: `rgba(255, 255, 255, 1)`,
}));

const InputField = styled("input")({
  width: `100%`,
  height: `100%`,
  border: `none`,
  outline: `none`,
  fontFamily: `Arial`,
  fontSize: `14px`,
  color: `rgba(0, 0, 0, 1)`,
  padding: `5px 10px`,
  backgroundColor: `rgba(255, 255, 255, 1)`,
});

const Tabpanel1 = styled("div")(({ theme }) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 2px 6px rgba(68, 68, 68, 0.08)`,
  border: `1px solid rgba(34, 34, 34, 0.12)`,
  borderRadius: `0 0 6px 6px`,
  display: `flex`,
  alignItems: `center`,
  padding: `0`,
  width: `100%`,
  maxWidth: `298px`,
  height: `48px`,
  marginTop: `10px`,
}));

const TabpanelLabelStaySig = styled("div")({
  textAlign: `left`,
  color: `rgba(34, 34, 34, 1)`,
  fontFamily: `Arial`,
  fontWeight: `500`,
  fontSize: `13px`,
  letterSpacing: `-0.5px`,
  lineHeight: `17px`,
  marginTop: `20px`,
});

const Q6 = styled("div")({
  textAlign: `left`,
  color: `rgba(0, 0, 0, 1)`,
  fontFamily: `Arial`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0`,
  lineHeight: `24px`,
  marginBottom: `20px`,
});

function Q() {
  const router = useRouter(); // useRouter 훅 호출

  const handleSignUpClick = () => {
    router.push("/loginSelect"); // /loginSelectPage로 이동
  };

  return (
    <Q1>
      <Q6>{`로그인`}</Q6>
      <Tabpanel>
        <InputField type="email" placeholder="  이메일을 입력하세요" />
      </Tabpanel>
      
      <Tabpanel1>
        <InputField type="password" placeholder="  비밀번호를 입력하세요" />
      </Tabpanel1>

      <TabpanelButton>
        <Q2>{`로그인`}</Q2>
      </TabpanelButton>

      <TabpanelButton1 onClick={handleSignUpClick}>
        <Q3>{`회원가입`}</Q3>
      </TabpanelButton1>

      <Group82>
        <ListItemForgotYour>
          {`혹시 비밀번호를 잃어버렸나요?`}
        </ListItemForgotYour>
        <ListItemLinkSignUp>
          {`비밀번호찾기`}
        </ListItemLinkSignUp>
      </Group82>    
    </Q1>
  );
}

export default Q;

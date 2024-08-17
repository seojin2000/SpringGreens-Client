"use client";
import React, {useRef} from 'react';
import { styled } from '@mui/material/styles';
import { useAuth } from '../../src/context/AuthContext';
import { useRouter } from 'next/navigation'
import  Navbar  from '../components/Navbar';
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
  marginTop: `0.5rem`,
  marginBottom: `1.5rem`,
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
  marginBottom: `2rem`,
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
  marginBottom: `3rem`,
});

// let accessToken = null;
function Q() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { accessToken, setAccessToken } = useAuth(); // Context API에서 accessToken과 setAccessToken 가져오기
  
  const router = useRouter(); // useRouter 훅 호출

  const handleSignUpClick = () => {
    router.push("/loginSelectPage"); // /loginSelectPage로 이동
  };

  // 로그인 버튼을 클릭했을 때, 로그인 JSON을 보내자.
  // 로그인 버튼 클릭 시 호출되는 함수
  const sendLogin = async (event) => {

    // ref를 사용하여 이메일과 비밀번호 값을 가져옴
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("이메일 패스워드");
    console.log(email, password);
    // 서버로 보낼 로그인 데이터
    const loginData = {
      email: email,
      password: password,
    };

    try {
      // 서버에 로그인 요청을 보냅니다.
      // cors를 허용했기 때문에, 데이터를 잘 받아온다.
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      // 서버 응답 확인
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }


      // 응답을 JSON으로 파싱
      const data = await response.json();
      console.log('Login successful:', data);

      console.log("액세스 토큰 저장 In-memory : ", data.data.access_token);
      // 전역적으로 액세스 토큰을 사용하기 위해서
      setAccessToken(data.data.access_token);


      if(data.status_code == 200) {
        router.push('/mainPage');
        event.preventDefault();
      }

    } catch (error) {
      console.error('Login failed:', error);
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Q1>
      <Q6>{`로그인`}</Q6>
      
      <Tabpanel>
        <InputField ref={emailRef} type="email" placeholder="  이메일을 입력하세요" />
      </Tabpanel>
      
      <Tabpanel1>
        <InputField ref={passwordRef} type="password" placeholder="  비밀번호를 입력하세요" />
      </Tabpanel1>


      <TabpanelButton onClick={sendLogin}>
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

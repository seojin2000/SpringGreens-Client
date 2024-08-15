import React from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';

// 전체 컴포넌트 컨테이너
const Q1 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  flexDirection: `column`, // 수직 정렬을 위해 column 사용
  justifyContent: `center`, // 수직 중앙 정렬
  alignItems: `center`, // 수평 중앙 정렬
  width: `100vw`,
  height: `100vh`,
  boxSizing: `border-box`,
  margin: `0 auto`, // 화면 중앙에 위치하도록 추가
  overflow: 'auto',
});

// 타이틀 텍스트 스타일링
const Q2 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Arial`,
  fontWeight: `400`,
  fontSize: `20px`,
  textDecoration: `none`,
  marginBottom: `20px`, // 타이틀과 버튼 사이에 간격 추가
});

// 버튼 그룹 스타일링
const Group80 = styled("div")({
  marginBottom: '35px',
});

// 포인터 커서를 위한 이미지 스타일링
const StyledImage = styled(Image)({
  cursor: 'pointer',
});

function SocialLogin() {
  return (
    <Q1>
      {/* 네이버 로그인 버튼 */}
      <Group80>
        <StyledImage 
          src="/images/login/naver_login.png" 
          alt="Naver Login" 
          width={350} 
          height={60} 
          loading="lazy" 
        />
      </Group80>

      {/* 카카오 로그인 버튼 */}
      <Group80>
        <StyledImage 
          src="/images/login/kakao_login.png" 
          alt="Kakao Login" 
          width={350} 
          height={60} 
          loading="lazy" 
        />
      </Group80>

      {/* 구글 로그인 버튼 */}
      <Group80>
        <StyledImage 
          src="/images/login/google_login.png" 
          alt="Google Login" 
          width={350} 
          height={60} 
          loading="lazy" 
        />
      </Group80>
    </Q1>
  );
}

export default SocialLogin;

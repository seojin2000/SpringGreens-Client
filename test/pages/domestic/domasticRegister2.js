'use client';
import { React, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRegister } from '../../src/context/RegisterContext';
import {
  styled
} from '@mui/material/styles';



const Q1 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  flexDirection: `row`,
  width: `100vw`,
  height: `100vh`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `auto`,
});

const Q2 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Noto Sans KR`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  top: `54px`,
});

const Group101 = styled("div")({
  display: `flex`,
  textAlign: `center`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `320px`,
  height: `60px`,
  top: `953px`,
});

const Rectangle31 = styled("div")({
  backgroundColor: `rgba(48, 79, 254, 1)`,
  borderRadius: `6px`,
  width: `320px`,
  height: `60px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Q3 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  position: `absolute`,
  top: `18px`,
});


const Component13 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `320px`,
  height: `87px`,
  top: `107px`,
});

const Rectangle26 = styled("div")({
  border: `1px solid rgba(153, 153, 153, 0.25)`,
  boxSizing: `border-box`,
  borderRadius: `6px`,
  width: `320px`,
  height: `50px`,
  position: `absolute`,
  left: `0px`,
  top: `32px`,
});

const Q4 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(34, 34, 34, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `306px`,
  position: `absolute`,
  top: `0px`,
});

const Q5 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(153, 153, 153, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `300`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `304px`,
  height: `21px`,
  position: `absolute`,
  top: `46px`,
});

const Component14 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `320px`,
  height: `87px`,
  top: `225px`,
});

const Rectangle261 = styled("div")({
  border: `1px solid rgba(153, 153, 153, 0.25)`,
  boxSizing: `border-box`,
  borderRadius: `6px`,
  width: `320px`,
  height: `50px`,
  position: `absolute`,
  left: `0px`,
  top: `32px`,
});

const Q6 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(34, 34, 34, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `306px`,
  position: `absolute`,
  top: `0px`,
});

const Q7 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(153, 153, 153, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `300`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `304px`,
  height: `21px`,
  position: `absolute`,
  top: `46px`,
});

const Component15 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `320px`,
  height: `87px`,
  top: `343px`,
});

const Rectangle262 = styled("div")({
  border: `1px solid rgba(153, 153, 153, 0.25)`,
  boxSizing: `border-box`,
  borderRadius: `6px`,
  width: `320px`,
  height: `50px`,
  position: `absolute`,
  left: `0px`,
  top: `32px`,
});

const Q8 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(34, 34, 34, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `306px`,
  position: `absolute`,
  top: `0px`,
});

const Q9 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(153, 153, 153, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `300`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `304px`,
  height: `21px`,
  position: `absolute`,

  top: `46px`,
});

const Component16 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `320px`,
  height: `87px`,

  top: `461px`,
});

const Rectangle263 = styled("div")({
  border: `1px solid rgba(153, 153, 153, 0.25)`,
  boxSizing: `border-box`,
  borderRadius: `6px`,
  width: `320px`,
  height: `50px`,
  position: `absolute`,
  left: `0px`,
  top: `32px`,
});

const Q10 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(34, 34, 34, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `306px`,
  position: `absolute`,

  top: `0px`,
});

const Q11 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(153, 153, 153, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `300`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `304px`,
  height: `21px`,
  position: `absolute`,
  top: `46px`,
});

const Component17 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `320px`,
  height: `87px`,
  top: `579px`,
});

const Rectangle264 = styled("div")({
  border: `1px solid rgba(153, 153, 153, 0.25)`,
  boxSizing: `border-box`,
  borderRadius: `6px`,
  width: `320px`,
  height: `50px`,
  position: `absolute`,
  left: `0px`,
  top: `32px`,
});

const Q12 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(34, 34, 34, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `306px`,
  position: `absolute`,
  top: `0px`,
});

const Q13 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(153, 153, 153, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `300`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `304px`,
  height: `21px`,
  position: `absolute`,
  top: `46px`,
});

const Component18 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `320px`,
  height: `87px`,
  top: `697px`,
});

const Rectangle265 = styled("div")({
  border: `1px solid rgba(153, 153, 153, 0.25)`,
  boxSizing: `border-box`,
  borderRadius: `6px`,
  width: `320px`,
  height: `50px`,
  position: `absolute`,
  left: `0px`,
  top: `32px`,
});

const Q14 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(34, 34, 34, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `306px`,
  position: `absolute`,
  left: `4px`,
  top: `0px`,
});

const Q0900 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(153, 153, 153, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `300`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `304px`,
  height: `21px`,
  position: `absolute`,
  top: `46px`,
});

const Component19 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `320px`,
  height: `87px`,
  top: `815px`,
});

const Rectangle266 = styled("div")({
  border: `1px solid rgba(153, 153, 153, 0.25)`,
  boxSizing: `border-box`,
  borderRadius: `6px`,
  width: `320px`,
  height: `50px`,
  position: `absolute`,
  left: `0px`,
  top: `32px`,
});

const Q15 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(34, 34, 34, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `306px`,
  position: `absolute`,
  top: `0px`,
});

const Q2300 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(153, 153, 153, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `300`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `304px`,
  height: `21px`,
  position: `absolute`,
  top: `46px`,
});

const InputField = styled('input')({
    border: `1px solid rgba(153, 153, 153, 0.25)`,
    boxSizing: `border-box`,
    borderRadius: `6px`,
    width: `320px`,
    height: `50px`,
    position: `absolute`,
    left: `0px`,
    top: `32px`,
    color: '#000', // 글자 색상을 검정색으로 설정
    backgroundColor: '#fff', // 배경색을 흰색으로 설정
  });

  function DomasticRegister2() {
    const { registerData } = useRegister();
    const router = useRouter();
  
    // 폼 데이터 상태
    const [formData, setFormData] = useState({
      shopName: '',
      shopContact: '',
      intro: '',
      shopRoadAddress: '',
      shopAddressDetail: '',
      startTime: '',
      endTime: '',
    });
  
    // 입력 필드 변경 처리
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    // 폼 제출 처리
    const handleSubmit = async () => {
      const fullData = {
        name: registerData.name,
        email: registerData.email,
        password: registerData.password,
        contact: registerData.phone,
        businessNumber: registerData.businessNumber,
        roadAddress: registerData.roadAddress,
        addressDetails: registerData.detailedAddress,
        shopName: formData.shopName,
        shopContact: formData.shopContact,
        intro: formData.intro,
        shopRoadAddress: formData.shopRoadAddress,
        shopAddressDetail: formData.shopAddressDetail,
        profileType: false, // 또는 'Wholesale'로 설정, 예: 'Domestic'
        startTime: formData.startTime,
        endTime: formData.endTime,
      };
  
      console.log(fullData);
      try {
        const response = await fetch('http://localhost:8080/signup/wholesale', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(fullData),
        });
  
        if (response.ok) {
          console.log('Successfully registered:', await response.json());
          // router.push('/success'); // 성공 후 이동할 페이지
          router.push("/loginPage");
        } else {
          console.error('Failed to register:', response.statusText);
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
      }
    };
  
    return (
      <Q1>
        <Q2>
          {`회원가입`}
        </Q2>
        <Group101>
          <Rectangle31 onClick={handleSubmit}></Rectangle31>
          <Q3>
            {`가게 등록하기`}
          </Q3>
        </Group101>
        <Component13>
          <Rectangle26></Rectangle26>
          <Q4>{`가게 이름`}</Q4>
          <InputField
            type='text'
            name='shopName'
            placeholder='가게 이름을 입력해주세요'
            value={formData.shopName}
            onChange={handleChange}
          />
        </Component13>
        <Component14>
          <Rectangle261></Rectangle261>
          <Q6>{`가게 연락처`}</Q6>
          <InputField
            type='text'
            name='shopContact'
            placeholder='가게 연락처를 입력해주세요'
            value={formData.shopContact}
            onChange={handleChange}
          />
        </Component14>
        <Component15>
          <Rectangle262></Rectangle262>
          <Q8>{`간단 소개`}</Q8>
          <InputField
            type='text'
            name='intro'
            placeholder='가게를 간단하게 소개해 주세요'
            value={formData.intro}
            onChange={handleChange}
          />
        </Component15>
        <Component16>
          <Rectangle263></Rectangle263>
          <Q10>{`가게 도로명 주소`}</Q10>
          <InputField
            type='text'
            name='shopRoadAddress'
            placeholder='가게 도로명 주소를 입력해 주세요'
            value={formData.shopRoadAddress}
            onChange={handleChange}
          />
        </Component16>
        <Component17>
          <Rectangle264></Rectangle264>
          <Q12>{`가게 상세 주소`}</Q12>
          <InputField
            type='text'
            name='shopAddressDetail'
            placeholder='가게 상세 주소를 입력해 주세요'
            value={formData.shopAddressDetail}
            onChange={handleChange}
          />
        </Component17>
        <Component18>
          <Rectangle265></Rectangle265>
          <Q14>{`영업시작시간`}</Q14>
          <InputField
            type='text'
            name='startTime'
            placeholder='영업시작시간을 입력해 주세요'
            value={formData.startTime}
            onChange={handleChange}
          />
        </Component18>
        <Component19>
          <Rectangle266></Rectangle266>
          <Q15>{`영업종료시간`}</Q15>
          <InputField
            type='text'
            name='endTime'
            placeholder='영업종료시간을 입력해 주세요'
            value={formData.endTime}
            onChange={handleChange}
          />
        </Component19>
      </Q1>
    );
  }
  
  export default DomasticRegister2;
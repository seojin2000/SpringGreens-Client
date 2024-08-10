'use client';
import React from 'react';

import {
  styled
} from '@mui/material/styles';

const Q1 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `100vw`,
  height: `100vh`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `auto`
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
  left: `132px`,
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

const Q3 = styled(Q)({
  height: `45px`,
  position: `absolute`,
  left: `30px`,
  top: `340px`,
});

const Group81 = styled("div")({
  boxShadow: `0px 0px 16.100000381469727px rgba(0, 0, 0, 0.1)`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `300px`,
  height: `45px`,
  left: `30px`,
  top: `416px`,
});

const Rectangle24 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `6px`,
  width: `300px`,
  height: `45px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Group80 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `99px`,
  height: `18px`,
  left: `100px`,
  top: `13px`,
});

const Group79 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `18px`,
  height: `18px`,
  left: `0px`,
  top: `0px`,
});

const LogoGoogleg48Dp = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `18px`,
  height: `18px`,
  left: `0px`,
  top: `0px`,
});

const Shape = styled("img")({
  height: `8.46px`,
  width: `8.64px`,
  position: `absolute`,
  left: `9px`,
  top: `7px`,
});

const Shape1 = styled("img")({
  height: `7.29px`,
  width: `14px`,
  position: `absolute`,
  left: `1px`,
  top: `11px`,
});

const Shape2 = styled("img")({
  height: `8.08px`,
  width: `3.96px`,
  position: `absolute`,
  left: `0px`,
  top: `5px`,
});

const Shape3 = styled("img")({
  height: `7.29px`,
  width: `14.06px`,
  position: `absolute`,
  left: `1px`,
  top: `0px`,
});

const Shape4 = styled("img")({
  height: `18px`,
  width: `18px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Group791 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `73px`,
  height: `18px`,
  left: `26px`,
  top: `0px`,
});

const Q4 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 0.54)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `600`,
  fontSize: `15px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});


function Q() {
  return (
    <Q1>
      <Q2>
        {`소셜 로그인`}
      </Q2>
      <Q3/>
      <Group81>
        <Rectangle24>
        </Rectangle24>
        <Group80>
          <Group79>
          </Group79>
          <Group791>
            <Q4>
              {`구글 로그인`}
            </Q4>
          </Group791>
        </Group80>
      </Group81>
    </Q1>);

  }

export default Q;

  
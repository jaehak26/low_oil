import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { loginMessage, inputLoginId, inputLoginPwd } from '../../recoil/loginState';
import { useRecoilState } from 'recoil';



export default function LoginComp() {
  const [userIdCoil, setUserIdCoil] = useRecoilState(inputLoginId);
  const [loginMessageCoil, setLoginMessageCoil] = useRecoilState(loginMessage);
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  const navigateToRegister = () => {
    navigate('/userRegister');
  };

  const LoginButton = () => {
    if (loginMessageCoil.message == 'SUCCESS') {
      return (
        <>
          <div>{loginMessageCoil.userId}님 안녕하세요</div>
          <Button onClick={navigateToLogout}>로그아웃</Button>
        </>
      );
    }
    return <><Button onClick={navigateToLogin}>로그인</Button>
              <Button onClick={navigateToRegister}>회원가입</Button></>;
  };

  const navigateToLogout = () => {
    setLoginMessageCoil({ userId: '', message: 'FAILED' });
  };

  return (
    <div>
      <h1>Lo-oil</h1>
      <p>유가 정보 사이트</p>
      <LoginButton></LoginButton>
    </div>
  );
}

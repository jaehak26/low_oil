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

  const LoginButton = () => {
    if (loginMessageCoil.message == 'SUCCESS') {
      return (
        <>
          <div>{loginMessageCoil.userId}님 안녕하세요</div>
          <Button onClick={navigateToLogout}>LOGOUT</Button>
        </>
      );
    }
    return <Button onClick={navigateToLogin}>Login</Button>;
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

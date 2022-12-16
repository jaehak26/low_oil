import React, { useState, useEffect, useInsertionEffect } from 'react';
import Container from '@mui/material/Container'
import './input.css'
import { clickLoginButton } from './ChangeForm';
import { loginMessage } from '../../recoil/loginState';
import { useRecoilState } from 'recoil';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import useAsync from '../../useAsync';
import GotoMain from '../GotoMain'

import {SERVER_LINK} from '../../serverLink'

import { Button } from '@mui/material';

const getRegisterServer = SERVER_LINK + "/api/userRegister";


async function getUser(formdata) {
  //console.log(formdata);

  let form = new FormData();
  form.append("userId", formdata.userId);
  form.append("userPwd", formdata.userPwd);
  form.append("userEmail", formdata.userEmail);
  form.append("userPhone", formdata.userPhone);
  //console.log(form);

  let requestOptions = {
    method: 'POST',
    body: form,
    redirect:"follow"
  };
  
  const response = await fetch(getRegisterServer, requestOptions);
  return response.json();
}

function RegisterForm() {
  const [registerForm, setRegisterForm] = useState({ userId: '', userPwd: '', userPhone: '', userEmail: ''});

  console.log(registerForm)
  const [state, refetch] = useAsync(getUser, registerForm, [], true);
  const { loading, data: users, error } = state;


  const navigate = useNavigate();

  useEffect(() => {
    refetch(registerForm)
  },[])

  //서버의 값과 맞는지 확인
  //server값은 간접적으로 사용하지 말고 본인값이 변할 때를 기준으로 처리
  useEffect(() => {
    console.log(users?.isRegisterAble )
    if (users?.isRegisterAble != undefined || users?.isRegisterAble != "") {

      if (users?.isRegisterAble == "true") {

        navigate('/');
      } else if(users?.isRegisterAble == "false") {
        alert('이 아이디는 등록할 수 없습니다.');
      }
    }
      //server값은 간접적으로 사용하지 말고 본인값이 변할 때를 기준으로 처리
  }, [users?.isRegisterAble]);


  if (loading) return <div>로딩중..</div>;
  //if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return <button onClick={() => refetch(registerForm)}>불러오기</button>;

  return (
    <Container sx={{  position: "absolute",
      top: "33%",
      left: "33%",
      textAlign: "left"}}>
      <div>
      <fieldset style={{ maxWidth: '350px',
      textAlign: "left" ,
      borderColor:"rgba(4,127,242,0.5)"}}>
        <legend>회원가입</legend>
        <div>
          <label style={{ margin: '13px' }}>아이디</label>
          <input 
            onChange={(e) => {
              setRegisterForm({ ...registerForm, userId: e.target.value });
              //console.log(loginForm);
            }}
            id="userId"
            type="text"
          ></input>
        </div>

        <label style={{ margin: '5px' }}>비밀번호</label>
        <input
          onChange={(e) => {
            setRegisterForm({ ...registerForm, userPwd: e.target.value });
          }}
          id="userPwd"
          type="password"
        ></input>
        <br/>

        <label style={{ marginRight: '13px', marginLeft:'13px' }}>이메일</label>
        <input
          onChange={(e) => {
            setRegisterForm({ ...registerForm, userEmail: e.target.value });
          }}
          id="userEmail" placeholder="Email" type="text"
        ></input>
        <br/>

        <label style={{ margin: '5px' }}>전화번호</label>
        <input
          onChange={(e) => {
            setRegisterForm({ ...registerForm, userPhone: e.target.value });
          }}
          id="userPhone" 
          placeholder="Phone Number" type="text"
        ></input>

        <Button style={{ margin: '5px' }} onClick={() => refetch(registerForm)}>
          회원가입
        </Button>
      </fieldset>

        <div className='testDiv' style={{display:"none"}}> 
        {users.isRegisterAble}
        </div>
      </div>
      <GotoMain/>
    </Container>
  );
}

export default RegisterForm;
import React, { useState, useEffect, useInsertionEffect } from 'react';
import Container from '@mui/material/Container'

import { clickLoginButton } from './ChangeForm';
import { loginMessage } from '../../recoil/loginState';
import { useRecoilState } from 'recoil';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import useAsync from '../../useAsync';

import {SERVER_LINK} from '../../serverLink'


const getLoginServer = SERVER_LINK + "/api/login";


let normalForm = new FormData();
normalForm.append("inputId", "");
normalForm.append("inputPwd", "");

async function getUser(formdata=normalForm) {
  console.log(formdata);
  let form = new FormData();
  form.append("inputId", formdata.inputId);
  form.append("inputPwd", formdata.inputPwd);
  console.log(form);
  let requestOptions = {
    method: 'POST',
    body: form,
    redirect:"follow"
  };
  
  const response = await fetch(getLoginServer, requestOptions);
  return response.json();
}

function LoginForm() {
  const [loginForm, setLoginForm] = useState({ inputId: '', inputPwd: '' });
  const [loginMessageCoil, setLoginMessageCoil] = useRecoilState(loginMessage);

  const [state, refetch] = useAsync(getUser, loginForm, [], false);
  const [user, setUser] = useState('');
  const { loading, data: users, error } = state;



  const navigate = useNavigate();

  //서버값을 user에 set함
  const userExist = () => {   
    refetch(loginForm); 
  };



  //서버의 값과 맞는지 확인
  //server값은 간접적으로 사용하지 말고 본인값이 변할 때를 기준으로 처리
  useEffect(() => {
    console.log(users?.isUserExist )
    if (users?.isUserExist != undefined || users?.isUserExist != "") {

      if (users?.isUserExist == "true") {
        setLoginMessageCoil({
          ...loginMessageCoil,
          userId: loginForm.inputId,
          message: 'SUCCESS',
        });
        navigate('/');
      } else if(users?.isUserExist == "false") {
        alert('잘못된 아이디 혹은 비밀번호입니다.');
      }
    }
      //server값은 간접적으로 사용하지 말고 본인값이 변할 때를 기준으로 처리
  }, [users?.isUserExist]);

  if (loading) return <div>로딩중..</div>;
  //if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return <button onClick={() => refetch()}>불러오기</button>;
  return (
    <Container sx={{  position: "absolute",
      top: "33%",
      left: "33%",
      textAlign: "left"}}>
      <div>
      <fieldset style={{ maxWidth: '350px',
      textAlign: "left" ,
      borderColor:"rgba(4,127,242,0.5)"}}>
        <legend>로그인</legend>
        <div>
          <label style={{ margin: '13px' }}>아이디</label>
          <input
            name="inputId"
            onChange={(e) => {
              setLoginForm({ ...loginForm, inputId: e.target.value });
              //console.log(loginForm);
            }}
            id="inputId"
          ></input>
        </div>
        <label style={{ margin: '5px' }}>비밀번호</label>
        <input
          name="inputPwd"
          onChange={(e) => {
            setLoginForm({ ...loginForm, inputPwd: e.target.value });
          }}
          id="inputPwd"
        ></input>

        <button style={{ margin: '5px' }} onClick={userExist}>
          login
        </button>
      </fieldset>
        <div> 
        {users.isUserExist} ({users.userId}) 
        <button onClick={refetch}>다시 불러오기</button>
        </div>
      </div>
    </Container>
  );
}

export default LoginForm;

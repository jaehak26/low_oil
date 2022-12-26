import logo from './logo.svg';
import './App.css';

import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TestModule from './test/test'
import TestApi from './test/testApi'
import {getAvgAllPrice} from './openApi/opinetApi'
import MainPage from "./component/mainPage/mainPage"

import Map from './component/mainPage/table/lowTop20/lowtopMap'

import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';

import {YOUR_NCP_CLIENT_ID} from './component/maps/clientId'

import LoginForm from './component/Login/LoginForm'
import RegisterForm from './component/Login/RegisterForm'

function App() {

	return (
    <>
	<div className='App'>
	<RenderAfterNavermapsLoaded
        ncpClientId={YOUR_NCP_CLIENT_ID}
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>} >   

		<BrowserRouter>
		<Routes>
			<Route path="/" element={<MainPage />}></Route>
			<Route path="/test/api" element={<TestApi />}></Route>
			{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
			<Route path="/test/module" element={<TestModule />}></Route>
			<Route path="/test/navermap" element={<Map></Map>}></Route>
			<Route path="/login" element={<LoginForm />}></Route>
			<Route path="/userRegister" element={<RegisterForm />}></Route>
		</Routes>
		</BrowserRouter>
	</RenderAfterNavermapsLoaded>
	</div>
    </>
	);
}

export default App;

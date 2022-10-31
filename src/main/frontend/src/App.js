import logo from './logo.svg';
import './App.css';

import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TestModule from './test/test'
import TestApi from './test/testApi'
import {getAvgAllPrice} from './openApi/opinetApi'
import MainPage from "./component/mainPage/mainPage"

function App() {

 


  return (
    <>
      <div className='App'>
			<BrowserRouter>

				<Routes>
					<Route path="/" element={<MainPage />}></Route>
					<Route path="/test/api" element={<TestApi />}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					<Route path="/test/module" element={<TestModule />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);

    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import React,{useEffect, useState} from 'react'
import axios from 'axios'

import TestModule from './test/test'
import TestApi from './test/testApi'
import {getAvgAllPrice} from './openApi/opinetApi'

function App() {

 


  return (
    <>
      <TestModule></TestModule>
      <TestApi></TestApi>
    </>
  );
}

export default App;

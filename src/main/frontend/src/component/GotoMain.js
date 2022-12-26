import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

export default function GotoMain(){

    const navigate = useNavigate();

    const navigateToMain = () => {
      navigate('/');
    };
  
    return <Button onClick={navigateToMain}>
        MainPage
    </Button>
}
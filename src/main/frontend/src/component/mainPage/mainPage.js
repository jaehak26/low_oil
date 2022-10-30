import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import theme from '../../theme'
import AvgAllPrice from './table/avgAllPrice'



function MainPage(){

    return (<div>
        <Container fixed theme={theme} style={
            {borderRadius: 35,
            borderStyle: 'solid',
            borderColor:"#047ff2",
            borderWidth:"1px"}}>
        <AvgAllPrice></AvgAllPrice>
    </Container>
    </div>)
}

export default MainPage
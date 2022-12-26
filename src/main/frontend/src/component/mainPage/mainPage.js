import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import { maxWidth, styled } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import theme from '../../theme'
import AvgAllPrice from './table/avgAllPrice'

import AvgSigunPriceComponent from './avgSigunPriceComp'
import AvgRecentPriceComponent from './recentPriceComp';
import Lowtop20Component from './lowtop20Comp'

import LoginComp from '../Login/LoginComp'

import Map from '../maps/testmap'


//CSS
export const FirstPageContainer = styled(Container)({
    borderRadius: 35,
    borderStyle: 'solid',
    borderColor:"#047ff2",
    borderWidth:"1px",
    maxWidth:"xs",
    theme:theme,
    marginTop:"20px",
})

export const FirstPageFormControl = styled(FormControl)({
    borderRadius: 35,
    borderStyle: 'solid',
    borderColor:"#047ff2",
    borderWidth:"1px",
    maxWidth:"xs",
    theme:theme,
    marginTop:"20px",
})


function MainPage(){

    return (<div>
        <FirstPageContainer maxWidth="sm">
        <LoginComp></LoginComp>
        </FirstPageContainer>
        
        <FirstPageContainer maxWidth="sm">
        <FormLabel >전국 유가 평균</FormLabel>
            <AvgAllPrice></AvgAllPrice>
        </FirstPageContainer>

        <FirstPageContainer maxWidth="sm">
        <FormLabel >지역별 유가 평균</FormLabel>
            <AvgSigunPriceComponent/>
        </FirstPageContainer>
        
        <FirstPageContainer maxWidth="sm">
        <FormLabel>유가 추이</FormLabel>
            <AvgRecentPriceComponent/>
        </FirstPageContainer>

        <FirstPageContainer maxWidth="sm">
        <FormLabel >최저가 주유소</FormLabel>
            <Lowtop20Component></Lowtop20Component>
        </FirstPageContainer>

        
    </div>)
}

export default MainPage
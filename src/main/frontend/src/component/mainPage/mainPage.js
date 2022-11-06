import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import { maxWidth, styled } from '@mui/system';

import theme from '../../theme'
import AvgAllPrice from './table/avgAllPrice'
import AvgSigunPrice from './table/avgSigunPrice'
import AvgSidoPrice from './table/avgSidoPrice'
import AvgSigunPriceComponent from './avgSigunPriceComp'
import AvgRecentPriceComponent from './recentPriceComp';
import Lowtop20Component from './lowtop20Comp'

import Map from '../maps/testmap'


//CSS
const FirstPageContainer = styled(Container)({
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
            <AvgAllPrice></AvgAllPrice>
        </FirstPageContainer>

        <FirstPageContainer maxWidth="sm">
            <AvgSigunPriceComponent/>
        </FirstPageContainer>
        
        <FirstPageContainer maxWidth="sm">
            <AvgRecentPriceComponent/>
        </FirstPageContainer>

        <FirstPageContainer maxWidth="sm">
            <Lowtop20Component></Lowtop20Component>
        </FirstPageContainer>

        
    </div>)
}

export default MainPage
import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import { maxWidth, styled } from '@mui/system';

import theme from '../../theme'
import AvgAllPrice from './table/avgAllPrice'
import AvgSigunPrice from './table/avgSigunPrice'
import AvgSidoPrice from './table/avgSidoPrice'
import AvgSigunPriceComponent from './avgSigunPriceComp'


//CSS
const FirstPageContainer = styled(Container)({
    borderRadius: 35,
    borderStyle: 'solid',
    borderColor:"#047ff2",
    borderWidth:"1px",
    maxWidth:"xs",
    theme:theme,
})

function MainPage(){

    return (<div>
        <FirstPageContainer maxWidth="sm">
            <AvgAllPrice></AvgAllPrice>
        </FirstPageContainer>
        <br/>
        <FirstPageContainer maxWidth="sm">
            <AvgSigunPriceComponent/>
        </FirstPageContainer>
    
    </div>)
}

export default MainPage
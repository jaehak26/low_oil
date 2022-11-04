import React, { useState,useEffect } from 'react'
import {useRecoilState} from 'recoil'

import AvgSidoPrice from './table/avgSidoPrice'
import AvgSigunPrice from './table/avgSigunPrice'
import SidoSelect from './selectBar/avgSigunPrice/sidoSelect'
import sigunSelect from './selectBar/avgSigunPrice/sigunSelect'
import {avgSigunSelectData} from '../../recoil/selectData'
import SigunSelect from './selectBar/avgSigunPrice/sigunSelect'
import { flexbox } from '@mui/system'



function AvgSigunPriceComponent(){
    const [coil,setCoil] = useRecoilState(avgSigunSelectData)
    const [comp, setComp] = useState(<p></p>)
    
    useEffect(()=>{
        console.log(coil.sigunCode)
        if(coil.sigunCode===""){
            setComp(<AvgSidoPrice></AvgSidoPrice>)
        }
        else if(coil.sigunCode!==""){
            setComp(<AvgSigunPrice></AvgSigunPrice>)
        }
    
    },[coil.sidoCode,coil.sigunCode])
        

    return (
        <>
        {/*display:flex는 정렬적용할 때 필요한듯 , 
        justifyContent:flex-end는 우측 정렬*/ }
            <div style={{display:'flex', justifyContent:'flex-end'}}>
                <SidoSelect style={{textAlign:"right"}}></SidoSelect>
                <SigunSelect style={{textAlign:"right"}}></SigunSelect>
            </div>
            {comp}
        </>
    )

}

export default AvgSigunPriceComponent
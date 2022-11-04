import {React, useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useRecoilState } from 'recoil';

import {getAreaCode, getSidoPrice} from '../../../../openApi/opinetApi'
import {avgSigunSelectData} from '../../../../recoil/selectData'

function SigunSelect(){
    //select바의 내용을 저장하는 값
    const [selectedValue,setSelectedValue] = useState("all")
    //areaCode객체 저장
    const [areaData, setAreaData] = useState([])
    //전역 변수 세팅
    const [coil, setCoil] = useRecoilState(avgSigunSelectData)


    useEffect(()=>{
        let getData = async()=>{
            console.log(coil?.sidoCode)
            const res = await getAreaCode(coil.sidoCode);
            setAreaData(res.RESULT.OIL);
            console.log(res.RESULT.OIL)

            //두번째 select바를 첫 index로 되돌림
            //getData안에 넣으면 클라이언트에서
            //렌더링하는 과정이 보이지 않아 깔끔한듯
            setSelectedValue("all")
            setCoil({...coil,sigunCode:""})
        }
        getData()
        
    },[coil?.sidoCode])


    //select바 onChange함수
    const handleChange = (event) => {
        let selectValue = event.target.value
        setSelectedValue(selectValue)
        setCoil({...coil,sigunCode:areaData[selectValue]?.AREA_CD});
        if(selectValue==="all"){
            setCoil({...coil,sigunCode:""})
        }
        console.log(selectedValue)
        console.log(coil.sigunCode)   
    };

    

    return <>
        <FormControl 
        sx={{minWidth:"100px", 
        marginTop:"10px",
        align:'right'}} 
        size="small">
            {/* InputLabel의 id는 생략함 */ }
            <InputLabel>시군</InputLabel>
            <Select
            labelId="sigunSelectLabel"
            id="sigunSelect"
            label="sigun"
            value={selectedValue}
            onChange={handleChange}
            autoWidth
            defaultValue="all"
            >
            <MenuItem value="all">전체</MenuItem>
            {areaData?.map((arrData,index)=>{
                return(
                <MenuItem value={index}>
                    {arrData?.AREA_NM}
                </MenuItem>
            )})}
            </Select>
        </FormControl>
    </>
}

export default SigunSelect
import {React, useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useRecoilState } from 'recoil';

import {getAreaCode, getSidoPrice} from '../../../../openApi/opinetApi'
import {lowTop20SelectData} from '../../../../recoil/selectData'

function SidoSelect(){
    //select바의 내용을 저장하는 값
    //select의 초기값 설정도 가능
    const [selectValue,setSelectValue] = useState("01")
    //areaCode객체 저장
    const [areaData, setAreaData] = useState([])
    //전역 변수 세팅
    const [coil, setCoil] = useRecoilState(lowTop20SelectData)


    useEffect(()=>{
        let getData = async()=>{
            const res = await getAreaCode();
            setAreaData(res.RESULT.OIL);
            //console.log(res.RESULT.OIL)
        }
        getData()
    },[])


    //select바 onChange함수
    const handleChange = (event) => {
        let selectValue = event.target.value
        setSelectValue(selectValue)
        setCoil({...coil,sidoCode:selectValue});
        //console.log(selectValue)
    };

    

    return <>
        <FormControl 
        sx={{minWidth:"100px", 
        marginTop:"10px",
        align:'right',
        marginRight:"5px"}} 
        size="small">
            {/* InputLabel의 id는 생략함 */ }
            <InputLabel>시도</InputLabel>
            <Select
            labelId="sidoSelectLabel"
            id="sidoSelect"
            value={selectValue}
            label="sido"
            onChange={handleChange}
            autoWidth
            >
            
            {areaData?.map((arrData,index)=>{
                return(
                <MenuItem value={arrData?.AREA_CD}>
                    {arrData?.AREA_NM}
                </MenuItem>
            )})}
            </Select>
        </FormControl>
    </>
}

export default SidoSelect
import {React, useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useRecoilState } from 'recoil';

import {avgRecentPriceSelectData} from '../../../../recoil/selectData'

function RecentPriceSelect(){
    //select바의 내용을 저장하는 값
    //select의 초기값 설정도 가능
    const [selectValue,setSelectValue] = useState(0)
    //전역 변수 세팅
    const [coil, setCoil] = useRecoilState(avgRecentPriceSelectData)

    useEffect(()=>{
        setSelectValue(0)
        setCoil({...coil,selected:0});
    },[])

    //select바 onChange함수
    const handleChange = (event) => {
        let selectValue = event.target.value
        setSelectValue(selectValue)
        setCoil({...coil,selected:selectValue});
        //console.log(selectValue)
    };

    

    return <>
        <FormControl 
        sx={{minWidth:"100px", 
        marginTop:"10px",
        align:'right'}} 
        size="small">
            {/* InputLabel의 id는 생략함 */ }
            <InputLabel>기름</InputLabel>
            <Select
            labelId="oilSelectLabel"
            id="oilSelect"
            value={selectValue}
            label="oil"
            onChange={handleChange}
            autoWidth
            >
                <MenuItem value={"all"}>전체</MenuItem>
                <MenuItem value={0}>휘발유</MenuItem>
                <MenuItem value={1}>고급 휘발유</MenuItem>
                <MenuItem value={2}>경유</MenuItem>
                <MenuItem value={3}>LPG</MenuItem>
            </Select>
            {coil.selected}
        </FormControl>
    </>
}

export default RecentPriceSelect
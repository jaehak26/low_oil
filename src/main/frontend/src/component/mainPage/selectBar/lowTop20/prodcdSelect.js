import React,{useState,useEffect} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useRecoilState } from 'recoil';

import {lowTop20SelectData} from '../../../../recoil/selectData'


let oilCd = ["B027", "B034","D047", "K015"]
let oilNm = ["휘발유", "고급 휘발유","경유","LPG"]

function ProdcdSelect(){
    const [selectedCoil, setSelectedCoil] = useRecoilState(lowTop20SelectData)
    const [selectValue, setSelectValue] = useState(selectedCoil.prodcd)

        //select바 onChange함수
    const handleChange = (event) => {
        let selectValue = event.target.value
        setSelectValue(selectValue)
        setSelectedCoil({...selectedCoil,prodcd:selectValue});
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
            <InputLabel>기름</InputLabel>
            <Select
            labelId="sidoSelectLabel"
            id="sidoSelect"
            value={selectValue}
            label="sido"
            onChange={handleChange}
            autoWidth
            >
            
                {oilCd.map((code,idx)=>{
                    return(
                        <MenuItem value={code}>{oilNm[idx]}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    </>
}

export default ProdcdSelect
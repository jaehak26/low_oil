import {useState, useEffect} from 'react'
import { Table, TableCell, TableBody, TableRow, TableHead } from '@mui/material';
import { useRecoilState } from 'recoil';
import { styled } from '@mui/system';


import SidoSelect from '../selectBar/avgSigunPrice/sidoSelect'
import SigunSelect from '../selectBar/avgSigunPrice/sigunSelect';
import {getSidoPrice,getSigunPrice} from '../../../openApi/opinetApi'
import {avgSigunSelectData} from '../../../recoil/selectData'

//CSS
const MyTableCell = styled(TableCell)({
    border: "none",
    textAlign:"center"
})

function diffColor(diff){
    //console.log(diff>=0)
    if(Number(diff)>0){return {color:"red"}}
    else if(Number(diff)<0){return {color:"green"}}
    else{}
}

const diffPlus = (diff)=>{
    if(diff>0){
        return("+"+diff)
    }else return diff
}

let data=[{PRODCD:"B027",PRICE:"-",DIFF:"-",},
        {PRODCD:"B034",PRICE:"-",DIFF:"-",},
        {PRODCD:"C004",PRICE:"-",DIFF:"-",},
        {PRODCD:"D047",PRICE:"-",DIFF:"-",},
        {PRODCD:"K015",PRICE:"-",DIFF:"-",}]


function AvgSidoPrice(){

    const [apiData, setApiData] = useState(data)
    //const [result, setResult] = useState([])
    //console.log(apiData)
    const [coil, setCoil] = useRecoilState(avgSigunSelectData)


    useEffect( ()=>{
        const getData = async ()=>{
            //console.log(`sigunCode= ${coil.sigunCode}`)
            if(coil?.sigunCode == ""){
                //console.log(`coil.sidoCode${coil.sidoCode}`)
                const res = await getSidoPrice(coil.sidoCode)
                setApiData(res.RESULT.OIL)
                //console.log(res)

            }
            
            apiData.sort((a,b)=>{
                if(a["PRODCD"]<b["PRODCD"]){return -1}
                else if(a["PRODCD"]>b["PRODCD"]){return 1}
            })
            //console.log(apiData)



            //console.log(result)
            //console.log(apiData)
                
        }

        getData()
    },[coil?.sidoCode,coil?.sigunCode])


    //필요없는 데이터 날리기
    for(let i =0 ; i<apiData.length; i++){
            
        if(apiData[i].PRODCD === "C004"){
            apiData.splice(i,1)
        }
        //console.log(i)
    
    }


    return(
        <>
            
            <Table>
            <TableHead>
            <TableRow>
                <MyTableCell>휘발유</MyTableCell>
                <MyTableCell>고급 휘발유</MyTableCell>
                <MyTableCell>경유</MyTableCell>
                <MyTableCell>LPG</MyTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    {apiData?.map((arrData, index)=>{
                        return(
                            <MyTableCell>{arrData?.PRICE}</MyTableCell>
                        )
                    })}
                </TableRow>
                <TableRow>
                {apiData?.map((arrData, index)=>{
                        return(
                            <MyTableCell
                            sx={diffColor(arrData?.DIFF)}>
                                {diffPlus(arrData?.DIFF)}
                            </MyTableCell>
                        )
                    })}
                </TableRow>
            </TableBody>
            </Table>
        </>
    )
}

export default AvgSidoPrice